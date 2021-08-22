import { Card } from 'antd';
import React from 'react';
import ChatBlock from './ChatBlock';

export default function MyChat(props) {
	return (
		<div>
			<Card title='Chat Bot' style={{ boxShadow: '0 0 5px #eee', padding: '0' }}>
				<div
					id='myBox'
					style={{ height: '500px', width: '400px', overflowY: 'auto', padding: '15px' }}
				>
					<ChatBlock />
				</div>
			</Card>
		</div>
	);
}
