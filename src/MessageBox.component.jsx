import React from "react";
import Header from "./components/header/head.component";
import Message from "./components/message/message.component";
import Characteristics from "./components/character/character";
import Increment from "./components/Increment/IncrementComponent";

const MessageBox = () => {
    return <header>
        <Header/>
        <Message/>
        <Characteristics/>
        <Increment/>
    </header>
}

export default MessageBox