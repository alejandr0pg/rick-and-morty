import React, { useEffect } from 'react';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationsAction, prevLocationPageAction, nextLocationPageAction } from '../../../../redux/LocationsDucks';
import { useTranslation } from 'react-i18next';

function Locations() {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const dispatch = useDispatch();

  const locations = useSelector(store => store.locations.currentData);
  const havePrevPage = useSelector(store => store.locations.prev);
  const haveNextPage = useSelector(store => store.locations.next);

  useEffect(() => {
    dispatch(getLocationsAction());
  }, [dispatch]);

  const handlerPrev = () => {
    dispatch(prevLocationPageAction());
  }

  const handlerNext = () => {
    dispatch(nextLocationPageAction());
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Button disabled={!havePrevPage} onClick={handlerPrev}>{t('characters.actions.prev')}</Button>
        <Button style={{float: 'right'}} disabled={!haveNextPage} onClick={handlerNext}>{t('characters.actions.next')}</Button>
      </Grid>
      {
        locations.map((c) => (
          <Grid item xs={2}>
            <Paper className={classes.location}>
              <Typography>{c.name}</Typography>
              <Typography>{c.type}</Typography>
              <AvatarGroup className={classes.residents} max={4}>
                {
                  c.residents.length > 0 ? 
                  c.residents.map((r, index) => <Avatar key={index + 'locations'} alt={typeof r === 'object' ? r.name: ''} src={typeof r === 'object' ? r.image : ''} />) : 
                  <Avatar alt="0">0</Avatar>
                }
              </AvatarGroup>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Locations

