import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersAction, nextCharacterPageAction, prevCharacterPageAction } from '../../../../redux/CharactersDucks';
import { useTranslation } from 'react-i18next';

function Characters() {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const dispatch = useDispatch();

  const characters = useSelector(store => store.characters.currentData);
  const havePrevPage = useSelector(store => store.characters.prev);
  const haveNextPage = useSelector(store => store.characters.next);

  useEffect(() => {
    dispatch(getCharactersAction())
  }, [dispatch]);

  const handlerPrev = () => {
    dispatch(prevCharacterPageAction())
  }

  const handlerNext = () => {
    dispatch(nextCharacterPageAction())
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Button disabled={!havePrevPage} onClick={handlerPrev}>{t('characters.actions.prev')}</Button>
        <Button style={{float: 'right'}} disabled={!haveNextPage} onClick={handlerNext}>{t('characters.actions.next')}</Button>
      </Grid>
      {
        characters.map((c) => (
          <Grid item xs={2}>
            <Paper className={classes.character}>
              <Avatar alt={c.name} src={c.image} />
              <Typography>{c.name}</Typography>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Characters

