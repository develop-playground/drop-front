import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import prevArrow from 'asset/svg/prevArrow.svg';
import { imageUrlListType } from '../../../../types/Memory';
function SampleArrow(props: { className?: any; style?: any; onClick?: any }) {
  const { className, style, onClick } = props;
  return (
    <TestDiv onClick={onClick} className={className}>
      <img src={prevArrow} />
    </TestDiv>
  );
}

const ContentSlider = (props: { imgList: imageUrlListType }) => {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    // nextArrow: <SampleArrow />,
    // prevArrow: <SampleArrow />,
  };

  return (
    <CustomSlider {...settings}>
      {props.imgList?.map((item, index) => (
        <ImgWrapper key={index}>
          <img src={item} />
        </ImgWrapper>
      ))}
    </CustomSlider>
  );
};

export default ContentSlider;

const ImgWrapper = styled.div`
  height: 360px;
  background-color: ${({ theme }) => theme.color.smokeWhite};
`;

const CustomSlider = styled(Slider)`
  .slick-dots {
    position: static;
    li {
      list-style: none;
      margin: 0 1px;
    }
    li button {
      border: none;
      color: transparent;
      cursor: pointer;
      display: block;
    }
    li button:before {
      color: ${({ theme }) => theme.color.lime};
    }
  }

  .slick-next {
    border-radius: 50%;
    right: 8px;
    z-index: 1;
  }
  .slick-prev {
    border-radius: 50%;
    left: 8px;
    z-index: 1;
  }
`;

const TestDiv = styled.div`
  border-radius: 50%;
  background-color: rgba(#ffffff, 0.6);
  width: 20px;
  height: 20px;
`;

const Arrow = styled.div`
  opacity: 1;
`;
