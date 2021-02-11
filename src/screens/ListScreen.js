import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
        const friends = [
            { name: 'Friend1', age: 10 },
            { name: 'Friend2', age: 12 },
            { name: 'Friend3', age: 15 },
            { name: 'Friend4', age: 10 },
            { name: 'Friend5', age: 12 },
            { name: 'Friend6', age: 11 },
            { name: 'Friend7', age: 10 },
            { name: 'Friend8', age: 12 },
            { name: 'Friend9', age: 10 },
        ];

        return (
                <FlatList
	        	keyExtractor={friend => friend.name} 
	    		data={friends} 
	    		renderItem={({ item }) => {
	    			return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
    		}} 
    	/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;