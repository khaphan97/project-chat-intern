import styled from 'styled-components';

export const ChatStyled = styled.div`
	padding: 20px;
	border-radius: 3px;
	margin-bottom: 15px;
	margin-right: 5px;

	text-align: center;
	background: ${(props) => props.background};

	max-width: 80%;
	width: auto;

	color: #fff;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

	.button-group {
		* {
			margin-bottom: 5px;
		}
	}
`;
