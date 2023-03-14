import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import Row from "../Components/Row";
import { styles } from "../CSS/styles";
import { s, vs, ms, mvs } from 'react-native-size-matters';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Card = ({ item }) => {
    const [smallText, setSmallText] = useState();
    const [mainText, setMainText] = useState();

    useEffect(() => {
        if(width <  300){
            setSmallText(8);
            setMainText(16);
        }if(width <  360){
            setSmallText(10);
            setMainText(18);
        }else if(width <  577){
            setSmallText(12);
            setMainText(21);
        }else if(width < 769){
            setSmallText(12.75);
            setMainText(22.25);
        }else if(width < 993){
            setSmallText(13.5);
            setMainText(23.5);
        }
        else if(width < 1231){
            setSmallText(14);
            setMainText(25);
        }
    }, [item]);
    
    return (
        <View key={item.id} style={{ borderWidth: 1, borderColor: "#4D4f48", marginHorizontal: ms(50), marginVertical: ms(10), padding: ms(10) }}>
            <Row style={[styles.row, { justifyContent: "flex-start", marginBottom: ms(25) }]}>
                <Text style={{ color: "#fff", textAlign: "left", fontSize: mainText }}>{item.item.data.title}</Text>
            </Row>
            <Row style={[styles.row, { justifyContent: "space-between" }]}>
                <Text style={{color: "#c9f646", fontSize: ms(smallText), lineHeight: ms(16)}}># comments</Text>
                <Text style={{color: "#fff", fontSize: ms(smallText), lineHeight: ms(16)}}>{"submitted by " + item.item.data.author}</Text>
            </Row>
        </View>
    );
};

export default Card;