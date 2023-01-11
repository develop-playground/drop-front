import React, { useEffect, useRef, useState } from 'react';
import FeedItem from './Compositions/FeedItem';
import * as S from './Feed.style';
import { useDeleteMemory, useInfiniteGetMemory } from 'network/query/memory';
import { Memory } from 'types/Memory';
import noMapPin from 'asset/svg/no_map_pin.svg';
import FeedItemSkeleton from 'components/SkeletonScreens/FeedItemSkeleton';
import { useIntersection } from '../../hooks';
import DeleteDialogue from '../../compositions/RemoveDialogue/DeleteDialogue';
import dropQueryClient from "../../network/DropQueryClient";

function Feed() {
  const { status, data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteGetMemory();
  const intersectionRef = useRef<HTMLDivElement>(null);

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  useEffect(() => {
    if (intersection?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [intersection, fetchNextPage, hasNextPage, isFetchingNextPage]);

  //DeleteDialgoue

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSeletctedItem] = useState<Memory>();

  const quertclient = dropQueryClient
  const handleClose = () => {
    setDeleteModalOpen(false);
  };

  const deleteMemory = useDeleteMemory(() => {
    setDeleteModalOpen(false);
    alert('삭제 완료');
    quertclient.invalidateQueries('memory')
  });
  const handleDeleteDialogueOpen = (item: Memory) => {
    setDeleteModalOpen(true);
    setSeletctedItem(item);
  };

  const handleDeleteConfirm = () => {
    if (selectedItem?.id) deleteMemory.mutate(selectedItem.id);
  };

  const FeedBody = () => {
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

    if (data?.pages?.length === 0) {
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
            {data?.pages?.map((group) =>
              group.map((item: Memory) => (
                <FeedItem key={item.id} item={item} onDeleteDialogueOpen={() => handleDeleteDialogueOpen(item)} />
              ))
            )}
          </S.FeedItemWrapper>
        </S.Wrapper>
      </>
    );
  };

  return (
    <>
      {FeedBody()}
      <DeleteDialogue isOpen={deleteModalOpen} close={handleClose} onDeleteConfirm={handleDeleteConfirm} />
      <div ref={intersectionRef} style={{ width: '100%', height: '20px' }}>
        {data?.pages && isFetching && <div>loading~</div>}
      </div>
    </>
  );
}

export default Feed;
