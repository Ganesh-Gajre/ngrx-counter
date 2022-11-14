import { Post } from "src/app/model/post.model"

export interface PostsState {
    posts: Post[]
}

export const initialState: PostsState = {
    posts: [
        { id: '1', title: 'Sample Title1', body: 'Sample Description1' },
        { id: '2', title: 'Sample Title2', body: 'Sample Description2' },
    ]
}