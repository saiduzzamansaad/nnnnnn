import About from './components/shared/About'
import WPPOOL_Index from './components/shared/WPPOOL_Index';
import Companies from './components/shared/Companies';
import Footer from './components/shared/Footer';
import Future from './components/shared/Future';
import Hero from "./components/shared/Hero";
import SearachingCompanyData from './components/shared/SearachingCompanyData';
import Stories from "./components/shared/Stories";
import Slider from '../src/components/shared/Silder'

export default function App() {
  return (
    <div className=" bg-background pb-10">
        <Hero />
        <WPPOOL_Index/>
        <SearachingCompanyData/>
        <Future/>
        <Slider/>  
       <Stories/>
       <hr className=" max-w-7xl mx-auto border-2  border-[#90B8F0] my-10"/>
          <About/>
       <hr className=" max-w-7xl mx-auto border-2  border-[#90B8F0] my-10"/>
       <Companies/>
       <Footer  />   
    </div>
  )
}