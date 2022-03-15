/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView,
	useColorScheme, View,
} from 'react-native';

import {
	Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './lib/createStore';
import AddTodoView from './features/todos/AddTodoView';
import VisibleTodoListView from './features/todos/VisibleTodoListView';
import FooterView from './features/filters/FooterView';

const Root = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1, ...backgroundStyle }}>
				<View style={{ marginHorizontal: 20, flex: 1 }}>
					<AddTodoView />
					<VisibleTodoListView />
					<FooterView />
				</View>
			</SafeAreaView>
		</Provider>
	);
};

export default Root;
