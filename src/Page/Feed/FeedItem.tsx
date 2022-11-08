import React from 'react';

const FeedItem = ({ title }: { title: string }) => {
  return (
    // 가운데 정렬
    <div className={'w-full h-max flex justify-center'}>
      <div className={'flex flex-col'}>
        <h3 className={'pretendard'}>{title}</h3>
        <div className={'w-[360px] h-[360px] bg-amber-300'}></div>
        <h3 className={'pretendard'}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 </h3>
      </div>
    </div>
  );
};

export default FeedItem;
