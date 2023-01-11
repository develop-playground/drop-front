import React, {useRef, useState} from 'react';
import Modal from 'react-modal';
import * as S from './CreateMemoryModal.style';
import MiniMapContainer from '../map/MiniMapContainer';
import {usePostApiMemory} from '../../network/query/MemoryQuery';
import useOnOutsideClick from '../../utils/useOnOutSideClick';

import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import {app} from '../../asset/firebase';
import {FileDrop} from 'react-file-drop';
import ContentSlider from "../../pages/Feed/Compositions/Slider/ContentSlider";

interface Props {
  isOpen: boolean;

  setIsOpen(newValue: boolean): void;

  refresh(): void;
}

export interface LocationSpec {
  latitude: number;
  longitude: number;
}

const storage = getStorage(app);

const CreateMemoryModal = ({isOpen, setIsOpen, refresh}: Props) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [memoryContent, setMemoryContent] = useState<string>('');
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<LocationSpec>();
  const [nowAddress, setNowAddress] = useState<string>('')


  console.log(imageUrls)

  const mapWrapperRef = useRef<HTMLDivElement>(null);

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
      address: nowAddress,
      location: locationData,
    });
  };

  const buttonInActive: boolean = memoryContent === ''

  const handleFileUpload = (fileList: FileList | null) => {
    if (fileList === null) {
      return;
    }
    for (let i = 0; i < fileList.length; i++) {
      const imageRef = ref(storage, `images/${fileList[i].name}`);
      uploadBytes(imageRef, fileList[i]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
        //
      });
    }
  };

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
          <S.EmptySpace/>
        </S.Header>
        <S.Body>
          <S.BodySection className='MemoryData'>
            <S.LocationSelector hasAddress={nowAddress !== ''} onClick={() => setIsMapOpen(true)}>
              {nowAddress === '' ? (
                <>
                  <S.PinMap/>
                  <S.LocationText>위치 정보 없음</S.LocationText>
                </>
              ) : (
                <>
                  <S.PinMap style={{fill:"#000000"}}/>
                  <S.LocationText style={{color:"#000000"}}>위치는 {nowAddress}</S.LocationText>
                </>
              )}
            </S.LocationSelector>
            {isMapOpen && (
              <MiniMapContainer
                setNowAddress={setNowAddress}
                onCloseMap={() => setIsMapOpen(false)}
                setLocationData={setLocationData}
                ref={mapWrapperRef}
              />
            )}

            <S.ImgWrapper>
              {imageUrls.length !== 0 ?
                <>
                  <ContentSlider imgList={imageUrls}/>
                </>
                :
                (
                  <>
                    <input
                      style={{display: 'none'}}
                      type='file'
                      accept={'.png, .jpg, jpeg'}
                      onChange={(e) => handleFileUpload(e.currentTarget.files)}
                    />
                    <S.ImageAddCircle>
                      <S.Plus/>
                    </S.ImageAddCircle>
                    <FileDrop onDrop={handleFileUpload}>
                      <></>
                    </FileDrop>
                  </>
                )}
            </S.ImgWrapper>
          </S.BodySection>
          <S.BodySection className='TextAndUpload'>
            <S.DescriptionArea
              placeholder=' 내용을 입력하세요.'
              value={memoryContent}
              onChange={(e) => setMemoryContent(e.currentTarget.value)}
            />
            <S.DropButton isActive={!buttonInActive} onClick={() => !buttonInActive && onClickCreateMemoryButton()}>
              드롭하기
            </S.DropButton>
          </S.BodySection>
        </S.Body>
      </S.Container>
    </Modal>
  );
};

export default CreateMemoryModal;
