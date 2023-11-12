import {configureStore} from '@reduxjs/toolkit';
import GlobalReducer from './reducers/cart';

const store = configureStore({
    reducer: {
        global : GlobalReducer
    }
});

export default store;

// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

