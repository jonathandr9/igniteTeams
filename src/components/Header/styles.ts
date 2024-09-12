import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`

export const BackIcon = styled(FontAwesome).attrs(({theme}) => ({
    color: theme.COLORS.WHITE,
    size: 50
})
)`

`

export const BackButton = styled.TouchableOpacity`
    flex: 1
`