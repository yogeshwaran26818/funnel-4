import React, { useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MarkerType,
  applyNodeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import '../styles/FunnelFlow.css';
import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

const FunnelChart = () => {
  const [nodes, setNodes] = useState([
    {
      id: 'website-visitor',
      data: { label: 'Website Visitor', description: 'Track all visitors coming to your website from various sources', icon: '👥', type: 'main-box' },
      position: { x: 50, y: 20 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'post-instagram',
      data: { label: 'post on Instagram', description: 'Social media posts on Instagram', icon: '📸', type: 'main-box' },
      position: { x: 420, y: 20 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'post-linkedin',
      data: { label: 'post on LinkedIn', description: 'Professional posts on LinkedIn', icon: '💼', type: 'main-box' },
      position: { x: 790, y: 20 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'boost-organic-dms',
      data: { label: 'Boost Organic DMS', description: 'Boost organic traffic through DM engagement and customer acquisition', icon: '🔍', type: 'main-box' },
      position: { x: 420, y: 140 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'initiate-conversation',
      data: { label: 'Initiate Conversation to People', description: 'Start meaningful conversations with potential customers', icon: '💬', type: 'main-box' },
      position: { x: 790, y: 140 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'browser-fingerprint',
      data: { label: 'Browser Fingerprinting', type: 'sub-box' },
      position: { x: 50, y: 260 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'chatbot',
      data: { label: 'contextual personalized ai chatbot', type: 'sub-box' },
      position: { x: 50, y: 340 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'email-query',
      data: { label: 'email query', type: 'mini-box' },
      position: { x: 350, y: 430 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'whatsapp-query',
      data: { label: 'whatsapp query', type: 'mini-box' },
      position: { x: 460, y: 430 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'linkedin-query',
      data: { label: 'linkedin query', type: 'mini-box' },
      position: { x: 570, y: 430 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'blank-query',
      data: { label: 'blank', type: 'mini-box' },
      position: { x: 680, y: 430 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'support-layer',
      data: { label: '24*7 ai support layer', type: 'sub-box' },
      position: { x: 420, y: 530 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'auto-classify',
      data: { label: 'auto classify potential lead', type: 'mini-box' },
      position: { x: 380, y: 610 },
      type: 'custom',
      style: { width: 150 },
      draggable: true,
    },
    {
      id: 'answer-queries',
      data: { label: 'answer queries', type: 'mini-box' },
      position: { x: 560, y: 610 },
      type: 'custom',
      style: { width: 120 },
      draggable: true,
    },
    {
      id: 'lead-qualification',
      data: { label: 'lead qualification', type: 'center-box' },
      position: { x: 320, y: 730 },
      type: 'custom',
      style: { width: 200 },
      draggable: true,
    },
    {
      id: 'lead-converted',
      data: { label: 'lead converted', type: 'center-box' },
      position: { x: 320, y: 820 },
      type: 'custom',
      style: { width: 200 },
      draggable: true,
    },
    {
      id: 'final-analysis',
      data: { label: 'website+ funnel detailed analysis', type: 'sub-box' },
      position: { x: 260, y: 940 },
      type: 'custom',
      style: { width: 320 },
      draggable: true,
    },
    {
      id: 'outbound-campaign',
      data: { label: 'Outbound Campaign', description: 'Reach out to prospects with targeted campaigns', icon: '📢', type: 'main-box', showPlusSymbol: true },
      position: { x: 420, y: 1000 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
  ]);

  const edges = [
    // Instagram and LinkedIn connect to both Boost Organic DMS and Initiate Conversation
    { id: 'e-instagram-boost', source: 'post-instagram', target: 'boost-organic-dms', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-instagram-convo', source: 'post-instagram', target: 'initiate-conversation', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-linkedin-boost', source: 'post-linkedin', target: 'boost-organic-dms', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-linkedin-convo', source: 'post-linkedin', target: 'initiate-conversation', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-visitor-boost', source: 'website-visitor', target: 'boost-organic-dms', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-convo-support', source: 'initiate-conversation', target: 'support-layer', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    
    // Original connections from Boost Organic DMS level
    { id: 'e-visitor-fingerprint', source: 'website-visitor', target: 'browser-fingerprint', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-fingerprint-chatbot', source: 'browser-fingerprint', target: 'chatbot', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-email', source: 'boost-organic-dms', target: 'email-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-whatsapp', source: 'boost-organic-dms', target: 'whatsapp-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-linkedin', source: 'boost-organic-dms', target: 'linkedin-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-blank', source: 'boost-organic-dms', target: 'blank-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-email-support', source: 'email-query', target: 'support-layer', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-whatsapp-support', source: 'whatsapp-query', target: 'support-layer', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-linkedin-support', source: 'linkedin-query', target: 'support-layer', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-blank-support', source: 'blank-query', target: 'support-layer', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-support-classify', source: 'support-layer', target: 'auto-classify', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-support-answer', source: 'support-layer', target: 'answer-queries', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-chatbot-lead', source: 'chatbot', target: 'lead-qualification', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2.5 } },
    { id: 'e-classify-lead', source: 'auto-classify', target: 'lead-qualification', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2.5 } },
    { id: 'e-answer-lead', source: 'answer-queries', target: 'lead-qualification', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2.5 } },
    { id: 'e-visitor-final', source: 'website-visitor', target: 'final-analysis', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-qual-converted', source: 'lead-qualification', target: 'lead-converted', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-converted-final', source: 'lead-converted', target: 'final-analysis', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-answer-final', source: 'answer-queries', target: 'final-analysis', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-final-outbound', source: 'final-analysis', target: 'outbound-campaign', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
  ];

  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  return (
    <div className="funnel-flow-wrapper">
      <div className="funnel-header">
        <h1>Traffic Sources</h1>
      </div>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} fitView>
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FunnelChart;
