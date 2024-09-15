import { FontAwesome } from "@expo/vector-icons";
import  styled  from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`

export const Content = styled.View`
    flex: 1;
    justify-content: center;

`

export const Icon = styled(FontAwesome).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_700,
    size: 50
}))`
    align-self: center
`;