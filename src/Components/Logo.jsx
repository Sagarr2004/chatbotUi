import React from 'react';
import { YuqueOutlined } from '@ant-design/icons';

export default function Logo({ collapsed }) {
  return (
    <div className="logo bot-icon">
      <div className="logo-icon bot-icon">
        <YuqueOutlined />
        {/* Conditionally render the chatbot name */}
        {!collapsed && <p>CHatBoT</p>} 
      </div>
    </div>
  );
}

