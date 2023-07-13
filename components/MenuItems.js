import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';

export default function MenuItems() {
    

    const menuItemsToDisplay = [
        ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
    ];

    return (

            <ScrollView
                indicatorStyle={'black'}
                style={styles.scrollview}
            >
                <Text style={styles.text}>
                    View Menu
                </Text>
                <Text style={styles.text2}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: '#F8fde8'
    },
    text: {
        color: 'black',
        fontSize: 50,
        flexWrap: 'wrap',
        textAlign: 'center',
        marginVertical: 20
    },
    text2: {
        color: '#F4CE14',
        fontSize: 30,
        paddingBottom: 40
    }
})
