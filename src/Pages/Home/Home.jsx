import Login from '../../Authentication/Login';
import Signup from '../../Authentication/Signup';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Accord from './Accord';
import Hero from './Hero';

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Accord/>
    <Footer/>
    <Signup/>
    <Login/>

    </>
  )
}

export default Home