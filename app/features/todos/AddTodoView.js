import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { addTodo } from './todosSlice';

const AddTodoView = () => {
	const [todoText, setTodoText] = useState('');
	const dispatch = useDispatch();
	const onChangeText = value => setTodoText(value);

	return (
		<View>
			<TouchableOpacity
				style={{
					paddingHorizontal: 30,
					paddingVertical: 10,
					backgroundColor: 'red',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				onPress={() => {
					if (!todoText.trim()) {
						return;
					}
					dispatch(addTodo(todoText));
					setTodoText('');
				}}
			>
				<Text>Add Todo</Text>
			</TouchableOpacity>
			<TextInput style={{ borderWidth: 1, padding: 10, fontSize: 16 }} value={todoText} onChangeText={onChangeText} />
		</View>
	);
};

AddTodoView.propTypes = {
};

export default AddTodoView;
