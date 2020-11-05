import styled from '@emotion/styled';
import shouldForwardProp from '@emotion/is-prop-valid';
import {
  compose,
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

const StyledHeading = styled('h1', { shouldForwardProp })<StyledProps>`
  ${compose(color, space, typography)}
`;

export default StyledHeading;

export interface StyledProps extends ColorProps, SpaceProps, TypographyProps {}
