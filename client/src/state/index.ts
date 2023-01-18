import { createSlice } from "@reduxjs/toolkit";

interface User {
    friends: any[];
}

interface Post {
    title: string;
    content: string;
}

const initialState = {
    mode: "light",
    user: null as User | null,
    token: null,
    posts: []as {[key:string]: any}[],
};



export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user) {
                state.user.friends = action.payload.friends;
            }else {
                console.error("user friends non existin")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post: any) => {
                if(post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        }
    }
})

export const { setMode, setPosts, setLogin, setLogout, setFriends, setPost} = authSlice.actions;

export default authSlice.reducer;