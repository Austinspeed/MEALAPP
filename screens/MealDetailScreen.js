import { Text, View } from "react-native"

const MealDetailScreen = ({ route }) => {
    const mealId = route.params.mealId;
    return <View>
        <Text>This is a meal detail screen {mealId}</Text>
    </View>
}

export default MealDetailScreen