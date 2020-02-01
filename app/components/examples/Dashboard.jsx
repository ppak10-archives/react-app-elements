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

  return (
    <div className="layout-row dashboard-page">
      <PageLayout>
        <h1>Example Polaroid Cards</h1>
        <PolaroidContainer>
          <Polaroid src="https://www.w3schools.com/tags/smiley.gif" />
          <Polaroid src="https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Polaroid src="https://images.pexels.com/photos/3612312/pexels-photo-3612312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
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
