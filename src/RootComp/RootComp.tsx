import React from 'react';
import { Outlet } from 'react-router-dom';
import styless from './RootComp.module.scss'
import Header from '../Header/Header';

const RootComp = () => {
  return (
    <>
        <h1> Root Comp</h1>

        <Header/>

      <div className={styless['outlet-main']}>
           <Outlet />
       </div>
    </>
  )
}

export default RootComp;
