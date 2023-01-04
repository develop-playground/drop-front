import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import * as S from './CreateMemoryModal.style';
import MiniMapContainer from '../map/MiniMapContainer';
import { usePostApiMemory } from '../../network/query/MemoryQuery';
import useOnOutsideClick from '../../utils/useOnOutSideClick';
import { FileDrop } from 'react-file-drop';

interface Props {
  isOpen: boolean;

  setIsOpen(newValue: boolean): void;

  refresh(): void;
}

export interface LocationSpec {
  latitude: number;
  longitude: number;
}

const CreateMemoryModal = ({ isOpen, setIsOpen, refresh }: Props) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [memoryContent, setMemoryContent] = useState<string>('');
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<{ address: string; location: LocationSpec }>({
    address: '',
    location: { latitude: 0, longitude: 0 },
  });

  const mapWrapperRef = useRef<HTMLDivElement>(null);

  const [nowLocation, setNowLocation] = useState<LocationSpec>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setNowLocation({ latitude: position.coords.longitude, longitude: position.coords.longitude });
    });
  }, []);

  useOnOutsideClick(
    () => {
      if (isMapOpen) {
        setIsMapOpen(false);
      }
    },
    isMapOpen,
    mapWrapperRef
  );
  const postMemory = usePostApiMemory(() => {
    alert('추억 생성 완료');
    setIsOpen(false);
    refresh();
  });

  const onClickCreateMemoryButton = () => {
    if (locationData === undefined) {
      return;
    }
    postMemory.mutate({
      imageUrls,
      content: memoryContent,
      address: locationData.address,
      location: locationData.location,
    });
  };

  const isButtonActive =
    imageUrls.length !== 0 && memoryContent !== '' && locationData
      ? locationData.address !== '' && locationData.location !== undefined
      : false;

  const handleFileUpload = (fileList: FileList | null) => {};
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
          <S.CancelText onClick={() => setIsOpen(false)}>취소</S.CancelText>
          <S.HeaderTitle>새로운 추억</S.HeaderTitle>
          <S.EmptySpace />
        </S.Header>
        <S.Body>
          <S.BodySection className='MemoryData'>
            <S.LocationSelector onClick={() => setIsMapOpen(true)}>
              <S.PinMap />
              <S.LocationText>위치 정보 없음</S.LocationText>
            </S.LocationSelector>
            {isMapOpen && (
              <MiniMapContainer
                nowLocation={nowLocation}
                onCloseMap={() => setIsMapOpen(false)}
                setLocationData={setLocationData}
                ref={mapWrapperRef}
              />
            )}

            <S.ImgWrapper>
              <input
                style={{ display: 'none' }}
                type='file'
                accept={'.png, .jpg, jpeg'}
                onChange={(e) => handleFileUpload(e.currentTarget.files)}
              />
              <S.ImageAddCircle>
                <S.Plus />
              </S.ImageAddCircle>
              <FileDrop onDrop={handleFileUpload}>
                <></>
              </FileDrop>
            </S.ImgWrapper>
          </S.BodySection>
          <S.BodySection className='TextAndUpload'>
            <S.DescriptionArea
              placeholder=' 내용을 입력하세요.'
              value={memoryContent}
              onChange={(e) => setMemoryContent(e.currentTarget.value)}
            />
            <S.DropButton isActive={isButtonActive} onClick={() => isButtonActive && onClickCreateMemoryButton()}>
              드롭하기
            </S.DropButton>
          </S.BodySection>
        </S.Body>
      </S.Container>
    </Modal>
  );
};

export default CreateMemoryModal;
