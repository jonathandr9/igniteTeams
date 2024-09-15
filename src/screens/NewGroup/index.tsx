import { Header } from "@components/Header";
import { Container, Content, Icon} from "./styles";
import { Button } from "@components/Button";
import { Highlight } from '@components/Highlight';
import {Input} from '@components/Input';

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

                <Input
                    placeholder="Nome da Turma"
                />

                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                />
            </Content>

        </Container>
    );
}