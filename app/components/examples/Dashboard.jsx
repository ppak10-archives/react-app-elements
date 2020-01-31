/**
 * Dashboard.jsx
 * Example page to display dashboard components
 */

// Node Modules
import React, {useState} from 'react';
import {Polaroid} from 'react-app-elements/Card';
import {PageLayout} from 'react-app-elements/Layout';
import {DrawerSidebar} from 'react-app-elements/Sidebar';

export default function Dashboard() {
  // State
  const [showSidebarBoolean, setShowSidebarBoolean] = useState(true);

  return (
    <div className="layout-row dashboard-page">
      <PageLayout>
        <h1>Example Polaroid Cards</h1>
        <div className="layout-flex-wrap">
          <Polaroid src="https://www.w3schools.com/tags/smiley.gif">
            Test
          </Polaroid>
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
          <Polaroid />
        </div>
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
