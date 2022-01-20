import * as React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Header = (props) => {

  return(
    <div className="cardHeader">
      <Typography variant="body1">
        {props.title}
      </Typography>
      <Link href="#" onClick={props.handleClick}>
        {props.linkText}
      </Link>
    </div>
  );
}

export default Header;
