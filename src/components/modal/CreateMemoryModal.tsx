import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from './CreateMemoryModal.style';
interface Props {
  isOpen: boolean;

  setIsOpen(newValue: boolean): void;
}

const CreateMemoryModal = ({ isOpen, setIsOpen }: Props) => {
  const [memoryDes, setMemoryDes] = useState<string>('');
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
      <S.Container>
        <S.Header>
          <S.CancelText>취소</S.CancelText>
          <S.HeaderTitle>새로운 추억</S.HeaderTitle>
          <S.EmptySpace />
        </S.Header>
        <S.Body>
          <S.BodySection className='MemoryData'>
            <S.LocationSelector>
              <S.PinMap />
              <S.LocationText>위치 정보 없음</S.LocationText>
            </S.LocationSelector>
            <S.ImgWrapper>
              <S.ImageAddCircle>
                <S.Plus />
              </S.ImageAddCircle>
            </S.ImgWrapper>
          </S.BodySection>
          <S.BodySection className='TextAndUpload'>
            <S.DescriptionArea
              placeholder=' 내용을 입력하세요.'
              value={memoryDes}
              onChange={(e) => setMemoryDes(e.currentTarget.value)}
            />
            <S.DropButton>드롭하기</S.DropButton>
          </S.BodySection>
        </S.Body>
      </S.Container>
    </Modal>
  );
};

export default CreateMemoryModal;
