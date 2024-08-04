import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Sections/Navbar/Navbar';
import Footer from './Sections/Footer/Footer';
import MainCard from './Components/Cards/MainCard';
import Features from './Sections/Features/Features';


function App() {

  return (
    <>
        <Navbar />
        <MainCard/>
        <Features/>
        <Footer />
    </>
    
  )
}

export default App
