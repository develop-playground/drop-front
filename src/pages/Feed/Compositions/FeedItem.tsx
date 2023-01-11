import React, { useState } from 'react';
import * as S from './FeedItem.style';
import ContentSlider from './Slider/ContentSlider';
import Icon_D from 'asset/svg/Icon_D.svg';
import more from 'asset/svg/more.svg';
import { Memory } from 'types/Memory';
import { useDropdown } from 'hooks';
import EditMemoryModal from '../../../components/modal/EditMemoryModal';

interface FeedItemProps {
  item: Memory;
  onDeleteDialogueOpen: () => void;
}

const FeedItem = ({ item, onDeleteDialogueOpen }: FeedItemProps) => {
  const { ref, isOpen, close, handleDropDownClick } = useDropdown();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
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
                    setIsModalOpen(true);
                    close();
                  }}
                >
                  <span>수정</span>
                </S.DropDownItem>
                <S.DropDownItem
                  isWarningText
                  onClick={() => {
                    close();
                    onDeleteDialogueOpen();
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
      <EditMemoryModal
        id={item.id}
        isOpen={isModalOpen}
        date={item.created_date}
        imageUrls={item.image_urls}
        address={item.address}
        memoryContent={item.content}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
};

export default FeedItem;
