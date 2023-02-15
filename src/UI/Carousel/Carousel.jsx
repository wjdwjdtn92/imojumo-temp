import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import CarouselArrowButton from './CarouselArrowButton';
import CarouselList from './CarouselList';

const Container = styled.div`
  position: relative;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;

/**
 * @param {{url: string, alt: string}[]]} banners
 */
function Carousel({
  banners,
  style,
  width = '100%',
  height = '450px',
  isDisplayArrowButton = true,
  interval = 3000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prevIndex =>
      prevIndex < banners.length - 1 ? prevIndex + 1 : 0,
    );
  };
  const handlePrev = () =>
    setActiveIndex(prevIndex =>
      prevIndex === 0 ? banners.length - 1 : banners.length + 1,
    );

  useEffect(() => {
    const intervalId = setInterval(handleNext, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container width={width} height={height} style={style}>
      {isDisplayArrowButton && banners.length >= 2 && (
        <CarouselArrowButton pos="left" handleClick={handlePrev} />
      )}
      <CarouselList
        banners={banners}
        activeIndex={activeIndex}
        height={height}
      />

      {isDisplayArrowButton && banners.length >= 2 && (
        <CarouselArrowButton pos="right" handleClick={handleNext} />
      )}
    </Container>
  );
}

export default Carousel;
