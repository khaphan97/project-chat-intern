import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import BotChat from './BotChat';
import UserChat from './UserChat';
export default function ChatBlock() {
	const { chatArr, fetchData } = useContext(AppContext);

	const handleClick = (data) => {
		fetchData(data);
	};

	return (
		<>
			{chatArr.map((node, index) => {
				return (
					<div key={index}>
						{node.type === 'bot' ? (
							<BotChat node={node} handleClick={handleClick} />
						) : (
							<UserChat node={node} />
						)}
					</div>
				);
			})}
		</>
	);
}
