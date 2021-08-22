import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import BotChat from './BotChat';
import { LoadingStyled } from './style/LoadingStyled';
import UserChat from './UserChat';
export default function ChatBlock() {
	const { chatArr, fetchData, isLoading } = useContext(AppContext);

	const handleClick = (data) => {
		fetchData(data);
	};

	useEffect(() => {
		const scrollToNewChat = () => {
			const chatBox = document.querySelector('.chatBox:last-child ');

			chatBox?.scrollIntoView({ behavior: 'smooth' });
		};

		scrollToNewChat();
	}, [chatArr]);

	return (
		<>
			<div>
				{chatArr.map((node, index) => {
					return (
						<div key={index} class='chatBox'>
							{node.type === 'bot' ? (
								<BotChat node={node} handleClick={handleClick} />
							) : (
								<UserChat node={node} />
							)}
						</div>
					);
				})}
			</div>
			{isLoading ? (
				<LoadingStyled>
					<span>.</span>
					<span>.</span>
					<span>.</span>
				</LoadingStyled>
			) : null}
		</>
	);
}
