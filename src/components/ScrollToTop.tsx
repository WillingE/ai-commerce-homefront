import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 用于在路由变化时自动滚动到页面顶部或特定元素的组件
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 如果存在哈希标记，则滚动到指定元素
    if (hash) {
      // 给浏览器一点时间来渲染页面内容
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // 否则滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [pathname, hash]);

  return null; // 这个组件不渲染任何内容
};

export default ScrollToTop; 