import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MY Weather App</h1>
      <form>
        <label>
          Zip Code:
          <input type="text" name="postleitzahl" />
        </label>
        <label>
          Country:
          <input type="text" name="countryl" />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
