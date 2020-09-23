import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header />
        <Landing />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
