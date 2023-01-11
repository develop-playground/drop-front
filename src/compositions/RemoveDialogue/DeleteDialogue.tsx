import React from 'react';
import Modal from 'react-modal';
import * as S from './DeleteDialogue.style';
import { CancelButton } from './DeleteDialogue.style';

interface DeleteDialogueProps {
  isOpen: boolean;
  close: () => void;
  onDeleteConfirm: () => void;
}

const DeleteDialogue = ({ isOpen, close, onDeleteConfirm }: DeleteDialogueProps) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'transparent',
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
      <S.Wrapper>
        <S.Header></S.Header>
        <S.Body>기록된 추억을 삭제하시겠습니까?</S.Body>
        <S.Bottom>
          <S.CancelButton
            onClick={() => {
              close();
            }}
          >
            취소
          </S.CancelButton>
          <S.BottomButton onClick={onDeleteConfirm}>삭제</S.BottomButton>
        </S.Bottom>
      </S.Wrapper>
    </Modal>
  );
};

export default DeleteDialogue;
