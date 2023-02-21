import { React, useEffect } from 'react'
// components
import { Card } from 'antd';
import { Paginations } from "../../models/Pagination/Paginations";
// redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchRick_and_Morti_Api, selectAllDataIsApi } from '../../redux/slice/dataSlice'
// router
import { Link } from 'react-router-dom';
// styles
import styles from "./itemList.module.scss";
// hook
import usePagination from '../../hooks/usePagination';

export const ItemList = () => {

   const dispath = useDispatch()
   const allData = useSelector(selectAllDataIsApi)
   // Пагинация   
   const {
      firstContentIndex,
      lastContentIndex,
      page,
      setPage,
   } = usePagination({
      contentPerPage: 8,
      count: allData?.allDataIsApi?.results?.length,
   });

   useEffect(() => {
      dispath(fetchRick_and_Morti_Api())
   }, [dispath])

   const searchName = allData?.allDataIsApi?.results.filter(el => {
      return el.name.toLowerCase().includes(allData.searchString.toLowerCase())
   })

   return (
      <div className={styles.itemList}>
         {searchName?.length > 0 && allData.searchString !== null ? (
            searchName?.slice(firstContentIndex, lastContentIndex).map(el =>
               <Link className={styles.card} key={el.id} to={`/${el.id}`}>
                  < Card
                     className={styles.inner_card}
                     hoverable
                     cover={< img alt="avatar" src={el.image} />}
                  >
                     <ul>
                        <li>{`Имя ${el.name}`}</li>
                        <li>{`id ${el.id}`}</li>
                        <li>{`Пол ${el.gender}`}</li>
                     </ul>
                  </Card >
               </Link>
            )
         ) : (
            <h1 className={styles.no_search}>К сожалению ничего не найдено</h1>
         )
         }
         <Paginations
            page={page}
            setPage={setPage}
            pageSize={8}
            total={allData?.allDataIsApi?.results?.length}
         />
      </div >
   )
}



