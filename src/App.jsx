import './App.css';
import Component from './components/Component';

const PORT = 7070;
const theGoodURL = `http://localhost:${PORT}/data`;
const theBadURL = `http://localhost:${PORT}/error`;
const theUglyURL = `http://localhost:${PORT}/loading`;

export default function App() {
  return (
    <div className="App">
      <Component url={theGoodURL} title="Хороший" />
      <Component url={theBadURL} title="Плохой" />
      <Component url={theUglyURL} title="Злой" />
    </div>
  );
}