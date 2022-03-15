import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import Item from './components/Item';

const TodoListView = ({ todos, toggleTodo }) => {
	const renderItem = ({ item }) => <Item key={item.id} {...item} onPress={() => toggleTodo(item.id)} />;
	return (
		<View style={{ flex: 1, marginVertical: 20, backgroundColor: 'grey' }}>
			<FlatList data={todos} renderItem={renderItem} keyExtractor={item => item.id} />
		</View>
	);
};

TodoListView.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	toggleTodo: PropTypes.func.isRequired
};

export default TodoListView;
