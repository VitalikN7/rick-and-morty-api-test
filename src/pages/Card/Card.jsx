// components
import { Container } from "./../../components/Container/Container";
import { BackgroundMain } from "./../../components/BackgroundMain/BackgroundMain";
// models
import { ItemCard } from "./../../models/ItemCard/ItemCard";

export const Card = () => {
   return (
      <BackgroundMain>
         <Container>
            <ItemCard />
         </Container>
      </BackgroundMain>
   )
}
