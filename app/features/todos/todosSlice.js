import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: {
			reducer(state, action) {
				const { id, text } = action.payload;
				state.push({ id, text, completed: false });
			},
			prepare(text) {
				nextTodoId += 1;
				return { payload: { text, id: nextTodoId } };
			}
		},
		toggleTodo(state, action) {
			const todo = state.find(item => item.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		}
	}
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
