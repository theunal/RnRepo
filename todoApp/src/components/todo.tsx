import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Todo = (props: any) => {
    return (
        <TouchableOpacity onLongPress={() => props.deleteTodo(props.todos.id)}
            onPress={() => {
                props.todoSelect(props.todos.id)
            }}>
            {
                !props.todos.isSelected ?
                    (
                        <View style={styles.body_innerContainer}>
                            <Text style={styles.bodyText} >
                                {props.todos.title}
                            </Text>
                        </View>
                    ) :
                    (
                        <View style={styles.body_innerContainer_selected}>
                            <Text style={styles.bodyText_selected} >
                                {props.todos.title}
                            </Text>
                        </View>
                    )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body_innerContainer: {
        backgroundColor: '#7DA453',
        padding: 12,
        borderRadius: 5,
        marginBottom: 10
    },
    bodyText: {
        fontSize: 18,
        color: 'white',
        textTransform: 'capitalize'
    },
    body_innerContainer_selected: {
        backgroundColor: '#37474F',
        padding: 12,
        borderRadius: 5,
        marginBottom: 10
    },
    bodyText_selected: {
        fontSize: 18,
        color: '#808080',
        textTransform: 'capitalize',
        textDecorationLine: 'line-through'
    }
})

export default Todo