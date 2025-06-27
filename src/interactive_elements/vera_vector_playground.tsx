import React, { useState, useRef, useEffect } from 'react';
import { Compass, Calculator, RotateCcw, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';

const VeraVectorPlayground = () => {
  const canvasRef = useRef(null);
  const [vectors, setVectors] = useState([
    { id: 1, x: 3, y: 2, color: '#ef4444', label: 'Red Vector' },
    { id: 2, x: -2, y: 3, color: '#3b82f6', label: 'Blue Vector' }
  ]);
  const [selectedVector, setSelectedVector] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const [showMagnitude, setShowMagnitude] = useState(true);

  const gridSize = 20;
  const originX = 300;
  const originY = 200;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (showGrid) {
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
    }
    ctx.strokeStyle = '#374151'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(canvas.width, originY); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, canvas.height); ctx.stroke();
    ctx.fillStyle = '#374151'; ctx.beginPath(); ctx.arc(originX, originY, 4, 0, 2 * Math.PI); ctx.fill();
    vectors.forEach(vector => {
      const endX = originX + vector.x * gridSize;
      const endY = originY - vector.y * gridSize;
      ctx.strokeStyle = vector.color; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(endX, endY); ctx.stroke();
      const angle = Math.atan2(vector.y, vector.x);
      const arrowLength = 15; const arrowAngle = Math.PI / 6;
      ctx.beginPath(); ctx.moveTo(endX, endY);
      ctx.lineTo(endX - arrowLength * Math.cos(angle - arrowAngle), endY + arrowLength * Math.sin(angle - arrowAngle));
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - arrowLength * Math.cos(angle + arrowAngle), endY + arrowLength * Math.sin(angle + arrowAngle));
      ctx.stroke();
      ctx.fillStyle = vector.color; ctx.beginPath(); ctx.arc(endX, endY, 6, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = vector.color; ctx.font = 'bold 12px system-ui'; ctx.fillText(`v${vector.id}`, endX + 10, endY - 10);
      if (showMagnitude) {
        const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        ctx.fillStyle = '#374151'; ctx.font = '10px system-ui';
        ctx.fillText(`||v${vector.id}|| = ${magnitude.toFixed(2)}`, endX + 10, endY + 10);
      }
    });
    ctx.fillStyle = '#374151'; ctx.font = 'bold 14px system-ui';
    ctx.fillText('x', canvas.width - 20, originY - 10);
    ctx.fillText('y', originX + 10, 20);
  }, [vectors, showGrid, showMagnitude]);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const vectorX = Math.round((clickX - originX) / gridSize);
    const vectorY = Math.round((originY - clickY) / gridSize);
    setVectors(prev => prev.map(v => v.id === selectedVector ? { ...v, x: vectorX, y: vectorY } : v));
  };

  const updateVector = (id, field, value) => {
    setVectors(prev => prev.map(v => v.id === id ? { ...v, [field]: parseFloat(value) || 0 } : v));
  };

  const resetVectors = () => {
    setVectors([
      { id: 1, x: 3, y: 2, color: '#ef4444', label: 'Red Vector' },
      { id: 2, x: -2, y: 3, color: '#3b82f6', label: 'Blue Vector' }
    ]);
  };

  const selectedVec = vectors.find(v => v.id === selectedVector);
  const magnitude = selectedVec ? Math.sqrt(selectedVec.x * selectedVec.x + selectedVec.y * selectedVec.y) : 0;
  const angle = selectedVec ? Math.atan2(selectedVec.y, selectedVec.x) * (180 / Math.PI) : 0;

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/api/placeholder/40/40" alt="Vera" />
          <AvatarFallback>V</AvatarFallback>
        </Avatar>
        <span className="text-lg font-semibold text-slate-800">Vera's Vector Playground</span>
      </div>
      <div className="mb-2 text-slate-700 text-base">Click the grid or use the controls to explore vectors!</div>
      {/* Top row: grid and controls, equal height */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Grid/canvas */}
        <div className="flex-1 flex flex-col min-w-[320px] min-h-[480px]">
          <div className="flex gap-3 mb-2 items-center flex-wrap">
            <div className="flex items-center gap-2">
              <Switch id="showGrid" checked={showGrid} onCheckedChange={setShowGrid} />
              <Label htmlFor="showGrid">Show Grid</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="showMagnitude" checked={showMagnitude} onCheckedChange={setShowMagnitude} />
              <Label htmlFor="showMagnitude">Show Magnitude</Label>
            </div>
            <Button variant="outline" size="sm" onClick={resetVectors} className="flex items-center gap-2">
              <RotateCcw size={16} /> Reset
            </Button>
          </div>
          <div className="border border-slate-200 bg-slate-50 rounded-lg overflow-hidden flex-1 flex flex-col justify-center">
            <canvas
              ref={canvasRef}
              width={600}
              height={400}
              className="cursor-crosshair bg-white w-full h-auto"
              onClick={handleCanvasClick}
              style={{ minHeight: 400 }}
            />
          </div>
        </div>
        {/* Controls panel */}
        <div className="w-full max-w-xs flex flex-col space-y-4 min-h-[480px]">
          <div className="rounded-lg p-4 border border-slate-200 bg-slate-50 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <Target size={18} />
              <span>Select Vector</span>
            </h3>
            <div className="space-y-2">
              {vectors.map(vector => (
                <Button
                  key={vector.id}
                  variant={selectedVector === vector.id ? 'secondary' : 'outline'}
                  className="w-full flex items-center gap-3 justify-start"
                  style={{ borderColor: selectedVector === vector.id ? vector.color : undefined }}
                  onClick={() => setSelectedVector(vector.id)}
                >
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: vector.color }}></span>
                  <span className="font-medium">Vector {vector.id}</span>
                </Button>
              ))}
            </div>
          </div>
          {selectedVec && (
            <div className="rounded-lg p-4 border border-slate-200 bg-slate-50 flex-1 flex flex-col">
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Calculator size={18} />
                <span>Vector {selectedVec.id} Properties</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-2">Components</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="x-component" className="block text-xs text-slate-500 mb-1">x-component</Label>
                      <Input
                        id="x-component"
                        type="number"
                        value={selectedVec.x}
                        onChange={(e) => updateVector(selectedVec.id, 'x', e.target.value)}
                        className="w-full text-sm"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="y-component" className="block text-xs text-slate-500 mb-1">y-component</Label>
                      <Input
                        id="y-component"
                        type="number"
                        value={selectedVec.y}
                        onChange={(e) => updateVector(selectedVec.id, 'y', e.target.value)}
                        className="w-full text-sm"
                        step="0.1"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Magnitude:</span>
                    <span className="text-sm font-mono">{magnitude.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Angle:</span>
                    <span className="text-sm font-mono">{angle.toFixed(1)}°</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="text-xs text-slate-500 mb-1">Vector Notation:</p>
                  <p className="font-mono text-sm">v{selectedVec.id} = [{selectedVec.x}, {selectedVec.y}]</p>
                  <p className="font-mono text-sm">||v{selectedVec.id}|| = {magnitude.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Bottom row: tips and challenges, side by side */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex-1">
          <Alert className="bg-slate-50 border-slate-200 h-full">
            <AlertTitle className="text-slate-800">🧭 Vera's Navigation Tips</AlertTitle>
            <AlertDescription>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Vectors have both magnitude (length) and direction</li>
                <li>• Components [x, y] show how far in each direction</li>
                <li>• Magnitude = √(x² + y²) gives the total distance</li>
                <li>• Try making vectors that point in different directions!</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
        <div className="flex-1">
          <Alert className="bg-slate-50 border-slate-200 h-full">
            <AlertTitle className="text-slate-800">🎯 Exploration Challenges</AlertTitle>
            <AlertDescription>
              <ul className="text-sm text-slate-700 space-y-1">
                <li><b>1. Unit Vector Challenge:</b> Can you create a vector with magnitude exactly 1?</li>
                <li><b>2. Opposite Directions:</b> Make two vectors that point in exactly opposite directions.</li>
                <li><b>3. Right Angle:</b> Position vectors so they form a 90° angle.</li>
                <li><b>4. Compass Directions:</b> Create vectors pointing North, South, East, and West.</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default VeraVectorPlayground;