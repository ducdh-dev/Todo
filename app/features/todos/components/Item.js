import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Item = ({ onPress, completed, text }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			padding: 10,
			backgroundColor: 'yellow',
			borderWidth: 1
		}}
	>
		<Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{text}</Text>
	</TouchableOpacity>
);

Item.propTypes = {
	onPress: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Item;
