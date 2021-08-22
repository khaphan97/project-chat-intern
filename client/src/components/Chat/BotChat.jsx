import { Button } from 'antd';
import React from 'react';
import { ChatStyled } from './style/ChatStyled';

export default function BotChat({ node, handleClick, userChooseHandle }) {
	const { text, buttons } = node;

	console.log(node);

	const onClickButton = (data) => {
		handleClick(data);
	};

	return (
		<div>
			<ChatStyled background='#ff4d4f' className='chat-container'>
				<p>{text}</p>
				<div className='button-group'>
					{buttons.map((button, idx) => (
						<Button
							block
							key={idx}
							onClick={() => onClickButton({ data: button.data, text: button.text })}
						>
							{button.text}
						</Button>
					))}
				</div>
			</ChatStyled>
		</div>
	);
}
