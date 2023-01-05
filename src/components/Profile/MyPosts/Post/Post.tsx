import s from "./Post.module.css";
import React from "react";

export const Post = ()=>{
    return (

            <div className={s.item}>
                <img src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"/>
                Posts 1
                <div>
                <span>Like</span>
                </div>
            </div>
    )
}