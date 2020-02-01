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

export default function Dashboard() {
  // State
  const [showSidebarBoolean, setShowSidebarBoolean] = useState(true);
  const [sliderValueNumber, setSliderValueNumber] = useState(0);

  const onChange = (e) => {
    setSliderValueNumber(parseFloat(e.target.value));
  };
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
        <PolaroidContainer>
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://images.pexels.com/photos/3612312/pexels-photo-3612312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/css/img_lights.jpg"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/css/img_forest.jpg"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="http://alliswall.com/file/3241/1920x1200/16:9/small-house.jpg"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/tags/smiley.gif"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://images.pexels.com/photos/3612312/pexels-photo-3612312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/css/img_lights.jpg"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="https://www.w3schools.com/css/img_forest.jpg"
          />
          <Polaroid
            scale={sliderValueNumber}
            src="http://alliswall.com/file/3241/1920x1200/16:9/small-house.jpg"
          />
        </PolaroidContainer>
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
