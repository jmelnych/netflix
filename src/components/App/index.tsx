import React from 'react';
import './app.scss';
import Footer from '../Footer';
import Content from '../Content';
import Logo from '../../shared/Logo';
import ErrorBoundary from '../../shared/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Content />
    <Footer>
      <Logo />
    </Footer>
  </ErrorBoundary>

);

export default App;
