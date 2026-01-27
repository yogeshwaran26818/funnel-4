import React from 'react';
import '../styles/FunnelStage.css';

const FunnelStage = ({ stage }) => {
  const widthPercentage = stage.width;

  return (
    <div className="stage-wrapper">
      <div className="stage-container" style={{ width: `${widthPercentage}%` }}>
        <div className="stage-box" style={{ borderTopColor: stage.color }}>
          <div className="stage-icon">{stage.icon}</div>
          <div className="stage-content">
            <h3 className="stage-title">{stage.title}</h3>
            <p className="stage-description">{stage.description}</p>
          </div>
          <div className="stage-count">{stage.count.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default FunnelStage;
