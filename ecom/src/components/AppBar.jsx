import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchInput from "./SearchInput";
import Cart from "./Cart";

import { Link, useHistory } from "react-router-dom";
import CartItems from "./CartItems";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    width: "50%",
    marginRight: "25%",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {

  const history = useHistory();  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToHome = () => {
      history.push('/home');
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
              src="https://img.icons8.com/fluent/2x/favorite-cart.png"
              alt="logo"
              height={"50px"}
              width={"50px"}
              onClick={navigateToHome}
            />
            <Typography variant="h6" className={classes.title}>
              eClick
            </Typography>
          <div className={classes.search}>
            <SearchInput />
          </div>
          <div>
            <Cart />
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <CartItems/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}