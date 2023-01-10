import React, { useState } from 'react';
import * as S from './FeedItem.style';
import ContentSlider from './Slider/ContentSlider';
import Icon_D from 'asset/svg/Icon_D.svg';
import more from 'asset/svg/more.svg';
import { Memory } from 'types/Memory';
import { useDropdown } from 'hooks';
interface FeedItemProps {
  item: Memory;
}

const FeedItem = ({ item }: FeedItemProps) => {
  const { ref, isOpen, close, handleDropDownClick } = useDropdown();

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <S.Icon src={Icon_D} alt='icon_D'></S.Icon>
          <S.DateText>{item.created_date}</S.DateText>
          <S.Address>{item.address}</S.Address>
        </S.Title>
        <S.MoreButtonWrapper ref={ref}>
          <S.MoreButton onClick={() => handleDropDownClick()}>
            <S.Icon src={more} />
          </S.MoreButton>
          {isOpen && (
            <S.DropDownWrapper>
              <S.DropDownItem
                isBorderBottom
                onClick={() => {
                  alert(item.id);
                  close();
                }}
              >
                <span>수정</span>
              </S.DropDownItem>
              <S.DropDownItem
                isWarningText
                onClick={() => {
                  alert('삭제');
                  close();
                }}
              >
                <span>삭제</span>
              </S.DropDownItem>
            </S.DropDownWrapper>
          )}
        </S.MoreButtonWrapper>
      </S.Header>
      <S.SliderWrapper>
        <ContentSlider imgList={item.image_urls} />
      </S.SliderWrapper>
      <S.Content>{item.content}</S.Content>
    </S.Container>
  );
};

export default FeedItem;
