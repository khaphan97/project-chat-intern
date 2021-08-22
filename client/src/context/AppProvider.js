import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
	const [chatArr, setChatArr] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async (userChoose) => {
		const status = userChoose ? userChoose.data.next : 'conversation_start';

		let newChatArr = [];

		if (userChoose) {
			newChatArr = [...chatArr, { text: userChoose.text, type: 'user' }];
			setChatArr(newChatArr);
		}

		setIsLoading(true);

		const { data } = await axios.get(`http://localhost:8080/chat/get/${status}`);

		newChatArr = [...newChatArr, { ...data, type: 'bot' }];

		setChatArr(newChatArr);

		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<AppContext.Provider value={{ fetchData, chatArr, isLoading }}>
			{children}
		</AppContext.Provider>
	);
}
