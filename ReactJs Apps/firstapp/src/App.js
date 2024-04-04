import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Caurosel from './Components/Caurosel';

//function App()
const App = () =>
 {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Navbar/>
      <Caurosel/>
      <Footer/>   
    </div>
  );
}

export default App;
