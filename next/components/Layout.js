import { useEffect, useRef, useCallback, useState } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const observerItem = useRef(null);

  const changeNav = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(changeNav, {
      threshold: 1,
    });
    if (observerItem && observerItem.current) {
      observer.observe(observerItem.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [observerItem, changeNav]);

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute top-0 right-0 h-1 w-1' ref={observerItem} />
      <Header navStyle={nav} sideNav={sideNav} setSideNav={setSideNav} />
      <div
        className={`transform ${
          sideNav ? "translate-x-[-45vw]" : "translate-x-0"
        } transition duration-500 ease-in-out transform`}
        data-cy='layout-children'
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
