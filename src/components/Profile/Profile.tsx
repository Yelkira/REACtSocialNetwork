import React from "react"
import myPhoto from "../../assets/images/download.jpg";

export const Profile = () => {
    return (
        <div className={"content"}>
            <div>
                <img
                    src={"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ffar-cry-5%2Fhome%2FFC5_01_Banner-1200x200-c79e652045d64313f111e67ac5d3aeb5e8c32b17.jpg"}/>
            </div>
            <div>
                <img src={myPhoto} alt=""/>
            </div>
            <div>
                My posts
                <div>New post</div>
                <div>Posts</div>
                <div>Posts</div>
            </div>
        </div>
    )
}