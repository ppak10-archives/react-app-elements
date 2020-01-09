/**
 * Portfolio.jsx
 * Example component for portfolio page
 */

// Node Modules
import React from 'react';
import {Page} from 'react-app-elements/Template';

export default function PortfolioPage() {
  return (
    <Page className="portfolio-page">
      <div className="slides">
        <div className="slide">
          <div className="card">hello world 1</div>
        </div>
        <div className="slide">
          <div className="card">hello world 2</div>
        </div>
      </div>
    </Page>
  );
}
