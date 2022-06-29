import './App.css';
import './style/style1.css';
import Header from './Components/Header'
import Body from './Components/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <div className="container">
    <Body/>
   
    </div>
    <Footer/>
    </div>
  );
}

export default App;
