import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
	const [chatArr, setChatArr] = useState([]);

	const fetchData = async (userChoose) => {
		const status = userChoose ? userChoose.data.next : 'conversation_start';

		let newChatArr = [];

		if (userChoose) {
			newChatArr = [...chatArr, { text: userChoose.text, type: 'user' }];
		}

		const { data } = await axios.get(`http://localhost:8080/chat/get/${status}`);

		newChatArr = [...newChatArr, { ...data, type: 'bot' }];

		setChatArr(newChatArr);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <AppContext.Provider value={{ fetchData, chatArr }}>{children}</AppContext.Provider>;
}
