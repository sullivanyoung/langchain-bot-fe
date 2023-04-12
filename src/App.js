import './App.css';
import Chat from './Chat';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

function App() {
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && event.target.value) {
      setHistory([...history, { question, answer: '' }]);
      setIsLoading(true);

      await axios
        .get(
          `https://api.berri.ai/query?user_email=pranesh.anand2001@gmail.com&instance_id=13f4baf2-9673-436d-b269-a719539dd2c4&query=${question}`,
          { timeout: 20000 }
        )
        .then((res) => {
          setHistory([...history, { question, answer: res.data.response }]);

          console.log({ question, answer: res.data.response });

          // to prevent users from asking questions in rapid succession
          setTimeout(() => {
            setIsLoading(false);
            document.getElementById('input-field').value = '';
            document.querySelector('.Typewriter__cursor').remove();
          }, res.data.response.length * 32);
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
      //       'this is to simulate a really long message so that we can test chat and css issues going on in our application. but i need to make it even longer to test a scrolling issue we are experiencing',
      //   },
      // ]);
      // setIsLoading(false);
      // document.getElementById('input-field').value = '';
    }
  };

  return (
    <div className="App">
      {history.length === 0 && (
        <div className="welcome">
          <h1>Welcome To The CoStar Benefits QA Bot</h1>
          <p className="get-started">
            Please ask your benefits question below to get started
          </p>
        </div>
      )}
      <section className="chatbox">
        <div className="chat-history">
          <Chat history={history} />
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-holder">
          {!error ? (
            <input
              id="input-field"
              disabled={isLoading ? true : false}
              rows={1}
              className="chat-input-text"
              placeholder="Ask a question..."
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
