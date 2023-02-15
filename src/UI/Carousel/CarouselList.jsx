import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  height: ${({ height }) => height};
  overflow: hidden;
`;

const Item = styled.li`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ nextTransform }) => nextTransform}%);
  transition: 200ms ease;
  > img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

function CarouselList({ banners, activeIndex, height }) {
  const nextTransform = activeIndex * 100;

  return (
    <List height={height}>
      {banners.map(banner => {
        const { alt, url } = banner;
        return (
          <Item key={alt} nextTransform={nextTransform}>
            <img src={url} alt={alt} />
          </Item>
        );
      })}
    </List>
  );
}

export default CarouselList;
