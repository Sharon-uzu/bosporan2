import './App.css';
import Testimonial from './Components/Testimonial';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Upcoming from './Components/Upcoming';
import Tips from './Components/Tips';

function App() {

  return (
    <div className="App">
      
      <Header/>
      <Hero/>
      <About/>
      <Tips/>
      <Testimonial/>
      <Blog/>
      <Upcoming/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;
