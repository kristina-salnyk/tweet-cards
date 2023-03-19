import styled from 'styled-components';

import cardBg from '../../assets/img/card-bg.png';

export const UserCardStyled = styled.div`
	position: relative;
	padding: 28px 36px 36px;
	width: 380px;
	background: ${({ theme }) => theme.colors.background};
	box-shadow: ${({ theme }) => theme.shadows[3]};
	border-radius: ${({ theme }) => theme.shape.borderRadius.l};
	text-align: center;
`;

export const Logo = styled.img`
	position: absolute;
	top: 20px;
	left: 20px;
	width: 76px;
`;

export const CardDecoration = styled.div`
	width: 308px;
	height: 168px;
	background: url(${cardBg});
`;

export const UserAvatar = styled.div`
	position: absolute;
	top: 214px;
	left: 0;
	width: 100%;
	height: 8px;
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: ${({ theme }) => theme.shadows[1]};
`;

export const UserPicture = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80px;
	height: 80px;
	border-radius: ${({ theme }) => theme.shape.borderRadius.xl};
	background: ${({ theme }) => theme.colors.primary};
	box-shadow: ${({ theme }) => theme.shadows[0]};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImageWrap = styled.div`
	width: 62px;
	height: 62px;
	border-radius: ${({ theme }) => theme.shape.borderRadius.xl};
	background: ${({ theme }) => theme.colors.secondary};
	overflow: hidden;
`;

export const UserInfo = styled.div`
	margin-top: 88px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	font-weight: ${({ theme }) => theme.typography.weight.medium};
	font-size: ${({ theme }) => theme.typography.size.l};
	line-height: 1.2;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
	margin-top: 26px;
	padding: 14px 0;
	width: 196px;
	font-weight: ${({ theme }) => theme.typography.weight.semiBold};
	font-size: ${({ theme }) => theme.typography.size.m};
	line-height: 1.2;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.black};
	background: ${({ theme, active }) =>
		active ? theme.colors.accent : theme.colors.primary};
	box-shadow: ${({ theme }) => theme.shadows[2]};
	border-radius: ${({ theme }) => theme.shape.borderRadius.s};
	border: none;
	cursor: pointer;
`;
