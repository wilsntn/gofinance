import React from "react";
import { HighlightCard } from "../components/HighlightCard";
import { TransactionCard } from "../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  UserGreeting,
  UserName,
  User,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export default function Dashboard() {
  const data = [
    {
      type: "positive",
      title: "Desenvolvimento de Website",
      amount: "R$ 17.020,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "02/08/2022",
    },
    {
      type: "negative",
      title: "Compra de Monitor MegaWide",
      amount: "R$ 5.199,00",
      category: { name: "Compras", icon: "dollar-sign" },
      date: "27/07/2022",
    },
    {
      type: "positive",
      title: "Desenvolvimento de Website",
      amount: "R$ 7.020,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "16/05/2022",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/91102332?v=4",
              }}
            />
            <User>
              <UserGreeting>Oi,</UserGreeting>
              <UserName>Wilcson</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 25,
          }}
        />
      </Transactions>
    </Container>
  );
}
