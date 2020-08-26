import React from 'react';
import Header from '../Header';
import './app.scss';
import Footer from '../Footer';
import Content from '../Content';
import Logo from '../../shared/Logo';
import ErrorBoundary from '../../shared/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Header />
    <Content />
    <Footer>
      <Logo />
    </Footer>
  </ErrorBoundary>

);

export default App;
