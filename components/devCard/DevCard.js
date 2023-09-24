import Image from 'next/image'
import React from 'react'
import styles from "./devCard.module.css"

export default async function DevCard({src, name, id, children}) {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <Image src={src} height={200} width={200} />
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.name}>{name}</h1>
            <span className={styles.id}>{id}</span>
            {children}
        </div>
    </div>
  )
}
