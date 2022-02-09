import React from 'react';

const Tile = ({ children, color, ...props }) => {
  return (
    <div className="mypage-square" style={{ backgroundColor: `${color}` }}>
      <div className="mypage-inner">
        <div className="mypage-content" {...props}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tile;
