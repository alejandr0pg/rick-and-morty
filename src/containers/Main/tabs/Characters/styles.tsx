import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  character: {
    textAlign: 'center',
    padding: '30px',
    minHeight: '150px',
    '&> .MuiAvatar-root': {
      display: 'block',
      margin: 'auto',
      width: '90px',
      height: '90px'
    },
    '&> p': {
      fontWeight: 'bold',
      marginTop: '20px',
      marginBottom: '-10px'
    }
  }
}));