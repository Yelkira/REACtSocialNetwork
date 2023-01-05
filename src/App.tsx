import React from 'react';
import './App.css';
import myPhoto from "./assets/images/download.jpg"


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7Vk9jZPLL-ydgWtTiYaACGuQgII1KM0Leg&usqp=CAU"/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
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
                </div>
            </div>

        </div>
    )
}


export default App;
