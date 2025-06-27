import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE_URL = "https://e32e30fa-4c34-4a35-9226-114ed61f8048-00-1jd5qiv4sdguo.pike.replit.dev";

export const savePost = createAsyncThunk(
    "posts/savePost",
    async (postContent) => {
        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;

        const data = {
            title: "Post Title",
            content: postContent,
            user_id: userId,
        };

        const response = await axios.post(`${BASE_URL}/posts`, data); return response.data;
    }
);

export const fetchPostsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userid) => {
        const response = await fetch(`${BASE_URL}/posts/user/${userid}`);
        return response.json();
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState: { posts: [], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
        });
        builder.addCase(savePost.fulfilled, (state, action) => {
            state.posts = [action.payload, ...state.posts];
        });
    },
});

export default postsSlice.reducer;