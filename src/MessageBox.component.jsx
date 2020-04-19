import React from "react";
import Header from "./components/header/Head.component";
import Message from "./components/message/Message.component";
import Characteristics from "./components/character/Сharacter";
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