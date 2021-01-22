import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

function Notifications(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({

    vertical: 'top',
    horizontal: 'right'
  });

  const [propsData, setPropsData] = React.useState(props.open);

  const { vertical, horizontal, } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPropsData(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={propsData}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={props.type}>
          { props.desc }
        </Alert>
      </Snackbar>
    </div>
  );
}

Notifications.defaultProps = {
  type: 'success',
  open: false,
  desc: 'This is a success alert — check it out!' // warning ,info ,success
};

Notifications.propsType = {
  type: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Notifications;
