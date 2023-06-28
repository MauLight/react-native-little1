import { View, Text, FlatList, StyleSheet } from 'react-native';
import { menuItemsToDisplay } from '../utils/array';

const Item = ({ name, price }) => {
    return (
        <View style={styles.flatview}>
            <Text style={styles.text2}>
                {name}
            </Text>
            <Text style={styles.text3} >
                {price}
            </Text>
        </View>
    )
}

export default function FlatMenuItems() {

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />
    const Separator = () => <View style={styles.separator} />
    const Header = () => <Text style={styles.text}>View Menu</Text>
    const Footer = () => <Text style={styles.text}>View Menu</Text>

    return (
        <View style={{ flex: 0.75 }}>
            <FlatList
                data={menuItemsToDisplay}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    flatview: {
        paddingHorizontal: 40,
        paddingVertical: 0,
        backgroundColor: '#F8fde8',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 30,
        flexWrap: 'wrap',
        textAlign: 'center',
        marginBottom: 20
    },
    text2: {
        color: '#333333',
        fontSize: 20,
        paddingBottom: 20
    },
    text3: {
        color: '#333333',
        fontSize: 15,
        paddingBottom: 20,
    }, separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE'
    }
})
