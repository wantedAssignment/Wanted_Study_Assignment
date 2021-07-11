import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Grid } from '@material-ui/core';
import { css } from '@emotion/css';
//
import Card from '../Components/Card';
import data from '../db';

const arr = [
  '엔지니어링',
  '물류·무역',
  '제조·생산',
  '의료·제약·바이오',
  '교육',
  '법률·법집행기관',
  '식·음료',
  '건설·시설',
  '공공·복지',
];
const CardList = ({ isCardList }) => {
  return (
    <div>
      <Grid
        container
        className={
          isCardList
            ? css`
                display: flex;
                margin-top: 30px;
                transition: all 0.5s ease-in-out;
                opacity: 1;
              `
            : css`
                display: none;
                opacity: 0;
              `
        }
      >
        {data.map((card, index) => {
          return (
            <Grid key={index} xs={12} sm={6} item md={2}>
              <Card card={card} />
            </Grid>
          );
        })}
        <Grid item xs={12} sm={6} md={2}>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              font-size: 18px;
            `}
          >
            {arr.map((item, index) => (
              <div
                key={index}
                className={css`
                  margin-bottom: 3px;
                `}
              >
                {item}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default CardList;
