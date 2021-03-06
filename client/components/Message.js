import React from 'react';

const Message = ({i, chat, user}) => (
    <li id={`chat-${i}`} className={`chat ${user === chat.firstname ? "right" : "left"}`}>
         <img src={chat.profilepic} />
         <h6>{chat.firstname}:</h6>
        <h7>{chat.message}</h7>
    </li>
);

export default Message;