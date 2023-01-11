import React, {useState} from 'react';
import Modal from 'react-modal';
import * as S from "./CreateMemoryModal.style";
import {TextDate} from "./CreateMemoryModal.style";
import Icon_D from "../../asset/svg/Icon_D.svg";
import ContentSlider from "../../pages/Feed/Compositions/Slider/ContentSlider";
import {postEditMemory} from "../../network/query/memory";

interface Props {
  isOpen: boolean;
  date: string
  imageUrls: string[]
  address: string;
  memoryContent: string
  id: number


  setIsOpen(newValue: boolean): void
}

const EditMemoryModal = ({isOpen, setIsOpen, date, imageUrls, address, memoryContent, id}: Props) => {

  const [content, setContent] = useState(memoryContent)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      style={{
        overlay: {
          backgroundColor: 'rgba(17, 24, 29, 0.6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
        },
        content: {
          background: 'none !important',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          inset: 0,
          border: 'none',
          padding: 0,
        },
      }}
    >
      <S.Container style={{backgroundColor: "#ffffff", marginBottom: "30px"}}>
        <S.Header>
          <S.CancelText onClick={() => setIsOpen(false)}>취소</S.CancelText>
          <S.HeaderTitle>추억 수정</S.HeaderTitle>
          <S.EmptySpace/>
        </S.Header>
        <S.HeaderDivierWrppaer>
          <S.Icon src={Icon_D} alt='icon_D'/>
          <TextDate>{date}</TextDate>
        </S.HeaderDivierWrppaer>
        <S.ContentArea>
          <S.ContentWrraper>
            <ContentSlider imgList={imageUrls}/>
          </S.ContentWrraper>
          <S.DataArea>
            <S.DateArea>
              <S.PinMap/>
              <S.DateText>{address}</S.DateText>
            </S.DateArea>
            <S.DescriptionArea
              placeholder=' 내용을 입력하세요.'
              value={content}
              onChange={(e) => setContent(e.currentTarget.value)}
            />
            <S.DropButton isActive={true} onClick={() => postEditMemory(id, content, () => {
              alert("수정이 완료됐습니다!")
              setIsOpen(false)
            })}>
              수정하기
            </S.DropButton>
          </S.DataArea>
        </S.ContentArea>
      </S.Container>
    </Modal>
  );
};

export default EditMemoryModal;