import *as React from 'react'
import { Text, FlatList, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native'
import axios from 'axios'
import { ListItem } from 'react-native-elements'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            url: 'http://localhost:5000/',
            listData: []
        }
    }

    componentDidMount() {
        this.getStarData()
    }

    getStarData() {
        axios.get(this.state.url)
            .then((response) => {
                this.setState({
                    listData: response.data.data
                })
            })
            .catch((error) => { alert(error.message) })
    }

    renderItem = ({ item, index }) => {
        <ListItem
            key={index}
            title={`Star : ${item.name}`}
            subtitle={`Distance from earth: ${item.distance}`}
            titleStyle={styles.title}
            containerStyle={styles.listContainer}
            bottomDivider
            chevron
            onPress={() =>
                this.props.navigation.navigate('Details', { star_name: item.name })
            }
        />
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <View style={styles.upperContainer}>
                    <Text style={styles.headerText}>Planets World</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <FlatList
                        data={this.state.listData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => { index.toString() }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edc988"
    },
    upperContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#132743"
    },
    lowerContainer: {
        flex: 0.9
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyContainerText: {
        fontSize: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#d7385e"
    },
    listContainer: {
        backgroundColor: "#eeecda"
    }
})