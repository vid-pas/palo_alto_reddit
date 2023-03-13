import React from "react";
import { View } from "react-native";

import { styles } from "../CSS/styles";


/**
 * @param {style} | object  
 * @returns JSX Row Element
 */
const Row = ({ children , style }) => {
  return (
    <View style={[styles.row, style]}>{children}</View>
  );
};

export default Row;