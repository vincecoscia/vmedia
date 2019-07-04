import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: "absolute",
    left: 0,
    width: "100%",
    bottom: 0,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Footer = (props) =>  {
  const classes = useStyles();
  return (
    <div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>

        {props.logged_in == false ?
        <a href="/admins/sign_in">
          <Button variant="contained" className={classes.button}>
            Admin
          </Button>
        </a>
        :
        <a data-method="delete" href="/admins/sign_out">
          <Button variant="contained" className={classes.button}>
            Sign Out
          </Button>
        </a>}
      </footer>
      {/* End footer */}
    </div>
  )
}

export default Footer