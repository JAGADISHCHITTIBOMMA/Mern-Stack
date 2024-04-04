import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies.js';
import Likes from './components/Likes.js';
import ListRender from './components/ListRender.js';
import ObjectRender from './components/ObjectRender.js';

function App() {
  return (
    <div className="App">
     <Movies heroName="NTR" villanName="jagapathi"/>
      <p>Likes:250K</p>
     <Likes/>
     <ListRender/>
     <ObjectRender/>
    </div>
  );
}

export default App;
