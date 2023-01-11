import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, redirect, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import KakaoLoginCallBackPage from './pages/commons/KakaoLoginCallbackPage';
import Login from './pages/login/Login';
import Feed from './pages/Feed/Feed';
import Map from './pages/map/Map';
import SideNavigationBar from './compositions/SNB/SideNavigationBar';
import { Mixin } from './common';
import styled from 'styled-components';
import Setting from './pages/setting/Setting';

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

const cookies = new Cookies(document.cookie);

const redirectTo = (url: string) => redirect(`/${url}`);

async function redirectMain() {
  const user: string | undefined = cookies.get('accessToken');
  if (user) {
    return redirectTo('memory');
  }
  return null;
}

async function redirectLogin() {
  const user = cookies.get('accessToken');
  if (!user) {
    return redirectTo('login');
  }
  return { user };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<><Outlet /></>}>
      <Route element={<Outlet />} loader={redirectMain}>
        <Route path={'login'} element={<Login />} />
        <Route path={'/oauth'} element={<KakaoLoginCallBackPage />} />
      </Route>
      <Route
        element={
          <>
            <Wrapper>
              <SideBarWrapper>
                <SideNavigationBar />
              </SideBarWrapper>
              <ContentWrapper>
                <Outlet />
              </ContentWrapper>
            </Wrapper>
          </>
        }
        loader={redirectLogin}
      >
        <Route path={''} loader={redirectMain} />
        <Route path={`memory`} element={<Feed />} />
        <Route path={`map`} element={<Map />} />
        <Route path={'setting'} element={<Setting />} />
      </Route>
    </Route>
  )
);

export default router;
