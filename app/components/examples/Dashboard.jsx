/**
 * Dashboard.jsx
 * Example page to display dashboard components
 */

// Node Modules
import React, {useState} from 'react';
import {Layout, Page, Sidebar} from 'react-app-elements/Template';

export default function Dashboard() {
  // State
  const [showSidebarBoolean, setShowSidebarBoolean] = useState(true);

  return (
    <Layout className="layout-row">
      <Page>
        <div>Hello World</div>
      </Page>
      <Sidebar
        setShow={setShowSidebarBoolean}
        show={showSidebarBoolean}
        side="right"
      >
        {/* Sidebar */}
      </Sidebar>
    </Layout>
  );
}
