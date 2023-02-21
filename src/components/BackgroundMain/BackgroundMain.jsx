import React from 'react'
import styles from './backgroundMain.module.scss'

export const BackgroundMain = ({ children }) => {
   return (
      <div className={styles.background}>
         {children}
      </div>
   )
}
