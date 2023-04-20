import React from 'react';
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function Chat({ history }) {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setFinished(true);
  }, []);

  return history.map((x, i) => {
    return (
      <div key={i} className="chat-log">
        <div className="chat-message">
          <div className="chat-message-center">
            <div className="user-avatar">
              <div className="user-avatar">
                <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M2 4.222v15.556C2 21 2.989 22 4.222 22h15.556C21 22 22 21 22 19.778V4.222C22 3 21 2 19.778 2H4.222C2.99 2 2 3 2 4.222Zm13.333 4.445A3.329 3.329 0 0 1 12 12a3.329 3.329 0 0 1-3.333-3.333A3.329 3.329 0 0 1 12 5.333a3.329 3.329 0 0 1 3.333 3.334Zm-10 8.889c0-2.223 4.445-3.445 6.667-3.445 2.222 0 6.667 1.222 6.667 3.445v1.11H5.333v-1.11Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
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
              <Typewriter
                options={{
                  strings: x.answer,
                  delay: 30,
                  autoStart: true,
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
