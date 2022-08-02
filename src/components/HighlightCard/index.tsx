import React from "react";

import { 
    Container,
    Header, 
    Footer, 
    Icon, 
    Amount, 
    LastTransaction, 
    Title,
} from "../HighlightCard/styles";


export function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle"/>
            </Header>
            <Footer>
                <Amount>R$ 17.400,00</Amount>
                <LastTransaction>Ultima transacao dia 13 de maio</LastTransaction>
            </Footer>
        </Container>
    );
}