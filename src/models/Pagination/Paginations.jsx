// components
import { Pagination } from 'antd';
// styles
import styles from "./pagination.module.scss";

export const Paginations = ({ page, setPage, pageSize, total }) => {

   return (
      <div className={styles.pagination}>
         <Pagination
            total={total}
            pageSize={pageSize}
            current={page}
            onChange={(page) => setPage(page)}
         />
      </div>
   )
}
