import React, { Fragment } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Lenguages from './components/Lenguages';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Profile />
      <Experience />
      <div>
        <Academic />
        <Skills />
      </div>
      <div>
        <Interest />
        <Lenguages />
      </div>
    </Fragment>
  );
};

export default App;
