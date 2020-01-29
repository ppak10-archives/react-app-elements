/**
 * Dashboard.jsx
 * Example page to display dashboard components
 */

// Node Modules
import React, {useState} from 'react';
import {PolaroidCard} from 'react-app-elements/Card';
import {GridLayout, PageLayout} from 'react-app-elements/Layout';
import {DrawerSidebar} from 'react-app-elements/Sidebar';

export default function Dashboard() {
  // State
  const [showSidebarBoolean, setShowSidebarBoolean] = useState(true);

  return (
    <div className="layout-row">
      <PageLayout>
        <div>Hello World</div>
        <GridLayout>
          <PolaroidCard />
          <PolaroidCard />
          <PolaroidCard />
          <PolaroidCard />
          <PolaroidCard />
          <PolaroidCard />
          <PolaroidCard />
          <PolaroidCard />
        </GridLayout>
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
