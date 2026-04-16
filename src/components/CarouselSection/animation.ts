'use client';

import { useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

export const useCarouselSectionAnimation = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    const slider = carouselRef.current;

    if (!slider) return;

    isDraggingRef.current = true;
    startXRef.current = event.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const slider = carouselRef.current;

    if (!slider || !isDraggingRef.current) return;

    event.preventDefault();

    const currentX = event.pageX - slider.offsetLeft;
    const distance = (currentX - startXRef.current) * 1.5;

    slider.scrollLeft = scrollLeftRef.current - distance;
  };

  const finishDrag = () => {
    const slider = carouselRef.current;

    isDraggingRef.current = false;

    if (!slider) return;

    slider.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    finishDrag();
  };

  const handleMouseLeave = () => {
    finishDrag();
  };

  return {
    carouselRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  };
};
