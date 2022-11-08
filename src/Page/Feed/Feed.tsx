import React from 'react';
import FeedItem from './FeedItem';

const Feed = () => {
  return (
    // 가운데 정렬
    <div className={'w-full h-max flex justify-center'}>
      {/* // width - min width 로 정하기 max - sm 으로 정하기 */}
      <div className={'w-[640px] max-w-screen-sm'}>
        {/* // 레이아웃 시작 */}
        <div className={'w-full h-12 bg-black'}></div>
        <div className={'flex flex-col gap-2'}>
          <FeedItem title={'돝고기'} />
          <FeedItem title={'동대문 디자인 플라자'} />
          <FeedItem title={'동대문 디자인ㄴㄴ'} />
          <FeedItem title={'wedf'} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
