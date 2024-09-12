import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import {
    Container
} from './styles'
import { useState } from 'react';

export function Groups() {

    const [groups, setGroups] = useState<string[]>(['Rocketseat', 'Alura', 'Desenvolvedor.io'])

    return (
        <Container>
            <Header/>
            <Highlight 
                title='Turmas'
                subtitle='jogue com a sua turma'
            />
            <FlatList 
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <GroupCard 
                        title={item}
                    />                    
                )}
            />

        </Container>
    );
}