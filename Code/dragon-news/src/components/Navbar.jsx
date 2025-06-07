import React, { use } from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const handleLogOut = () => {
    console.log('Log Out!');
    logOutUser()
      .then(() => {
        console.log('Logged Out!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImg} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Log Out
          </button>
        ) : (
          <NavLink to={'/auth/login'} className="btn btn-primary px-10">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
