import PropTypes from 'prop-types';

import logo from '../../assets/img/logo.svg';

import {
	Button,
	CardDecoration,
	ImageWrap,
	Logo,
	UserAvatar,
	UserCardStyled,
	UserInfo,
	UserPicture,
} from './UserCard.styled';

const UserCard = ({
	id,
	user,
	tweets,
	followers,
	avatar,
	following = false,
}) => {
	return (
		<UserCardStyled>
			<Logo src={logo} alt='GoIT logo' />
			<CardDecoration />
			<UserAvatar>
				<UserPicture>
					<ImageWrap>
						<img src={avatar} alt={user} />
					</ImageWrap>
				</UserPicture>
			</UserAvatar>
			<UserInfo>
				<span>{tweets.toLocaleString('en-US')} tweets</span>
				<span>{followers.toLocaleString('en-US')} followers</span>
			</UserInfo>
			<Button type='button' active={following}>
				{following ? 'Following' : 'Follow'}
			</Button>
		</UserCardStyled>
	);
};

export default UserCard;

UserCard.propTypes = {
	id: PropTypes.number.isRequired,
	user: PropTypes.string.isRequired,
	tweets: PropTypes.number.isRequired,
	followers: PropTypes.number.isRequired,
	avatar: PropTypes.string.isRequired,
	following: PropTypes.bool,
};
