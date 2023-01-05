import React, {useEffect} from 'react';
import FeedItem from './Compositions/FeedItem';
import * as S from './Feed.style';
import {useGetMemory} from '../../network/query/memory';
import {Memory} from '../../types/memory';
import noMapPin from 'asset/svg/no_map_pin.svg';
import FeedItemSkeleton from '../../components/SkeletonScreens/FeedItemSkeleton';
import {getForEntity} from "../../network/Requests";

function Feed() {
  const {data, isLoading} = useGetMemory();

  useEffect(() => {
    getAuthUser()
    getMemory();
  }, [])

  const getAuthUser = () => {
    getForEntity('/api/auth/user', {}).then(r => console.log(r))
  }
  const getMemory = () => {
    getForEntity(' /api/memory', {}).then(r => console.log(r))
  }

  if (isLoading) {
    return (
      <S.Wrapper>
        <S.FeedItemWrapper>
          <FeedItemSkeleton/>
          <FeedItemSkeleton/>
        </S.FeedItemWrapper>
      </S.Wrapper>
    );
  }

  if (data.length === 0) {
    return (
      <S.EmptyWrapper>
        <S.EmptyBox>
          <S.EmptyText>기록한 추억이 없습니다.</S.EmptyText>
          <S.noMapPinImg src={noMapPin}/>
        </S.EmptyBox>
      </S.EmptyWrapper>
    );
  }
  return (
    <S.Wrapper>
      <S.FeedItemWrapper>
        {data?.map((item: Memory) => (
          <FeedItem key={item.id} item={item}/>
        ))}
      </S.FeedItemWrapper>
    </S.Wrapper>
  );
}

export default Feed;
