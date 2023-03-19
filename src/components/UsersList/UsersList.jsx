import { useEffect, useState } from 'react';

import { UserCard } from '../UserCard';
import usersData from '../../data.json';

import { UsersListItem, UsersListStyled } from './UsersList.styled';

const UsersList = () => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		if (users !== null) return;

		const followingUsersJSON = localStorage.getItem('followings');
		const followingUsers = JSON.parse(followingUsersJSON);

		if (!followingUsers) {
			setUsers(usersData.users);
			return;
		}

		const state = usersData.users.map((item) => {
			const following = followingUsers.includes(item.id);
			return {
				...item,
				following,
				followers: item.followers + following,
			};
		});

		setUsers(state);
	}, [users]);

	useEffect(() => {
		if (users === null) return;

		const followingUsers = users
			.filter((item) => item.following)
			.map((item) => item.id);

		localStorage.setItem('followings', JSON.stringify(followingUsers));
	}, [users]);

	const toggleFollowing = (userId) => {
		setUsers((prevState) => {
			const state = prevState.map((item) => {
				if (item.id === userId) {
					const following = !item.following;
					return {
						...item,
						following,
						followers: item.followers + (following ? 1 : -1),
					};
				}
				return item;
			});
			return state;
		});
	};

	return (
		<>
			{users && (
				<UsersListStyled>
					{users.map((item) => (
						<UsersListItem key={item.id}>
							<UserCard onFollowClick={toggleFollowing} {...item} />
						</UsersListItem>
					))}
				</UsersListStyled>
			)}
		</>
	);
};

export default UsersList;
