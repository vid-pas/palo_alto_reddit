import React from "react";
import { Text, View } from "react-native";
import Row from "../Components/Row";
import { styles } from "../CSS/styles";


const Card = ({ item }) => {
    console.log("item", item)
    return (
        <View key={item.id} style={{ borderWidth: 1, borderColor: "#4D4f48", marginVertical: 10, padding: 10 }}>
            <Row style={[styles.row, { justifyContent: "flex-start", marginBottom: 5 }]}>
                <Text style={{ textAlign: "left" }}>{item.item.data.title}</Text>
            </Row>
            <Row style={[styles.row, { justifyContent: "space-between" }]}>
                <Text># comments</Text>
                <Text>{item.item.data.author}</Text>
            </Row>
        </View>
    );
};

export default Card;