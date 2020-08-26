import React from 'react';
import './footer.scss';

type FooterProps = {
    children: any,
}

const Footer = ({ children }: FooterProps) => (
  <footer className="footer">
        {...children}
  </footer>
);

export default Footer;
