import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Row from "../Components/Row";
import { styles } from "../CSS/styles";


const HomeScreen = () => {

    const [data, setData] = useState();
    const [title, setTitle] = useState("");

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

    return (
        <View style={styles.container}>
            <Row style={[styles.row, { justifyContent: "center", marginVertical: 25, paddingHorizontal: 10}]}>
                <Text style={{textAlign: "center"}}>{title}</Text>
            </Row>
            {data && data.map((post, i) => {
                return <View style={{ borderWidth: 1, borderColor: "#4D4f48", marginVertical: 10, padding: 10}}>
                    <Row style={[styles.row, { justifyContent: "flex-start", marginBottom: 5 }]}>
                        <Text style={{textAlign: "left"}}>{post.data.title}</Text>
                    </Row>
                    <Row style={[styles.row, { justifyContent: "space-between"}]}>
                        <Text>comment count here</Text>
                        <Text>{post.data.author}</Text>
                    </Row>
                </View>
            })}
            <Row style={[styles.row, { justifyContent: "space-between"}]}>
                <TouchableOpacity
                     accessibilityRole="button"
                     disabled={false}
                     onPress={console.log("previous")}
                     style={{backgroundColor: "#000", paddingHorizontal: 15, paddingVertical: 5 }}
                    >
                    <Text style={{color: "#4D4f48"}}>
                        Previous
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 accessibilityRole="button"
                 disabled={false}
                 onPress={console.log("next")}
                 style={{backgroundColor: "#c9f646", paddingHorizontal: 15, paddingVertical: 5 }}
                 >
                    <Text style={{color: "#000"}}>
                        Next
                    </Text>
                </TouchableOpacity>
            </Row>
        </View>
    );
};

export default HomeScreen;