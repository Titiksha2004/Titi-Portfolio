import { useState, useEffect, type FC } from 'react';

interface ChromaKeyImageProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
  fadeRange?: number;
}

export const ChromaKeyImage: FC<ChromaKeyImageProps> = ({
  src,
  alt,
  className = "",
  threshold = 55,
  fadeRange = 15,
}) => {
  const [processedSrc, setProcessedSrc] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setProcessedSrc(src);
        return;
      }
      
      ctx.drawImage(img, 0, 0);
      try {
        const width = canvas.width;
        const height = canvas.height;
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        
        // Sample background color from top-left corner
        const keyR = data[0];
        const keyG = data[1];
        const keyB = data[2];

        // Track visited pixels and marked background pixels
        const visited = new Uint8Array(width * height);
        const isBg = new Uint8Array(width * height);
        const queue: number[] = [];

        // Helper to check if a pixel matches the background color profile
        const isColorMatch = (x: number, y: number): boolean => {
          const idx = (y * width + x) * 4;
          const r = data[idx];
          const g = data[idx+1];
          const b = data[idx+2];
          
          const dist = Math.sqrt(
            (r - keyR) ** 2 + 
            (g - keyG) ** 2 + 
            (b - keyB) ** 2
          );

          // Fallback to match very bright white/grays
          const isLight = r > 220 && g > 220 && b > 220 && (Math.max(r, g, b) - Math.min(r, g, b) < 12);
          
          return dist < threshold || isLight;
        };

        // Initialize BFS queue with all boundary pixels (edges of the image)
        for (let x = 0; x < width; x++) {
          // Top Row
          if (isColorMatch(x, 0)) {
            const idx = 0 * width + x;
            visited[idx] = 1;
            isBg[idx] = 1;
            queue.push(idx);
          }
          // Bottom Row
          if (isColorMatch(x, height - 1)) {
            const idx = (height - 1) * width + x;
            visited[idx] = 1;
            isBg[idx] = 1;
            queue.push(idx);
          }
        }
        for (let y = 0; y < height; y++) {
          // Left Column
          if (isColorMatch(0, y)) {
            const idx = y * width + 0;
            if (!visited[idx]) {
              visited[idx] = 1;
              isBg[idx] = 1;
              queue.push(idx);
            }
          }
          // Right Column
          if (isColorMatch(width - 1, y)) {
            const idx = y * width + (width - 1);
            if (!visited[idx]) {
              visited[idx] = 1;
              isBg[idx] = 1;
              queue.push(idx);
            }
          }
        }

        // BFS flood-fill to only find background connected to boundaries
        let head = 0;
        const dirs = [
          [-1, 0], [1, 0], [0, -1], [0, 1]
        ];

        while (head < queue.length) {
          const curr = queue[head++];
          const cx = curr % width;
          const cy = Math.floor(curr / width);

          for (const [dx, dy] of dirs) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = ny * width + nx;
              if (!visited[nIdx]) {
                visited[nIdx] = 1;
                if (isColorMatch(nx, ny)) {
                  isBg[nIdx] = 1;
                  queue.push(nIdx);
                }
              }
            }
          }
        }

        // Define a safe face region (box) to protect eyes/cheeks from global keying
        const safeLeft = width * 0.26;
        const safeRight = width * 0.74;
        const safeTop = height * 0.38;
        const safeBottom = height * 0.85;

        // Apply transparency and feather edges
        for (let idx = 0; idx < width * height; idx++) {
          const px = idx % width;
          const py = Math.floor(idx / width);
          
          const inSafeRegion = px >= safeLeft && px <= safeRight && py >= safeTop && py <= safeBottom;
          
          let shouldRemove = false;
          if (inSafeRegion) {
            // Inside the safe region, only remove if connected to the border (via BFS)
            shouldRemove = isBg[idx] === 1;
          } else {
            // Outside the safe region, perform global keying (removes earring loops, hair gaps)
            shouldRemove = isColorMatch(px, py);
          }

          if (shouldRemove) {
            const pixelIdx = idx * 4;
            const r = data[pixelIdx];
            const g = data[pixelIdx+1];
            const b = data[pixelIdx+2];
            
            const dist = Math.sqrt(
              (r - keyR) ** 2 + 
              (g - keyG) ** 2 + 
              (b - keyB) ** 2
            );

            const startFeather = threshold - fadeRange;
            if (dist < startFeather) {
              data[pixelIdx + 3] = 0; // Fully transparent
            } else {
              // Smooth transition to opaque on edges
              const factor = (dist - startFeather) / fadeRange;
              data[pixelIdx + 3] = Math.round(data[pixelIdx + 3] * factor);
            }
          }
        }
        
        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL());
      } catch (err) {
        console.error("Error keying out background:", err);
        setProcessedSrc(src);
      }
    };

    img.onerror = () => {
      setProcessedSrc(src);
    };
  }, [src, threshold, fadeRange]);

  return (
    <img 
      src={processedSrc || src} 
      alt={alt} 
      className={className} 
    />
  );
};
