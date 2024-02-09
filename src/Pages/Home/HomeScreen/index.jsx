import Intro from "../Intro";
import Skills from "../Skills";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";


export default function Home() {
    return(
        <>
            <Intro />
            <Skills />
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer />
        </>
    )
}