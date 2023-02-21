import React from 'react'
import styles from './backgroundHeader.module.scss'

export const BackgroundHeader = ({ children }) => {
   return (
      <div className={styles.background}>
         {children}
      </div>
   )
}
