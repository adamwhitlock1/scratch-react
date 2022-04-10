import React, { useState } from 'react';
import { Btn } from './common/Btn';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const shouldRender = (tabName) => {
    return activeTab === tabName ? true : false;
  };

  return (
    <div className="Tabs">
      <Btn onClick={() => setActiveTab('tab1')}>Tab 1</Btn>
      <Btn onClick={() => setActiveTab('tab2')}>Tab 2</Btn>
      <Btn onClick={() => setActiveTab('tab3')}>Tab 3</Btn>

      <ul className="nav">
        {shouldRender('tab1') && <li>Tab 1 Content</li>}
        {shouldRender('tab2') && <li>Tab 2 Content</li>}
        {shouldRender('tab3') && <li>Tab 3 Content</li>}
      </ul>
    </div>
  );
};
export default Tabs;
