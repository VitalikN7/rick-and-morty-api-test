import { React, useEffect, useState } from 'react'
import { Select, Button } from 'antd';
import styles from "./filter.module.scss";
import { useDispatch } from 'react-redux'
import { sortStatus } from '../../redux/slice/dataSlice'

export const Filter = () => {

   const dispath = useDispatch()

   const [selectValue, setSelectValue] = useState('Категории')

   useEffect(() => {
      dispath(sortStatus(selectValue))
   }, [dispath, selectValue])

   return (
      <div className={styles.filter}>
         <Select
            value={selectValue}
            placeholder={selectValue}
            className={styles.custom_select}
            onChange={(value) => setSelectValue(value)}
            options={[
               {
                  value: 'Alive',
               },
               {
                  value: 'Dead',
               },
               {
                  value: 'Unknown',
               },
            ]}
         />
         <Button onClick={() => setSelectValue('Категории')} className={styles.custom_button}>Очистить фильтры</Button>
      </div>
   )
}