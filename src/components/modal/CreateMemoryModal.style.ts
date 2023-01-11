import styled from 'styled-components';
import { Mixin } from '../../common';
// @ts-ignore
import { ReactComponent as PinMapIcon } from '../../asset/svg/i_pin_map.svg';
// @ts-ignore
import { ReactComponent as PlusIcon } from '../../asset/svg/i_plus.svg';
import Theme from "../../asset/styles/theme";

export const Container = styled.div`
  width: 736px;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid #969696;
  ${Mixin.FlexLayout({ direction: 'column' })};
`;
export const Header = styled.div`
  width: 100%;
  height: 44px;
  background-color: #000000;
  border-radius: 10px 10px 0 0;
  ${Mixin.FlexLayout({ direction: 'row', justify: 'space-between', align: 'center' })};
`;

export const Body = styled.div`
  width: 100%;
  height: 428px;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  ${Mixin.FlexLayout({ direction: 'row' })};
  padding: 20px 28px 40px;
  gap: 24px;
`;
export const HeaderTitle = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  cursor: pointer;
`;
export const CancelText = styled.p`
  width: 60px;
  height: fit-content;
  font-size: 14px;
  color: #ffffff;
  margin-left: 20px;
  cursor: pointer;
  opacity: 0.8;
`;
export const EmptySpace = styled.div`
  width: 60px;
  height: 100%;
  margin-right: 20px;
`;

export const BodySection = styled.div`
  width: 328px;
  height: 100%;
  ${Mixin.FlexLayout({ direction: 'column' })};

  &.MemoryData {
    gap: 8px;
  }

  &.TextAndUpload {
    padding-top: 40px;
  }
`;

export const LocationSelector = styled.div<{hasAddress: boolean}>`
  width: 100%;
  height: 32px;
  background-color: ${props => props.hasAddress ? `${Theme.color.lime}` : '#d1d1d1'};
  border-radius: 50px;
  gap: 4px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  ${Mixin.FlexLayout({direction: 'row', justify: 'center', align: 'center'})};
`;

export const PinMap = styled(PinMapIcon)`
  width: 9px;
  height: 14px;
`;
export const LocationText = styled.p`
  color: #969696;
  font-size: 14px;
`;

export const ImgWrapper = styled.label`
  width: 328px;
  height: 100%;
  background-color: #d1d1d1;
  border-radius: 10px;
  cursor: pointer;
  position: revert;
  
  ${Mixin.FlexLayout({ direction: 'row', justify: 'center', align: 'center' })};
  
  .file-drop {
    width: 328px;
    position: absolute;
  }
  div:first-child{
    width: 100%;
    height: 328px;
  }
  img {
    width: 100%;
    height: 328px;
  }
`;
export const ImageAddCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ffffff;
  ${Mixin.FlexLayout({ direction: 'row', justify: 'center', align: 'center' })};
`;
export const Plus = styled(PlusIcon)`
  size: 22px;
  fill: #d1d1d1;
`;

export const DescriptionArea = styled.textarea`
  width: 100%;
  height: 264px;
  resize: none;
  border: 1px solid #c8d94d;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
  padding: 4px 8px;

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const DropButton = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 44px;
  ${Mixin.FlexLayout({ direction: 'row', justify: 'center', align: 'center' })};
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? '#C8D94D' : '#d1d1d1')};
  color: ${(props) => (props.isActive ? 'black' : '#ffffff')};
  cursor: ${(props) => props.isActive && 'pointer'};
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const HeaderDivierWrppaer = styled.div`
  width: 100%;
  height: fit-content;
  ${Mixin.FlexLayout({direction:"row"})};
  gap: 4px;
  margin-top: 20px;
`;
export const Icon = styled.img``;

export const TextDate = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;
export const ContentArea = styled.div`
  width: 734px;
  height: 340px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
  ${Mixin.FlexLayout({direction: "row"})};
  gap: 20px;

 
`;

export const ContentWrraper = styled.div`
  div:first-child {
    width: 340px;
    height: 340px;
  }

  img {
    width: 100%;
    height: 340px;
  }
`;
export const DataArea = styled.div`
  width: 328px;
  height: 340px;
  ${Mixin.FlexLayout({direction: "column"})};
  gap: 12px;
`;
export const DateArea = styled.div`
  width: 100%;
  height: fit-content;
  ${Mixin.FlexLayout({direction:"row"})};
  gap: 4px;
`;

export const DateText=  styled.div`
  font-size: 12px;
  color: #000000;
`;