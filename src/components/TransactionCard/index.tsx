import React from "react";

import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from "../TransactionCard/styles";


export function TransactionCard(){
    return (
        <Container>
            <Title>Desenvolvimento de site</Title>
            <Amount>R$ 12.500,00</Amount>
            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>02/08/2022</Date>
            </Footer>
        </Container>
        )
    }