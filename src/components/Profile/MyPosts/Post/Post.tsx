import s from "./Post.module.css";
import React from "react";

type PostPropsType ={
    message: string
    likesCount: number
}

export const Post = (props:PostPropsType)=>{
    return (
            <div className={s.item}>
                <img src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"/>
                {props.message}
                <div>
                <span>like {props.likesCount}</span>
                </div>
            </div>
    )
}