/**
 * Portfolio.jsx
 * Example component for portfolio page
 */

// Node Modules
import React from 'react';
import {Page} from 'react-app-elements/Layout';

// Constants
const SKILLS = ['REACT', 'JAVASCRIPT', 'HTML', 'CSS'];

export default function PortfolioPage() {
  // JSX
  const tilesJSX = SKILLS.map((skill, index) => (
    <div className="tile" key={index}>
      {skill}
    </div>
  ));
  return (
    <Page className="portfolio-page">
      <div className="parallax">
        <div className="slides">
          <div className="slide">
            <div className="card">hello world 1</div>
          </div>
          <div className="slide">
            <div className="card tile-layout">{tilesJSX}</div>
          </div>
        </div>
      </div>
    </Page>
  );
}
