// @ts-ignore
import { AlignItemsProperty, FlexDirectionProperty, JustifyContentProperty, fontWeight } from 'csstype';
import { css } from 'styled-components';

interface FlexLayoutProps {
  direction?: FlexDirectionProperty;
  justify?: JustifyContentProperty;
  align?: AlignItemsProperty;
}

export const FlexLayout = ({ direction = 'row', justify = 'flex-start', align = 'flex-start' }: FlexLayoutProps) => css`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: ${direction};
  -ms-flex-direction: ${direction};
  flex-direction: ${direction};
  -webkit-box-pack: ${justify};
  -ms-flex-pack: ${justify};
  justify-content: ${justify};
  -webkit-box-align: ${align};
  -ms-flex-align: ${align};
  align-items: ${align};
`;

interface FontStyleProps {
  fontFamily?: 'Gmarket Sans' | 'pretendard';
  weight?: fontWeight;
  size?: '12' | '14' | '16' | '18' | '22';
}
export const fontStyle = (props: FontStyleProps) => css`
  font-family: ${props.fontFamily ?? ''};
  font-weight: ${props.weight ?? ''};
  font-size: ${props.size ?? 0}px;
`;
