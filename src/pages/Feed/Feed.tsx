import React from 'react';
import FeedItem from './Compositions/FeedItem';
import * as S from './Feed.style';
import { useInfiniteGetMemory } from 'network/query/memory';
import { Memory } from 'types/Memory';
import noMapPin from 'asset/svg/no_map_pin.svg';
import FeedItemSkeleton from 'components/SkeletonScreens/FeedItemSkeleton';

function Feed() {
  const { status, data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteGetMemory();

  if (status === 'loading') {
    return (
      <S.Wrapper>
        <S.FeedItemWrapper>
          <FeedItemSkeleton />
          <FeedItemSkeleton />
        </S.FeedItemWrapper>
      </S.Wrapper>
    );
  }

  if (data?.pages.length === 0) {
    return (
      <S.EmptyWrapper>
        <S.EmptyBox>
          <S.EmptyText>기록한 추억이 없습니다.</S.EmptyText>
          <S.noMapPinImg src={noMapPin} />
        </S.EmptyBox>
      </S.EmptyWrapper>
    );
  }
  return (
    <>
      <S.Wrapper>
        <S.FeedItemWrapper>
          {data?.pages.map((group) => group.map((item: Memory) => <FeedItem key={item.id} item={item} />))}
        </S.FeedItemWrapper>
      </S.Wrapper>
      <div>
        <button
          onClick={async () => {
            await fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
}

export default Feed;
