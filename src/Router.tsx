import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, redirect, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import KakaoLoginCallBackPage from './pages/commons/KakaoLoginCallbackPage';
import Login from './pages/login/Login';
import CreateMemoryModal from './components/modal/CreateMemoryModal';

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
        <Route path={'/oauth'} element={<KakaoLoginCallBackPage />} />
      </Route>
      <Route element={<Outlet />} loader={redirectAuth}>
        <Route path={'/oauth'} element={<KakaoLoginCallBackPage />} />
        <Route path={''} loader={redirectMain} />
        <Route
          path={`drop`}
          element={
            <div>
              <CreateMemoryModal isOpen={true} setIsOpen={() => {}} />
            </div>
          }
        />
        <Route path={`sub1`} element={<div />} />
      </Route>
      <Route path={'/oauth'} element={<KakaoLoginCallBackPage />} />
    </Route>
  )
);

export default router;
