import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
        const friends = [
            { name: 'Friend1' },
            { name: 'Friend2' },
            { name: 'Friend3' },
            { name: 'Friend4' },
            { name: 'Friend5' },
            { name: 'Friend6' },
            { name: 'Friend7' },
            { name: 'Friend8' },
            { name: 'Friend9' },
        ];

        return (
                <FlatList
	            horizontal
	            showsHorizontalScrollIndicator={false}
	        	keyExtractor={friend => friend.name} 
	    		data={friends} 
	    		renderItem={({ item }) => {
	    			return <Text style={styles.textStyle}>{item.name}</Text>;
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