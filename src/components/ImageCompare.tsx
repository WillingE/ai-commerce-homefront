import { useEffect, useRef, useState } from 'react';

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  aspectRatio?: string;
}

const ImageCompare = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before image",
  afterAlt = "After image",
  className = "",
  aspectRatio = "16/9",
}: ImageCompareProps) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setPosition(newPosition);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const containerWidth = rect.width;
    
    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setPosition(newPosition);
  };

  useEffect(() => {
    if (!isDragging) return;
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener);
    window.addEventListener('touchend', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // 显示标签的条件：Before标签在position > 10%时显示，After标签在position < 90%时显示
  const showBeforeLabel = position > 10;
  const showAfterLabel = position < 90;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-xl cursor-col-resize select-none shadow-md transition-all duration-300 hover:shadow-lg ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 w-full h-full flex">
        {/* Before Image Container (左侧) */}
        <div 
          className="h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeAlt}
            className="h-full object-cover object-right"
            style={{ width: `${100 / position * 100}%`, maxWidth: 'none' }}
          />
          {showBeforeLabel && (
            <div className="absolute left-4 bottom-4 bg-black/70 text-white px-2 py-1 text-sm rounded-md">
              Before
            </div>
          )}
        </div>
        
        {/* After Image Container (右侧) */}
        <div 
          className="h-full overflow-hidden"
          style={{ width: `${100 - position}%` }}
        >
          <img 
            src={afterImage} 
            alt={afterAlt}
            className="h-full object-cover object-left"
            style={{ 
              width: `${100 / (100 - position) * 100}%`, 
              maxWidth: 'none',
              transform: `translateX(-${position}%)` 
            }}
          />
          {showAfterLabel && (
            <div className="absolute right-4 bottom-4 bg-black/70 text-white px-2 py-1 text-sm rounded-md">
              After
            </div>
          )}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex flex-col gap-0.5 px-2">
            <div className="w-0.5 h-5 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Instructions Overlay - Shows briefly on component mount */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30 text-white text-lg font-medium opacity-0 animate-fade-out">
        Slide to compare
      </div>
    </div>
  );
};

export default ImageCompare; 