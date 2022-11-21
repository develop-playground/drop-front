import React from 'react';
import FeedItem from './Compositions/FeedItem';
import * as S from './Feed.style';
function Feed() {
  return (
    <S.Wrapper>
      <S.FeedItemWrapper>
        <FeedItem createdDate={'22.11.10'} address={'서울시 역삼동'} content={'hihihihihihi'} imageUrls={['1', '2']} />
        <FeedItem createdDate={'22.11.11'} address={'서울시 역사동'} content={'hihihihihihi'} imageUrls={['1', '2']} />
      </S.FeedItemWrapper>
    </S.Wrapper>
  );
}

export default Feed;
