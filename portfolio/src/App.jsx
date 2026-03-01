import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience'; // Ou Journey
import Projects from './components/Projects';
import Technologies from './components/Technologies.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
    return (
        <LanguageProvider>
            <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-black">
                <Navbar />
                <Hero />
                <Experience />
                <Projects />
                <Technologies />
                <Contact />
                <Footer/>
            </div>
        </LanguageProvider>
    );
}

export default App;