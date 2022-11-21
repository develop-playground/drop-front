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
  }
`;
