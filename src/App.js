import './App.css';
import Chat from './Chat';
import { useState } from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

function App() {
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && event.target.value) {
      setHistory([...history, { question, answer: '' }]);
      setIsLoading(true);

      await axios
        .post(
          'http://localhost:5000/get-bot-response',
          { question },
          { timeout: 20000 }
        )
        .then((response) => {
          setHistory([...history, { question, answer: response.data.answer }]);
        })
        .catch(() => {
          setHistory([
            ...history,
            {
              question,
              answer: 'Sorry, there was an error processing your request',
            },
          ]);
          setError(true);
        });

      // setHistory([
      //   ...history,
      //   {
      //     question,
      //     answer:
      //       'this is to simulate a really long message so that we can fix the svg issue that is current happening in the dom',
      //   },
      // ]);

      document.getElementById('input-field').value = '';
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          Welcome To CoStar's Benefits QA Bot
        </div>
      </aside>
      <section className="chatbox">
        <Chat history={history} error={error} />
        <div className="chat-input-holder">
          {!error ? (
            <input
              id="input-field"
              disabled={isLoading ? true : false}
              rows={1}
              className="chat-input-text"
              placeholder="Please Ask Your Benefits Question"
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            ></input>
          ) : (
            <ErrorMessage />
          )}
          <div className="more-info">
            For more information check out:{' '}
            <a
              href="https://www.mercerhrs.com/microsite/costar/index.shtml"
              target="_blank"
              rel="noreferrer"
            >
              CoStar's Benefits Microsite
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
