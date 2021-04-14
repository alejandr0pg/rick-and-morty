import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    margin: '20px'
  },
  tabs: {
    height: '75px',
    borderBottom: '2px solid #f5f6f7',
    '& .MuiTabs-flexContainer': {
      height: '100%',
      '& .MuiButtonBase': {
        fontFamily: '',
      },
      '& .MuiTab-textColorPrimary.Mui-selected': {
        color: 'rgb(51, 204, 255)'
      },
    },
    '& .MuiTabs-indicator': {
      backgroundColor: 'rgb(51, 204, 255) !important'
    } 
    
  }
}));