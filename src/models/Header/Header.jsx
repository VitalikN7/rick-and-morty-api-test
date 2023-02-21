import { Container } from "./../../components/Container/Container";
import { BackgroundHeader } from "./../../components/BackgroundHeader/BackgroundHeader";
import React from 'react'
import logo from "./../../assets/rick_and_morty_logo.png";
import styles from "./header.module.scss";

export const Header = () => {
   return (
      <BackgroundHeader>
         <Container>
            <header className={styles.header}>
               <img src={logo} alt="logo" />
            </header>
         </Container>
      </BackgroundHeader>
   )
}
