import React, { Fragment } from 'react';
import { useStyles } from './styles';
import headerBackground from './../../resources/header.jpg';
import rickAndMortyTitle from './../../resources/rick-and-morty-title.png';
import spain from './../../resources/spain.png';
import usa from './../../resources/usa.png';
import { Button, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function Header() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("global");

  return (
    <div className={classes.gradient}>
      <img src={headerBackground} alt={'background'}/>
      <div className={classes.gradientBlue}></div>
      <div className={classes.grandientBlack}></div>

      <div className={classes.descriptionPanel}>
        <img src={rickAndMortyTitle} alt={'title'}/>
        <Typography variant="body2" className={classes.textCategories}>
          {t('header.categoriesText')}
        </Typography>
        <Typography variant="body2" className={classes.sinopsis}>
            {t('header.sinopsisText')}
        </Typography>

        <div className={classes.containerButton}>
          <Button className={classes.button}>
            {t('header.btnPreviewSeason')}
          </Button>

          <img onClick={() => i18n.changeLanguage("es")} src={spain} alt={t('header.lngSpanish')}/>
          <img onClick={() => i18n.changeLanguage("en")} src={usa} alt={t('header.lngEnglish')}/>
        </div>
      </div>
    </div>
  );
}

export default Header;