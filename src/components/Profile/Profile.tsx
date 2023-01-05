import React from "react"
import myPhoto from "../../assets/images/download.jpg";
import s from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fhome%2FFC5_01_Banner-1200x200-c79e652045d64313f111e67ac5d3aeb5e8c32b17.jpg"}/>
            </div>
            <div>
                <img src={myPhoto} alt=""/>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Posts 1
                    </div>
                    <div className={s.item}>
                        Posts 2
                    </div>
                </div>
            </div>
        </div>
    )
}