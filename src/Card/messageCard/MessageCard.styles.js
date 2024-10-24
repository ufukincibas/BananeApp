import { StyleSheet } from "react-native";


export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#4CAF50",
        margin: 8,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        color: 'white',
        fontSize: 15,

    },
    date: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'white'
    },
    text: {
        fontSize: 15,
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    },
    footer: {
        alignItems: 'flex-end'
    },
    dislike_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    dislike_count_container: {
        backgroundColor: "#4CAF50",
        padding: 4,
        borderRadius: 20,
        marginRight: 5
    },
    dislike_count_text: {
        color: 'white',
        fontWeight: 'bold',
    },
    dislike_text: {
        color: "#4CAF50",
        fontWeight: 'bold'
    }


})
