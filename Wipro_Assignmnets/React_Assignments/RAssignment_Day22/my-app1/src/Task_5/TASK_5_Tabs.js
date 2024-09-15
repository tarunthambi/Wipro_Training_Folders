import React, { useState } from 'react';
import './TASK_5_Tabs.css';

const Tabs = ({ tabs, showCloseButtons, onCloseTab }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    const handleCloseTab = (index) => {
      if (onCloseTab) {
        onCloseTab(index);
      }
      if (index === activeTab && tabs.length > 1) {
        setActiveTab(activeTab === 0 ? 0 : activeTab - 1);
      }
    };
  
    return (
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
              {showCloseButtons && (
                <button className="close-button" onClick={(e) => { e.stopPropagation(); handleCloseTab(index); }}>
                  x
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="tabs-content">
          {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
        </div>
      </div>
    );
  };
  
export default Tabs;
