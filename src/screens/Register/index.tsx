import React from "react";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

export default function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />
          <TransactionTypes>
            <TransactionTypeButton title={"Entrada"} type={"up"} />
            <TransactionTypeButton title={"Saida"} type={"down"} />
          </TransactionTypes>
        </Fields>
        <Button title={"Enviar"} />
      </Form>
    </Container>
  );
}
