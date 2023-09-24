import Image from 'next/image'
import React from 'react'

export default function DevCard() {
  return (
    <div>
        <div>
            <Image src={"/assets/default-avatar.png"} height={200} width={200} />
        </div>
        <div>
            <h1>Brijendra singh</h1>
            <span>B122041</span>
            <ul>
                <li>- Backend</li>
            </ul>
        </div>
    </div>
  )
}
