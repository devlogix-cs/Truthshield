import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 350, y: 250 },
    data: { label: "🛡 TruthShield AI Core" },
    style: {
      background: "#1e293b",
      color: "white",
      padding: 20,
      borderRadius: 20,
      border: "2px solid #3b82f6",
      width: 220,
      textAlign: "center",
    },
  },

  {
    id: "2",
    position: { x: 50, y: 100 },
    data: { label: "📝 Text Input" },
  },

  {
    id: "3",
    position: { x: 50, y: 350 },
    data: { label: "🌐 URL Analysis" },
  },

  {
    id: "4",
    position: { x: 650, y: 100 },
    data: { label: "🖼 OCR Engine" },
  },

  {
    id: "5",
    position: { x: 650, y: 350 },
    data: { label: "🤖 Groq AI" },
  },

  {
    id: "6",
    position: { x: 350, y: 500 },
    data: { label: "📊 Prediction Result" },
  },
];

const edges = [
  { id: "e1", source: "2", target: "1" },
  { id: "e2", source: "3", target: "1" },
  { id: "e3", source: "4", target: "1" },
  { id: "e4", source: "5", target: "1" },
  { id: "e5", source: "1", target: "6" },
];

export default function SpatialDashboard() {
  return (
    <div className="h-[800px] rounded-3xl overflow-hidden border border-slate-800">

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>

    </div>
  );
}