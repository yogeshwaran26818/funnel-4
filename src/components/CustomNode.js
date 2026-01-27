import React from 'react';
import { Handle, Position } from 'reactflow';
import '../styles/CustomNode.css';

const CustomNode = ({ data }) => {
  const { label, description, icon, type } = data;

  return (
    <div className={`custom-node ${type}`}>
      {icon && <div className="node-icon">{icon}</div>}
      <div className="node-content">
        <div className="node-label">{label}</div>
        {description && <div className="node-description">{description}</div>}
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
