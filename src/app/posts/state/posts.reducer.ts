import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { loadPostsSuccess } from "./posts.action";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    })
);

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action);
}