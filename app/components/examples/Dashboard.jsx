/**
 * Dashboard.jsx
 * Example page to display dashboard components
 */

// Node Modules
import React, {useState} from 'react';
import {Polaroid} from 'react-app-elements/Card';
import {PolaroidContainer} from 'react-app-elements/Grid';
import {PageLayout} from 'react-app-elements/Layout';
import {DrawerSidebar} from 'react-app-elements/Sidebar';

// Constants
const IMAGES = 10;
const MAX_SIZE = 1000;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const sizeList = [...Array(IMAGES)].map(
  () => `${getRandomInt(MAX_SIZE)}/${getRandomInt(MAX_SIZE)}`,
);

export default function Dashboard() {
  // State
  const [showSidebarBoolean, setShowSidebarBoolean] = useState(true);
  const [sliderValueNumber, setSliderValueNumber] = useState(0);

  const onChange = (e) => {
    setSliderValueNumber(parseFloat(e.target.value));
  };

  // JSX
  const polaroidJSX = sizeList.map((e, index) => (
    <Polaroid
      key={index}
      scale={sliderValueNumber}
      showScaleButton={true}
      src={`https://picsum.photos/id/${index + 1}/${e}`}
    />
  ));

  return (
    <div className="layout-row dashboard-page">
      <PageLayout>
        <h1>Example Polaroid Cards</h1>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={sliderValueNumber}
            onChange={onChange}
          />
        </div>
        <PolaroidContainer>{polaroidJSX}</PolaroidContainer>
      </PageLayout>
      <DrawerSidebar
        setShow={setShowSidebarBoolean}
        show={showSidebarBoolean}
        side="right"
      >
        <div>Hello</div>
        <div>World</div>
      </DrawerSidebar>
    </div>
  );
}
