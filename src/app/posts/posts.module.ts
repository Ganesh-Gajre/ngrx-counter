import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsEffect } from "./state/posts.effect";
import { postsReducer } from "./state/posts.reducer";
import { POSTS_STATE_NAME } from "./state/posts.selector";

const routes: Routes = [
    {
        path: '', component: PostsListComponent
    }
];

@NgModule({
    declarations: [
        PostsListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
        EffectsModule.forFeature([PostsEffect]),
    ]
})
export class PostsModule {

}