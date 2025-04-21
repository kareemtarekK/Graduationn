import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Accord from './Accord';
import Hero from './Hero';
//import homeCss from './home.module.css';

const Home = () => {
  return (
    <>
    <div style={{width:"97%",margin:"0 auto"}}>
    <Header/>
    <section style={{backgroundColor:"#f9fafb"}}>
    <Hero/>
    <Accord/>
    <Footer/>

    </section>

    </div>
     
 
    </>
  )
}

export default Home