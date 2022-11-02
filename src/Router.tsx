import React from 'react';
import { createBrowserRouter, createRoutesFromElements, redirect, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import NaverMapTest from './pages/Main/NaverMapTest';
import Login from './pages/Login';

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
    <Route path='/' element={<></>}>
      <Route element={<></>} loader={redirectMain}>
        <Route path={'login'} element={<Login />} />
      </Route>
      <Route element={<></>} loader={redirectAuth}>
        <Route path={''} loader={redirectMain} />
        <Route path={`main`} element={<NaverMapTest />} />
        <Route path={`sub1`} element={<></>} />
      </Route>
    </Route>
  )
);

export default router;
