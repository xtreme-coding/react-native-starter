import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend1' },
        { name: 'Friend2' },
        { name: 'Friend3' },
        { name: 'Friend4' },
        { name: 'Friend5' },
    ];

    return (
        <FlatList 
    		data={friends} 
    		renderItem={({ item }) => {
    			return <Text>{item.name}</Text>;
    		}} 
    	/>
    );
};

const styles = StyleSheet.create({});

export default ListScreen;