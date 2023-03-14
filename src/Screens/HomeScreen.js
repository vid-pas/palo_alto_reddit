import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';

import Card from "../Components/Card";
import Row from "../Components/Row";
import { styles } from "../CSS/styles";


const HomeScreen = () => {

    const [data, setData] = useState();
    const [title, setTitle] = useState("");
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    const heading1 = title ? title.split('/')[0] : "";
    const heading2 = title ? title.split('/')[1].charAt(0).toUpperCase() + title.split('/')[1].slice(1) : "";

    useEffect(() => {

        if (!data) {
            getBusinessPosts();
        }

        if (data) {
            setTitle(data[0].data.subreddit_name_prefixed);
        }
    });


    const getBusinessPosts = async () => {
        const res = await fetch("https://www.reddit.com/r/business.json");
        const response = await res.json()
        setData(response.data.children);
    };

    const handleNext = () => {
        setStartIndex(startIndex + 5);
        setEndIndex(endIndex + 5);
    };
    const handlePrevious = () => {
        setStartIndex(startIndex - 5);
        setEndIndex(endIndex - 5);
    };

    const border = { borderWidth: 2, borderRadius: 1, borderColor: "#fff", }


    return (
        <View style={styles.container}>
            <ScrollView>
                <Row style={[styles.row, { justifyContent: "flex-start", marginVertical: ms(50), marginHorizontal: ms(50), paddingHorizontal: ms(10) }]}>
                    <Row style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(to bottom, #4D4F48, #000)', width: "100%" }}>
                        <Text style={{ color: "#fff", fontSize: s(44), textAlign: "left" }}>{heading1 + "/"}</Text><Text style={{ color: "#c9f646", fontSize: s(44), textAlign: "left" }}>{heading2}</Text>
                    </Row>
                </Row>
                <FlatList
                    data={data && data.slice(startIndex, endIndex)}
                    renderItem={(item) => <Card item={item} />}
                    keyExtractor={item => item.data.id}
                    style={{ marginBottom: ms(50) }}
                />
                <Row style={[styles.row, { justifyContent: "space-between", marginHorizontal: ms(50), marginBottom: ms(50) }]}>
                    <TouchableOpacity
                        accessibilityRole="button"
                        disabled={startIndex === 0}
                        onPress={handlePrevious}
                        style={{ backgroundColor: startIndex === 0 ? "#000" : "#c9f646", borderWidth: startIndex === 0 ? 2 : 0, borderColor: startIndex === 0 ? "#4D4F48" : "transparent", paddingHorizontal: ms(15), paddingVertical: vs(5) }}
                    >
                        <Text style={{ color: startIndex === 0 ? "#4D4f48" : "#000" }}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        accessibilityRole="button"
                        disabled={data && endIndex >= data.length}
                        onPress={handleNext}
                        style={{ backgroundColor: data && endIndex >= data.length ? "#000" : "#c9f646", borderWidth: startIndex === 0 ? 2 : 0, borderColor: startIndex === 0 ? "#4D4F48" : "transparent", paddingHorizontal: ms(15), paddingVertical: vs(5) }}
                    >
                        <Text style={{ color: data && endIndex >= data.length ? "#4D4f48" : "#000" }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </Row>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;