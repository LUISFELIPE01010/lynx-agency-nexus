import { useEffect, useRef } from 'react';

const AnimatedMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: Array<{ x: number; y: number; vx: number; vy: number; connections: number[] }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createNodes = () => {
      nodes = [];
      const nodeCount = Math.min(window.innerWidth > 768 ? 25 : 15, 25);
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: []
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 150 && node.connections.length < 3) {
              node.connections.push(j);
            }
          }
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(149, 160, 162, 0.2)';
      ctx.lineWidth = 0.5;
      
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          if (connectedNode) {
            const distance = Math.sqrt(
              Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
            );
            
            if (distance < 150) {
              const opacity = 1 - (distance / 150);
              ctx.strokeStyle = `rgba(149, 160, 162, ${opacity * 0.3})`;
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(connectedNode.x, connectedNode.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.fillStyle = 'rgba(149, 160, 162, 0.6)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow
        ctx.fillStyle = 'rgba(149, 160, 162, 0.1)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createNodes();
    };

    resizeCanvas();
    createNodes();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default AnimatedMesh;