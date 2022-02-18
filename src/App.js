
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cars from './components/Cars';
import Articles from './components/Articles';
import Services from './components/Services';
import Carscard from './components/Carscard';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Loading />
      <Navbar />
    <div className="App" id="App" style={{display:"none"}}>
      <Home />
      <Cars />
      <Services />
      <Articles />
      <Footer />
    </div>
    </>
  );
}

export default App;
