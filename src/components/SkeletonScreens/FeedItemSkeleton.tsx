import React, { useState } from 'react';
import styled from 'styled-components';
import { Mixin } from 'common';

const FeedItemSkeleton = () => {
  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <SliderWrapper />
      <ContentWrapper>
        <Content />
        <Content />
      </ContentWrapper>
    </Container>
  );
};

export default FeedItemSkeleton;

export const Container = styled.div`
  width: 100%;
  padding: 24px 0px 16px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Header = styled.div`
  width: 100%;
  padding-left: 20px;
  margin-bottom: 8px;
`;

const Title = styled.div`
  width: 50%;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.LGrey};
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.LGrey};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin-top: 12px;
  padding: 0 16px;
`;

const Content = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.LGrey};
`;
