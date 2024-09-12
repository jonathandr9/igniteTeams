import { Container, Logo, BackIcon, BackButton } from './styles';
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon name="angle-left" />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}