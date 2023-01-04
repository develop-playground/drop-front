import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, redirect, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Login from './pages/login/Login';
import Feed from './pages/Feed/Feed';
import SideNavigationBar from './compositions/SNB/SideNavigationBar';
import styled from 'styled-components';
import { Mixin } from './common';
import Map from './pages/map/Map';
import Setting from './pages/setting/Setting';

const cookies = new Cookies(document.cookie);

const redirectTo = (url: string) => redirect(`/${url}`);

const Wrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  ${Mixin.FlexLayout({})}
`;
const SideBarWrapper = styled.div`
  width: 240px;
`;
const ContentWrapper = styled.div`
  flex-grow: 1;
`;

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
    <Route
      path='/'
      element={
        <>
          <Outlet />
        </>
      }
    >
      <Route element={<Outlet />}>
        <Route path={'login'} element={<Login />} />
      </Route>
      <Route
        element={
          <Wrapper>
            <SideBarWrapper>
              <SideNavigationBar />
            </SideBarWrapper>
            <ContentWrapper>
              <Outlet />
            </ContentWrapper>
          </Wrapper>
        }
      >
        <Route path={''} />
        <Route path={`memory`} element={<Feed />} />
        <Route path={`map`} element={<Map />} />
        <Route path={`setting`} element={<Setting />} />
      </Route>
    </Route>
  )
);

export default router;
