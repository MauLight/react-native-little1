import { Ionicons } from '@expo/vector-icons'
import { Pressable, View, Text, StyleSheet, useColorScheme } from 'react-native'
import * as RootNavigation from '../RootNavigation'
import { useState } from 'react';

export default function AppMenu({ navigation }) {

    const colorScheme = useColorScheme();
    const [log, setLog] = useState(false);
    const [home, setHome] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <View style={[{ flex: 0.15, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }, colorScheme === 'light'
            ? { backgroundColor: '#F4CE14' }
            : { backgroundColor: '#333333' }]}>
            <View>
                <Pressable
                    style={styles.button}
                    onPress={() => RootNavigation.navigate('Login to Little Lemon')}
                    onPressIn={() => {
                        setHome(false)
                        setLog(!log)
                        setMenu(false)
                        }}
                >
                    <Ionicons name='ios-log-in' size={32} color={log ? 'tomato' : "#fff"}  />
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={styles.button}
                    onPress={() => RootNavigation.navigate('Welcome')}
                    onPressIn={() => {
                        setHome(!home)
                        setLog(false)
                        setMenu(false)
                        }}
                >
                    <Ionicons name='ios-information-circle' size={32} color={home ? 'tomato' : "#fff"} />
                    <Text style={styles.text}>Home</Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={styles.button}
                    onPress={() => RootNavigation.navigate('Menu')}
                    onPressIn={() => {
                        setHome(false)
                        setLog(false)
                        setMenu(!menu)
                        }}
                >
                    <Ionicons name='ios-list' size={32} color={menu ? 'tomato' : "#fff"} />
                    <Text style={styles.text}>Menu</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 'auto',
    },
    text: {
        fontSize: 12,
        color: '#fff'
    }
})