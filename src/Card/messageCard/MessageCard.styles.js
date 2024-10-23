import { StyleSheet } from "react-native";



export default StyleSheet.create ({
    container: {
        flex: 1,
   
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
        color: 'black'
    },
    text: {
        fontSize: 15,
        color: 'black',
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
       
        padding: 4,
        borderRadius: 20,
        marginRight: 5
    },
    dislike_count_text: {
        color: 'white',
        fontWeight: 'bold',
    },
    dislike_text: {
       
        fontWeight: 'bold'
    }


})