import React from 'react'
import styles from './alert.module.css'

export default function Alert({children}) {
  return (
    <div className={styles.toast}><span>{children}</span></div>
  )
}
