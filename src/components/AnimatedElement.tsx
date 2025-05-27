import React from 'react';

// 动画类型
export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade'
  | 'zoom-in'
  | 'zoom-in-up'
  | 'zoom-in-down'
  | 'zoom-in-left'
  | 'zoom-in-right'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'flip-up'
  | 'flip-down'
  | 'flip-left'
  | 'flip-right';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  anchor?: string;
  offset?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  once = true,
  className = '',
  id,
  style,
  anchor,
  offset,
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-once={once}
      data-aos-anchor={anchor}
      data-aos-offset={offset}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedElement; 