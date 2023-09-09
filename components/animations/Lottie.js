"use client";

import { useLottie } from 'lottie-react'

export default function Lottie({className, options}) {

  const {View} = useLottie({animationData: options, loop: true});

  return (
    <div className={className}>
        {View}
      </div>
  )
}
