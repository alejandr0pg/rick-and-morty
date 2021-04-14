import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  gradient: {
    position: 'relative',
    height: '560px',
    background: '#fff',
    '&:after': {
        content: "''",
        position: 'absolute',
        width: '100%',
        left: '0',
        top: '0',
        height: '180px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.76) 15.54%, rgba(0,0,0,0.192) 60.23%, rgba(0,0,0,8e-05) 100%)'
    },
    '&> img': {
        position: 'absolute',
        height: '100%',
        right: '0'
    }
  },
  gradientBlue: {
    opacity: '0.7',
    backgroundImage: 'radial-gradient(ellipse at left top, hsla(195, 100%, 50%, 1) 27%, hsla(195, 100%, 2%, 0) 100%)',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%'
  },
  grandientBlack: {
    opacity: '0.35',
    backgroundImage: 'linear-gradient(5deg, #000 5%, transparent 70%), radial-gradient(ellipse at top right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%)',
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '100%'
  },
  descriptionPanel: {
    position: 'absolute',
    left: '50px',
    top: '25%',
    width: '600px',
    '&> p': {
      color: 'white'
    }
  },
  textCategories: {
    fontWeight: 'bold',
    width: '85%'
  },
  sinopsis: {
    fontSize: '12px'
  },
  button: {
    background: 'white',
    padding: '10px 35px',
    fontWeight: 'bold',
    '&:hover': {
      background: '#e8e8e8'
    }
  },
  containerButton: {
    display: 'flex',
    marginTop: '40px',
    '&> img': {
      width: '40px',
      marginLeft: '30px',
      cursor:'pointer'
    }
  }
}));