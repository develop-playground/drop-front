import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const ContentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
  };

  return (
    <CustomSlider {...settings}>
      <ImgWrapper>1</ImgWrapper>
      <ImgWrapper>2</ImgWrapper>
    </CustomSlider>
  );
};

export default ContentSlider;

const ImgWrapper = styled.div`
  height: 360px;
`;

const CustomSlider = styled(Slider)`
  .slick-dots {
    position: static;
    li {
      margin: 0 1px;
    }

    li button:before {
      color: ${({ theme }) => theme.color.lime};
    }
  }

  .slick-next {
    border-radius: 50%;
    background-color: #00000029;

    right: 8px;
  }
  .slick-prev {
    border-radius: 50%;
    background-color: #00000029;
    left: 8px;
  }
`;
