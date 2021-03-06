import React from 'react';
import { useTranslation } from 'react-i18next';
import Meta from 'components/shared/Meta';

import { Card, CardContent, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${theme.spacing(4)}px)`,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main
  },
  main: {
    height: '240px',
    width: '320px'
  },
  card: {
    position: 'relative',
    float: 'left',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: theme.palette.primary.main,
    textShadow: '1px 2px 3px #ccc'
  },
  homeButton: {
    margin: '0 auto'
  }
}));

interface Props {
  location: Location;
}

const NotFound = (props: Props) => {
  const [t] = useTranslation('page__not_found');
  const classes = useStyles();

  return (
    <>
      <Meta title={t('pageTitle')} description={t('pageDescription')} />
      <section className={classes.root}>
        <section className={classes.main}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4" component="h1">
                {t('txtNotfound')}
              </Typography>
              <Typography variant="h6" component="h2">
                {t('txtNoMatch')} <code>{props.location.pathname}</code>
              </Typography>
            </CardContent>
          </Card>
        </section>
      </section>
    </>
  );
};

export default NotFound;
