import { Header } from "@components/Header";
import { Container, Content, Icon} from "./styles";
import { Button } from "@components/Button";
import { Highlight } from '@components/Highlight'

export function NewGroup(){
    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon name="users"/>
                <Highlight
                    title="Novas Turmas"
                    subtitle="crie a turma para adicionar as pessoas"
                />
                <Button title="Criar"/>
            </Content>

        </Container>
    );
}