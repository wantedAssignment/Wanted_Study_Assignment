import React from 'react';
import { css } from '@emotion/css';

const Card = ({ card }) => {
  return (
    <div
      className={css`
        width: 800px;
      `}
    >
      <div
        className={css`
          margin-bottom: 10px;
          font-size: 18px;
        `}
      >
        {card.title}
      </div>
      {card.types.map((item, index) => (
        <div
          key={index}
          className={css`
            color: #999;
            margin-bottom: 5px;
          `}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Card;
