import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Abouts from './components/About.v2/About.v2';
import Contact from './components/Contact/Contact';
import Header from './components/Header';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Intro />} exact/>
          <Route path="/about" element={<Abouts />} />
          <Route path='/project' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
