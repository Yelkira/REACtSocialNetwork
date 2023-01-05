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
                    <Post message={"Hi, how are you?"} likesCount={21}/>
                    <Post message={"Hi, how are you?"} likesCount={13}/>
                </div>
            </div>
        </div>
    )
}