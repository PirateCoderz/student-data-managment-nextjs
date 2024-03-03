'use client'
import Link from 'next/link';
import classes from './MainNavigation.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LogoutBtn from '../Buttons/LogoutBtn/LogoutBtn';

const MainNavigation = () => {

  const [isAdmin, setisAdmin] = useState(null);
  useEffect(() => {
    data();
  }, [isAdmin]);

  const data = async () => {
    await axios.get('/api/users/admin').then((res) => {
      // console.log(res);
      setisAdmin(true);
    }).catch((err) => {
      setisAdmin(false);
      console.error(err.message);
    });
  }
  return (
    <header className={classes.header}>

      <Link className={classes.logo} href={'/'} >Student Data Portal</Link>

      <nav>
        <ul>
          <li><Link href={'/add-st'}>Add</Link></li>
          <li><Link href={'/browse-st'}>Students List</Link></li>
        </ul>
      </nav>

      {isAdmin ? <LogoutBtn /> : <Link href={'/login'}>Login</Link>}
    </header>
  );
}

export default MainNavigation;
