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
    Title

} from "./styles";

export default function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/91102332?v=4' }} />
                            <User>
                                <UserGreeting>Oi,</UserGreeting>
                                <UserName>Wilcson</UserName>
                            </User>
                    </UserInfo>
                <Icon name='power'/>
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionCard/>
            </Transactions>
        </Container>
        
    )
}

