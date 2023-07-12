import { View, Text, SectionList, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { menuItemsToDisplay } from '../utils/array';
import { useState } from 'react';

const Item = ({ name, price }) => {

    const colorScheme = useColorScheme()

    return (
        <View
            style={[
                styles.sectionview,
                colorScheme === 'light'
                    ? { backgroundColor: '#F4CE14' }
                    : { backgroundColor: '#fff' }
            ]}
        >
            <Text style={[
                styles.text2,
                colorScheme === 'light'
                    ? { color: '#fff' }
                    : { color: '#333333'}
            ]}>
                {name}
            </Text>
            <Text style={styles.text3} >
                {price}
            </Text>
        </View>
    )
}

export default function SectionMenuItems() {

    const [showMenu, setShowMenu] = useState(false)
    const colorScheme = useColorScheme()

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />
    const Separator = () => <View style={styles.separator} />

    const renderSectionHeader = ({ section: { title } }) => (
        <View>
            <Text style={[
                styles.sectionHeader,
                colorScheme === 'light'
                    ? { backgroundColor: '#F4CE14', color: '#fff' }
                    : { backgroundColor: '#333333', color: '#fff' }
            ]}
            >{title}</Text>
        </View>
    );

    return (
        <View style={{ flex: 0.8 }}>
            <SectionList
                stickySectionHeadersEnabled={true}
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={Separator}
            >
            </SectionList>

        </View>
    );
}

const styles = StyleSheet.create({
    sectionview: {
        paddingHorizontal: 40,
        paddingVertical: 0,

        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
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
        fontSize: 18,
    },
    text3: {
        color: '#333333',
        fontSize: 15,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#EDEFEE'
    },
    sectionHeader: {
        fontSize: 20,
        paddingHorizontal: 40,
        paddingVertical: 5
    },
    button: {
        paddingVertical: 10
    },

})
