import {createSlice, configureStore, createListenerMiddleware, Tuple, createAsyncThunk} from '@reduxjs/toolkit'

const listenerMiddleware = createListenerMiddleware()
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log(state)
        })
    }


})

export const {incremented, decremented} = counterSlice.actions

export const fetchPosts = createAsyncThunk('posts', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = response.json();
        console.log(posts)
        return posts
    } catch {
        console.log('ERRR')
        return 'err'
    }
})
const logger = (store: any) => (next: any) => (action: any) => {
    console.log('logger', store)
    next(action)
}
export const store = configureStore({
    reducer: counterSlice.reducer,
    middleware: () => new Tuple(logger),
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))


// {value: 1}