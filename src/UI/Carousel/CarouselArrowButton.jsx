import styled, { css } from 'styled-components';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 99;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;

  ${({ pos }) =>
    pos === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

function CarouselArrowButton({ pos, handleClick }) {
  return (
    <ArrowButton pos={pos} onClick={handleClick}>
      {pos === 'left' ? <RiArrowDropLeftLine /> : <RiArrowDropRightLine />}
    </ArrowButton>
  );
}

export default CarouselArrowButton;
