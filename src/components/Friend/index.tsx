import React from "react";
import { Text } from "react-native";
import { IFriendProps } from "../../types";

const Friend: React.FC<IFriendProps> = ({ friend: { name, likes } }) => {
  return <Text>{`${name} - likes: ${likes}`}</Text>;
};

export { Friend };
