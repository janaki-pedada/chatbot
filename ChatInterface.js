// src/ChatInterface.js

import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: 'guest' }]);
      setInput('');
    }
  };

  return (
    <div className="chat-interface">
        <div className='"header'>
            <h1>CHAT BOT</h1>
        </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="avatar">{message.sender === 'user' ? '🤖' : '👤'}</div>
            <div className="bubble">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
        <button className="audio-button">🎤</button>
      </div>
    </div>
  );
};

export default ChatInterface;
