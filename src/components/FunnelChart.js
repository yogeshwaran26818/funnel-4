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
      id: 'organic-traffic',
      data: { label: 'Organic Traffic', description: 'Visitors coming from search engines through natural search results', icon: '🔍', type: 'main-box' },
      position: { x: 420, y: 20 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'browser-fingerprint',
      data: { label: 'Browser Fingerprinting', type: 'sub-box' },
      position: { x: 50, y: 140 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'chatbot',
      data: { label: 'contextual personalized ai chatbot', type: 'sub-box' },
      position: { x: 50, y: 220 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'post-linkedin',
      data: { label: 'post on LinkedIn', type: 'mini-box' },
      position: { x: 380, y: 140 },
      type: 'custom',
      style: { width: 120 },
      draggable: true,
    },
    {
      id: 'post-instagram',
      data: { label: 'post on Instagram', type: 'mini-box' },
      position: { x: 530, y: 140 },
      type: 'custom',
      style: { width: 120 },
      draggable: true,
    },
    {
      id: 'boost-dms',
      data: { label: 'Boost DM\'s', type: 'boost-box' },
      position: { x: 420, y: 220 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'email-query',
      data: { label: 'email query', type: 'mini-box' },
      position: { x: 350, y: 310 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'whatsapp-query',
      data: { label: 'whatsapp query', type: 'mini-box' },
      position: { x: 460, y: 310 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'linkedin-query',
      data: { label: 'linkedin query', type: 'mini-box' },
      position: { x: 570, y: 310 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'blank-query',
      data: { label: 'blank', type: 'mini-box' },
      position: { x: 680, y: 310 },
      type: 'custom',
      style: { width: 90 },
      draggable: true,
    },
    {
      id: 'support-layer',
      data: { label: '24*7 ai support layer', type: 'sub-box' },
      position: { x: 420, y: 410 },
      type: 'custom',
      style: { width: 280 },
      draggable: true,
    },
    {
      id: 'auto-classify',
      data: { label: 'auto classify potential lead', type: 'mini-box' },
      position: { x: 380, y: 490 },
      type: 'custom',
      style: { width: 150 },
      draggable: true,
    },
    {
      id: 'answer-queries',
      data: { label: 'answer queries', type: 'mini-box' },
      position: { x: 560, y: 490 },
      type: 'custom',
      style: { width: 120 },
      draggable: true,
    },
    {
      id: 'lead-qualification',
      data: { label: 'lead qualification', type: 'center-box' },
      position: { x: 320, y: 610 },
      type: 'custom',
      style: { width: 200 },
      draggable: true,
    },
    {
      id: 'lead-converted',
      data: { label: 'lead converted', type: 'center-box' },
      position: { x: 320, y: 700 },
      type: 'custom',
      style: { width: 200 },
      draggable: true,
    },
    {
      id: 'final-analysis',
      data: { label: 'website+ funnel detailed analysis', type: 'sub-box' },
      position: { x: 260, y: 820 },
      type: 'custom',
      style: { width: 320 },
      draggable: true,
    },
  ]);

  const edges = [
    { id: 'e-visitor-fingerprint', source: 'website-visitor', target: 'browser-fingerprint', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-fingerprint-chatbot', source: 'browser-fingerprint', target: 'chatbot', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-organic-linkedin', source: 'organic-traffic', target: 'post-linkedin', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-organic-instagram', source: 'organic-traffic', target: 'post-instagram', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-linkedin-boost', source: 'post-linkedin', target: 'boost-dms', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-instagram-boost', source: 'post-instagram', target: 'boost-dms', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-email', source: 'boost-dms', target: 'email-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-whatsapp', source: 'boost-dms', target: 'whatsapp-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-linkedin', source: 'boost-dms', target: 'linkedin-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
    { id: 'e-boost-blank', source: 'boost-dms', target: 'blank-query', markerEnd: { type: MarkerType.ArrowClosed, width: 30, height: 30 }, style: { stroke: '#334155', strokeWidth: 2 } },
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
