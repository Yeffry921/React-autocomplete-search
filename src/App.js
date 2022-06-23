import './App.css';
import SearchBar from './components/SearchBar';
import BookData from './data.json'

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book name" data={BookData}/>
    </div>
  );
}

export default App;
