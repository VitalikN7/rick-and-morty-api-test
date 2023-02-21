import { React } from 'react'
// components
import { Container } from "./../../components/Container/Container";
import { BackgroundMain } from "./../../components/BackgroundMain/BackgroundMain";
// models
import { Filter } from "./../../models/Filter/Filter";
import { ItemList } from "./../../models/ItemList/ItemList";
import { Search } from "./../../models/Search/Search";

export const Home = () => {
   return (
      <BackgroundMain>
         <Container>
            <Search />
            <main>
               <Filter />
               <ItemList />
            </main>
         </Container>
      </BackgroundMain>
   )
}
