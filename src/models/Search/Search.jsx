import { React, useState, useEffect } from 'react'
// components
import { Input } from 'antd';
// styles
import styles from "./search.module.scss";
// Redux
import { useDispatch } from 'react-redux'
import { searchName } from '../../redux/slice/dataSlice'

export const Search = () => {

   const dispath = useDispatch()
   const [letterSearch, setLetterSearch] = useState('')

   useEffect(() => {
      dispath(searchName(letterSearch))
   }, [dispath, letterSearch])

   return (
      <div className={styles.search}>
         <Input
            value={letterSearch}
            allowClear={true}
            onChange={(e) => setLetterSearch(e.target.value)}
            placeholder="Поиск" />
      </div>
   )
}
