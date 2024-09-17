import { Container, Form } from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from '@components/Header';
import { Button } from "@components/Button";
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from "@components/Input";


export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon
                    icon="add"
                />
            </Form>
            <Button
                type="SECONDARY"
                title="Remover Turma"
            />
        </Container>
    )
}