import React, { useEffect, useState } from "react";
import { FlatList, Text,TouchableOpacity, View } from "react-native";

import Card from "../Components/Card";
import Row from "../Components/Row";
import { styles } from "../CSS/styles";


const HomeScreen = () => {

    const [data, setData] = useState();
    const [title, setTitle] = useState("");
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);

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

    // const renderItem = ({ item }) => {
    //     return (
    //       <View key={item.id} style={{ borderWidth: 1, borderColor: "#4D4f48", marginVertical: 10, padding: 10 }}>
    //         <Row style={[styles.row, { justifyContent: "flex-start", marginBottom: 5 }]}>
    //           <Text style={{ textAlign: "left" }}>{item.data.title}</Text>
    //         </Row>
    //         <Row style={[styles.row, { justifyContent: "space-between" }]}>
    //           <Text>comment count here</Text>
    //           <Text>{item.data.author}</Text>
    //         </Row>
    //       </View>
    //     );
    //   }

    return (
        <View style={styles.container}>
            <Row style={[styles.row, { justifyContent: "center", marginVertical: 25, paddingHorizontal: 10 }]}>
                <Text style={{ textAlign: "center" }}>{title}</Text>
            </Row>
            <FlatList
                data={data && data.slice(startIndex, endIndex)}
                renderItem={(item) => <Card item={item}/>}
                keyExtractor={item => item.data.id}
            />
            <Row style={[styles.row, { justifyContent: "space-between" }]}>
                <TouchableOpacity
                    accessibilityRole="button"
                    disabled={startIndex === 0}
                    onPress={handlePrevious}
                    style={{ backgroundColor: "#000", paddingHorizontal: 15, paddingVertical: 5 }}
                >
                    <Text style={{ color: "#4D4f48" }}>
                        Previous
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    accessibilityRole="button"
                    disabled={data && endIndex >= data.length}
                    onPress={handleNext}
                    style={{ backgroundColor: "#c9f646", paddingHorizontal: 15, paddingVertical: 5 }}
                >
                    <Text style={{ color: "#000" }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </Row>
        </View>
    );
};

export default HomeScreen;