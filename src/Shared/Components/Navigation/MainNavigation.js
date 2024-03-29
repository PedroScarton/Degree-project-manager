import React, { useState, useContext } from 'react';

import { AuthContext } from '../../Context/auth-context';

import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import Backdrop from '../UI/Backdrop';
import NavLinks from './NavLinks';
import Menu from './Menu';

import classes from './MainNavigation.module.css';

import { ReactComponent as MenuIcon } from '../../../Assets/icons/menu.svg';
import { ReactComponent as LogoutIcon } from '../../../Assets/icons/salir.svg';

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const drawerHandler = (state) => {
    setDrawerIsOpen(state);
  };
  const menuHandler = (state) => {
    setMenuIsOpen(state);
  };

  const logoutHandler = () => {
    setMenuIsOpen(false);
    auth.logout();
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={() => drawerHandler(false)} />}
      <SideDrawer show={drawerIsOpen}>
        <div className={classes.sideNavigation}></div>
      </SideDrawer>
      {menuIsOpen && (
        <Menu onClose={() => menuHandler(false)}>
          <div onClick={logoutHandler} className={classes.logOutButton}>
            <LogoutIcon fill="black" />
            <p>Cerrar sesión</p>
          </div>
        </Menu>
      )}
      <MainHeader>
        <div className={classes.navLinkContainer}>
          <NavLinks links={props.modules} />
        </div>
        <div onClick={() => menuHandler(true)} className={classes.menuButtonContainer}>
          <div className={classes.menuButton}>
            <p>{auth.name}</p>
            <MenuIcon fill="white" />
          </div>
        </div>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
