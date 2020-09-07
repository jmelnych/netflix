import React, { ReactNode } from 'react';
import './footer.scss';

interface FooterProps {
    children: ReactNode,
}

const Footer = ({ children }: FooterProps) => (
  <footer className="footer">
    {children}
  </footer>
);

export default Footer;
