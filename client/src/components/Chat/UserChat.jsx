import React from 'react';
import { ChatStyled } from './style/ChatStyled';

export default function UserChat({ node }) {
	return node.text.length <= 0 ? null : (
		<div style={{ display: 'flex', justifyContent: 'flex-end' }} className='chat-container'>
			<ChatStyled background='#1890ff'>{node.text}</ChatStyled>
		</div>
	);
}
