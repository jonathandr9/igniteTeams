import { Container, Logo } from './styles';
import logoImg from '@assets/logo.png';
import { FontAwesome } from '@expo/vector-icons';

export function Header() {

    return (
        <Container>
            <FontAwesome name="rocket" size={24} color="white" />
            <Logo source={logoImg}/>
        </Container>
    )
}