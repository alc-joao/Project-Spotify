// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// export const useOurMissionAnimation = () => {
//   const infosSectionRef = useRef<HTMLDivElement>(null);
//   const rafaelContainerRef = useRef<HTMLDivElement>(null);
//   const introSectionRef = useRef<HTMLDivElement>(null);
//   const scrollDownRef = useRef<HTMLButtonElement>(null);
//   const textRef = useRef<HTMLParagraphElement>(null);
//   const flagsContainerRef = useRef<HTMLDivElement>(null);
//   const flagRef = useRef<HTMLImageElement>(null);
//   const [count, setCount] = useState<number>(1);
//   const [flagImgReady, setFlagImgReady] = useState<boolean>(false);
//   const flagsAnimationCompleted = useRef<boolean>(false);

//   useEffect(() => {
//     if (!flagImgReady) return;

//     const calculate = () => {
//       if (!flagRef.current?.complete) return;

//       const imageWidth = flagRef.current.offsetWidth;

//       if (!imageWidth) return;

//       const needed = Math.ceil(window.innerWidth / imageWidth) + 2;
//       setCount((prev) => (prev === needed ? prev : needed));
//     };

//     calculate();
//     window.addEventListener('resize', calculate);
//     return () => window.removeEventListener('resize', calculate);
//   }, [flagImgReady]);

//   useEffect(() => {
//     if (!scrollDownRef.current) return;

//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       mm.add('(max-width: 600px)', () => {
//         gsap.to(scrollDownRef.current, {
//           autoAlpha: 1,
//           duration: 0.5,
//           scrollTrigger: {
//             trigger: scrollDownRef.current,
//             start: 'top bottom-=5%',
//             once: true,
//           },
//         });
//       });

//       return () => mm.revert();
//     });

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     const flagsContainer = flagsContainerRef.current;
//     if (count <= 2 || flagsAnimationCompleted.current || !flagsContainer) return;

//     const ctx = gsap.context(() => {
//       if (count > 2) {
//         const flagsArray = gsap.utils.toArray(flagsContainer.children);
//         gsap.from(flagsArray, {
//           y: 50,
//           stagger: { amount: 0.4 },
//           onComplete: () => {
//             flagsAnimationCompleted.current = true;
//           },
//           scrollTrigger: {
//             trigger: introSectionRef.current,
//             start: 'bottom bottom',
//           },
//         });
//       }
//     }, flagsContainer);

//     return () => ctx.revert();
//   }, [count]);

//   useEffect(() => {
//     const infosSection = infosSectionRef.current;
//     const rafaelContainer = rafaelContainerRef.current;

//     if (!infosSection || !rafaelContainer) return;

//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       mm.add('(min-width: 601px)', () => {
//         ScrollTrigger.create({
//           trigger: infosSection,
//           start: 'top top',
//           end: 'bottom bottom',
//           pin: rafaelContainer,
//           invalidateOnRefresh: true,
//         });
//       });

//       return () => mm.revert();
//     });

//     return () => ctx.revert();
//   }, []);

//   const handleScrollDown = () => {
//     if (!infosSectionRef.current) return;

//     gsap.to(window, {
//       scrollTo: { y: infosSectionRef.current },
//     });
//   };

//   const onCompleteTextReveal = () => {
//     if (!textRef.current) return;

//     gsap.to(textRef.current, {
//       '--before-opacity': '1',
//     });
//   };

//   return {
//     infosSectionRef,
//     rafaelContainerRef,
//     scrollDownRef,
//     flagsContainerRef,
//     introSectionRef,
//     textRef,
//     flagRef,
//     count,
//     handleScrollDown,
//     onCompleteTextReveal,
//     setFlagImgReady,
//   };
// };
export const SIDEBAR_ANIMATION = '0.3s ease';

export const SIDEBAR_WIDTH_OPEN = '31rem';
export const SIDEBAR_WIDTH_CLOSED = '9rem';

export const SIDEBAR_ICON_SIZE = '3.2rem';
export const SIDEBAR_LABEL_MAX_WIDTH = '20rem';
export const SIDEBAR_GAP_OPEN = '2rem';
export const SIDEBAR_GAP_CLOSED = '0';
