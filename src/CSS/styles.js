import { Dimensions } from "react-native";
import { ScaledSheet  } from 'react-native-size-matters';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const styles = ScaledSheet.create({
    container: {
        backgroundColor: "#000", 
        height: height, 
        justifyContent: "center",
        width: width,
    },
    row: {
        flexDirection: "row",
    }
})