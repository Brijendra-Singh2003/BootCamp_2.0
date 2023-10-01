"use client";

import { DotLottiePlayer } from '@dotlottie/react-player';

export default function DotLottie({src, className}) {
  return (
    <DotLottiePlayer
        src={src}
        autoplay
        loop
        className={className}
    />
  );
}