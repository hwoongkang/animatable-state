import React from "react";

interface HeaderProps {
  setTopAnimated: (target: number, duration: number) => void;
  setTopImmediately: (target: number) => void;
  setLeftImmediately: (target: number) => void;
  setLeftAnimated: (target: number, duration: number) => void;
}

const DURATION = 1000;

const Header: React.FC<HeaderProps> = ({
  setTopAnimated,
  setTopImmediately,
  setLeftImmediately,
  setLeftAnimated,
}) => {
  const topLeftA = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopAnimated(0, DURATION);
    setLeftAnimated(0, DURATION);
  };
  const topRightA = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopAnimated(0, DURATION);
    setLeftAnimated(400, DURATION);
  };
  const bottomLeftA = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopAnimated(400, DURATION);
    setLeftAnimated(0, DURATION);
  };
  const bottomRightA = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopAnimated(400, DURATION);
    setLeftAnimated(400, DURATION);
  };

  const topLeftI = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopImmediately(0);
    setLeftImmediately(0);
  };
  const topRightI = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopImmediately(0);
    setLeftImmediately(400);
  };
  const bottomLeftI = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopImmediately(400);
    setLeftImmediately(0);
  };
  const bottomRightI = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTopImmediately(400);
    setLeftImmediately(400);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "-100px",
        height: "100px",
        width: "502px",
        left: "-1px",
        backgroundColor: "coral",
      }}
    >
      <div
        style={{
          height: "50px",
          display: " flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ width: "100px", lineHeight: "50px" }}>Immediate</span>
        <button onClick={topLeftI}>Top Left</button>
        <button onClick={topRightI}>Top Right</button>
        <button onClick={bottomLeftI}>Bottom Left</button>
        <button onClick={bottomRightI}>Bottom Right</button>
      </div>
      <div
        style={{
          height: "50px",
          display: " flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ width: "100px", lineHeight: "50px" }}>Animated</span>
        <button onClick={topLeftA}>Top Left</button>
        <button onClick={topRightA}>Top Right</button>
        <button onClick={bottomLeftA}>Bottom Left</button>
        <button onClick={bottomRightA}>Bottom Right</button>
      </div>
    </div>
  );
};

export default Header;
