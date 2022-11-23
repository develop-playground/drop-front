import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, redirect, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Login from './pages/login/Login';

const cookies = new Cookies(document.cookie);

const redirectTo = (url: string) => redirect(`/${url}`);

async function redirectMain() {
  const user = cookies.get('accessToken');
  if (user) {
    return redirectTo('drop');
  }
}

async function redirectAuth() {
  const user = cookies.get('accessToken');

  if (!user) {
    return redirectTo('login');
  }

  return { user };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet />}>
      <Route element={<Outlet />} loader={redirectMain}>
        <Route path={'login'} element={<Login />} />
      </Route>
      <Route element={<></>} loader={redirectAuth}>
        <Route path={''} loader={redirectMain} />
        <Route path={`drop`} element={<div />} />
        <Route path={`sub1`} element={<div />} />
      </Route>
    </Route>
  )
);

export default router;
