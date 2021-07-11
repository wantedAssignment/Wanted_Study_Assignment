import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CardList from './CardList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    position: 'fixed',
    backgroundColor: '#fff',
    boxShadow: '0 1px 0 0 rgb(0 0 0 / 10%);',
    padding: '10px',
    color: '#333333',
    fontSize: '14px',
    fontWeight: '600',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1000px',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    fontSize: '25px',
    fontWeight: 'bold',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      color: '#585858',
    },
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
    },
  },
  ul: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
  },
  small: {
    position: 'absolute',
    color: '#3366FF',
    fontSize: '3px',
    right: '-5px',
    top: '-5px',
  },
  signup: {
    color: '#3A68F9',
    border: '1px solid #3A68F9',
    borderRadius: '30px',
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
    },
  },
  circle: {
    border: '0.5px solid #c5c5c5',
    borderRadius: '10px',
    color: '#878787',
    padding: '5px',
    cursor: 'pointer',
  },
  sm: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  mdShow: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  md: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  center: {
    margin: '0px auto',
    maxWidth: '1000px',
  },
}));

const Navigation = (props) => {
  const [isCardList, setIsCardList] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root} onMouseLeave={() => setIsCardList(false)}>
      <Grid container spacing={3} className={classes.nav}>
        <Grid item xs={8} sm={8} md={8}>
          <section className={classes.section}>
            <Grid container className={classes.section}>
              <Grid item xs={12} sm={12} md={2}>
                <div className={classes.logo}>wanted</div>
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                <ul className={classes.ul}>
                  <li className={classes.sm}>홈</li>
                  <li onMouseEnter={() => setIsCardList(true)}>탐색</li>
                  <li>커리어 성장</li>
                  <li className={classes.md}>직군별 연봉</li>
                  <li className={classes.md}>이력서</li>
                  <li className={classes.md}>매치업</li>
                  <li className={classes.md}>프리랜서</li>
                  <li className={classes.md}>Ai 합격예측</li>
                  <small className={`${classes.small} ${classes.md}`}>
                    Beta
                  </small>
                </ul>
              </Grid>
            </Grid>
          </section>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Grid container className={classes.section}>
            <Grid item xs={12} sm={12} md={5} className={classes.section}>
              <span className={classes.md}>
                <SearchIcon />
              </span>
              <span className={classes.md}> 회원가입/로그인</span>
              <span className={`${classes.mdShow} ${classes.signup}`}>
                회원가입하기
              </span>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.section}>
              <span className={`${classes.circle} ${classes.md}`}>
                기업 서비스
              </span>
              <div className={`${classes.section} ${classes.mdShow}`}>
                <SearchIcon />
                <MenuIcon />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.center}>
        <CardList isCardList={isCardList} />
      </div>
    </div>
  );
};

export default Navigation;
