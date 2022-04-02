import React, { Component } from 'react';
import { Input, Button, Row, Col, List } from 'antd';

class TodoListUI extends Component {
	render() {
		return (
			<div
				style={{
					width: '600px',
					height: '500px',
					background: '#ffffff',
					padding: '20px',
					borderRadius: '5px',
				}}
			>
				<Row justify="space-between" align="middle">
					<Col span={21}>
						<Input
							placeholder={this.props.inputValue}
							value={this.props.inputValue}
							// onChange={debounce(this.inputChangeValue)}
							onChange={this.props.inputChangeValue}
						/>
					</Col>
					<Col span={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button type="primary" onClick={this.props.clickBtn}>
							增加
						</Button>
					</Col>
				</Row>
				<List
					style={{ marginTop: '5px', height: '90%' }}
					size="small"
					footer={<div></div>}
					bordered
					dataSource={this.props.list}
					renderItem={(item, index) => (
						<List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>
					)}
				/>
			</div>
		);
	}
}

export default TodoListUI;
