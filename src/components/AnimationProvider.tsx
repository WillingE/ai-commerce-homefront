import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimationProviderProps {
  children: React.ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  useEffect(() => {
    // 初始化AOS
    AOS.init({
      // 全局配置
      duration: 800, // 动画持续时间
      easing: 'ease-out-cubic', // 缓动函数
      once: true, // 动画是否只触发一次
      mirror: false, // 滚动时是否出现镜像动画
      offset: 100, // 触发动画的偏移量（距离）
      delay: 0, // 延迟
    });

    // 在窗口调整大小时刷新
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return <>{children}</>;
};

export default AnimationProvider; 