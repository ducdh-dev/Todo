import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Link = ({
	active, children, setVisibilityFilter, filter
}) => (
	<TouchableOpacity
		onPress={() => setVisibilityFilter(filter)}
		disabled={active}
		style={{
			backgroundColor: active ? 'green' : 'blue',
			padding: 10
		}}
	>
		<Text>{children}</Text>
	</TouchableOpacity>
);

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	setVisibilityFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired
};

export default Link;
