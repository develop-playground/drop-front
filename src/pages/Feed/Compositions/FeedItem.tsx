import React from 'react';
import * as S from './FeedItem.style';
import ContentSlider from './Slider/ContentSlider';
// @ts-ignore
import Icon_D from '../../../asset/svg/Icon_D.svg';
interface FeedItemProps {
  createdDate: string;
  address: string;
  content: string;
  imageUrls: string[];
}

const FeedItem = ({ createdDate, address, content, imageUrls }: FeedItemProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <S.Icon src={Icon_D} alt='icon_D'></S.Icon>
          <S.DateText>{createdDate}</S.DateText>
          <S.Address>{address}</S.Address>
        </S.Title>
        <S.MoreButtonWrapper>수정</S.MoreButtonWrapper>
      </S.Header>
      <S.SliderWrapper>
        <ContentSlider />
      </S.SliderWrapper>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default FeedItem;
