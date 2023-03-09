import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([]);

  const getAnswer = async () => {
    // const data = {
    //   question,
    // };
    // await axios
    //   .post('http://localhost:5000/get-bot-response', data)
    //   .then((response) => {
    //     console.log(response);
    //     setAnswer(response.data.answer);
    //   })
    //   .catch((error) => console.log(error));

    setAnswer('Thank you for testing me');
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar"></div>
              <div className="message">User Chat</div>
            </div>
          </div>
          <div className="chat-message chatbot">
            <div className="chat-message-center">
              <div className="avatar">add costar svg here</div>
              <div className="message">Bot Chat</div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea
            rows={1}
            className="chat-input-text"
            placeholder="Please Ask Your Benefits Question"
          ></textarea>
        </div>
      </section>
    </div>
    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //   }}
    // >
    //   <div>
    //     <label>Question: </label>
    //     <input
    //       type="text"
    //       value={question}
    //       onChange={(event) => setQuestion(event.target.value)}
    //     />
    //     <button onClick={getAnswer}>Get Answer</button>
    //     <br />
    //     <label>Answer: </label>
    //     <p>{answer}</p>
    //   </div>
    // </form>
  );
}

export default App;
