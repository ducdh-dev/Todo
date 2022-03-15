import React from 'react';
import { Text, View } from 'react-native';
import FilterLink from './FilterLink';
import { VisibilityFilters } from './filtersSlice';

const FooterView = () => (
	<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
		<Text>Show: </Text>
		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
			<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
		</View>
	</View>
);

export default FooterView;
