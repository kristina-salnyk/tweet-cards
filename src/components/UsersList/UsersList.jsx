import { useEffect, useState } from 'react';

import { UserCard } from '../UserCard';
import usersData from '../../data.json';
import { UsersListStyled } from './UsersList.styled';

const UsersList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (users.length > 0) return;

		// TODO: add local storage
		setUsers(usersData.users);
	}, [users]);

	return (
		<>
			{users.length > 0 && (
				<UsersListStyled>
					{users.map((item) => (
						<li key={item.id}>
							<UserCard {...item} />
						</li>
					))}
				</UsersListStyled>
			)}
		</>
	);
};

export default UsersList;
