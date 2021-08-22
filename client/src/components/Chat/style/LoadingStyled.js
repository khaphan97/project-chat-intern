import styled from 'styled-components';

export const LoadingStyled = styled.div`
	text-align: left;
	font-size: 3rem;

	span {
		animation: textWave 1s ease-in-out infinite;
		display: inline-block;
		color: #ffa39e;

		&:nth-of-type(1) {
			animation-delay: 0s;
		}

		&:nth-of-type(2) {
			animation-delay: 0.1s;
		}

		&:nth-of-type(3) {
			animation-delay: 0.2s;
		}
	}

	@keyframes textWave {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-15px);
		}

		100% {
			transform: translateY(0);
		}
	}
`;
