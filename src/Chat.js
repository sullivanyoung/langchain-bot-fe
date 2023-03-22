import React from 'react';
import { useState, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';
import './App.css';

function Chat({ history }) {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setFinished(true);
  }, []);

  return history.map((x) => {
    return (
      <div className="chat-log">
        <div className="chat-message">
          <div className="chat-message-center">
            <div className="avatar"></div>
            <div className="message">{x.question}</div>
          </div>
        </div>
        <div className="chat-message chatbot">
          <div className="chat-message-center">
            <div className="avatar">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h24v24H0z" />
                  <path
                    d="m5.35 7.106 5.91 1.734a.33.33 0 0 0 .34-.125l2.16-3.152a.246.246 0 0 0-.056-.33l-3.06-2.182a.322.322 0 0 0-.359.008l-4.97 3.839c-.099.078-.083.171.034.208zm9.35-3.52.306 6.452a.36.36 0 0 0 .24.303l3.87 1.2a.251.251 0 0 0 .308-.157L20.54 7.65a.347.347 0 0 0-.132-.358l-5.514-3.806c-.11-.074-.198-.03-.194.1zm6.153 9.327-5.502 2.14a.336.336 0 0 0-.197.292l-.004 3.64c.003.121.1.218.217.215l3.527-.138a.325.325 0 0 0 .275-.215l1.821-5.797c.035-.117-.027-.178-.137-.137zM14.66 20.81l-3.947-5.086a.345.345 0 0 0-.356-.112L6.754 16.81a.237.237 0 0 0-.141.3l1.31 3.669c.044.12.18.217.306.217L14.57 21c.126-.002.167-.086.09-.19zM5.02 17.306l-2.005-5.807a.322.322 0 0 1 .109-.342l3.064-2.262a.246.246 0 0 1 .33.041l2.275 2.953a.318.318 0 0 1 .006.357L5.226 17.33c-.073.101-.166.09-.207-.025z"
                    fill="#033871"
                  />
                </g>
              </svg>
            </div>
            {finished && (
              <TypewriterComponent
                options={{
                  strings: x.answer,
                  delay: 30,
                  autoStart: true,
                  cursor: '|',
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  });
}

export default Chat;
