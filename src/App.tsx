import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technoligies/>
        </div>
    )
}
const Technoligies = () =>{
    return (
        <div>
            <ul>
                <li>Css</li>
                <li>HTML</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    )
}
const Header = () => {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    )
}

export default App;
