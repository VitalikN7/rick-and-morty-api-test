import React, { useEffect } from 'react'
// components
import { Card, Button } from 'antd';
// router
import { useParams, useNavigate } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchRick_and_Morti_Api_Solo, selectAllDataIsApi } from '../../redux/slice/dataSlice'
// styles
import styles from "./itemCard.module.scss";

export const ItemCard = () => {

   const { id } = useParams()
   const navigate = useNavigate()

   const goBack = () => navigate(-1)

   const dispath = useDispatch()
   const allData = useSelector(selectAllDataIsApi)
   console.log('allData: ', allData?.allDataIsApiSolo);

   useEffect(() => {
      dispath(fetchRick_and_Morti_Api_Solo(id))
   }, [dispath, id])

   return (
      <div className={styles.itemCard}>
         <h1>{allData?.allDataIsApiSolo?.name}</h1>
         < Card
            hoverable
            className={styles.card}
            cover={< img alt="avatar" src={allData?.allDataIsApiSolo?.image} />}
         >
            <ul>
               <li>{`Статус: ${allData?.allDataIsApiSolo?.status}`}</li>
               <li>{`Пол: ${allData?.allDataIsApiSolo?.gender}`}</li>
               <li>{`Локация: ${allData?.allDataIsApiSolo?.location.name}`}</li>
               <li>{`Ориджин:  ${allData?.allDataIsApiSolo?.origin.name}`}</li>
               <li>{`Вид:${allData?.allDataIsApiSolo?.species}`}</li>
            </ul>
         </Card >
         <Button onClick={goBack} className={styles.custom_button}>Назад</Button>
      </div>
   )
}
