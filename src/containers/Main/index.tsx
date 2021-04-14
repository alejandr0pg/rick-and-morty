import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Episodes from './tabs/Episodes';
import { useStyles } from './styles';
import Characters from './tabs/Characters';
import Locations from './tabs/Locations';
import { useTranslation } from 'react-i18next';

function Main() {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const [tabSelected, setTabSelected] = React.useState(0);

  const handleChange = (event: React.FormEvent<any>, newValue: number) => {
    console.log(event);
    setTabSelected(newValue);
  };

  return (
    <Fragment>
      <Header />
      <Paper square elevation={0}>
        <Tabs
          value={tabSelected}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          className={classes.tabs}
        >
          <Tab label={t('tabs.episodes')} />
          <Tab label={t('tabs.characters')} />
          <Tab label={t('tabs.locations')} />
        </Tabs>
      </Paper>

      <div className={classes.container}>
        {tabSelected === 0  && <Episodes />}
        {tabSelected === 1  && <Characters />}
        {tabSelected === 2  && <Locations />}
      </div>
    </Fragment>
  );
}

export default Main;