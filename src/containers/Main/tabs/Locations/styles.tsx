import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  location: {
    position: 'relative',
    textAlign: 'center',
    padding: '30px',
    minHeight: '200px',
    '&> .MuiAvatar-root': {
      display: 'block',
      margin: 'auto',
      width: '90px',
      height: '90px'
    },
    '&> p': {
      fontWeight: 'bold',
      marginTop: '30px',
      marginBottom: '-10px'
    }
  },
  residents: {
    position: 'absolute',
    bottom: '20px'
  }
}));