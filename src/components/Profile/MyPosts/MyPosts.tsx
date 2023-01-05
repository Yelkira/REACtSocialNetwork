import React from "react"
import {Post} from "./Post/Post";
import s from "./MyPost.module.css";

export const MyPosts = () => {
    return (<div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}