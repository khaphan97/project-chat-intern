import styled from 'styled-components';
import './App.css';
import MyChat from './components/Chat';
import AppProvider from './context/AppProvider';

const WrapperStyled = styled.div`
	height: 100vh;
	position: relative;
	background: #b37feb;

	.myChat {
		position: absolute;
		bottom: 0;
		right: 20px;
	}
`;

function App() {
	return (
		<AppProvider>
			<WrapperStyled className='App'>
				<div className='myChat'>
					<MyChat />
				</div>
			</WrapperStyled>
		</AppProvider>
	);
}

export default App;
