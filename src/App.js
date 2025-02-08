import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Top from './pages/Top';
import ButtonSample from './pages/ButtonSample';
import AfterLogin from './pages/AfterLogin';
import VariableList from './pages/VariableList';
import TicTacToe from './pages/TicTacToe';
import BootstrapSample from './pages/BootstrapSample';

function App() {
  return (
    <>
      <div>
        <h3><a href="https://ja.react.dev/learn">クイックスタート</a> を完了。<br />
        </h3>
      </div>

      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/top">Top</Link></li>
            <li><Link to="/buttonSample">ButtonSample</Link></li>
            <li><Link to="/afterLogin">AfterLogin</Link></li>
            <li><Link to="/variableList">VariableList</Link></li>
            <li><Link to="/ticTacToe">TicTacToe</Link></li>
            <li><Link to="/bootstrapSample">BootstrapSample</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top" element={<Top />} />
          <Route path="/buttonSample" element={<ButtonSample />} />
          <Route path="/afterLogin" element={<AfterLogin />} />
          <Route path="/variableList" element={<VariableList />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
          <Route path="/bootstrapSample" element={<BootstrapSample />} />
        </Routes>
      </Router>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </>
  );
}

export default App;
