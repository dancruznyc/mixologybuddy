import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ContentWrapper.css";

const ContentWrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <div className="app--main-content">{children}</div>;
};

export default ContentWrapper;
