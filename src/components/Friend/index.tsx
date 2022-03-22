import React, { memo } from "react";
import { Text } from "react-native";
import { IFriendProps } from "../../types";

const FriendComponent: React.FC<IFriendProps> = ({
  friend: { name, likes },
}) => {
  return <Text>{`${name} - likes: ${likes}`}</Text>;
};

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.friend, nextProps.friend);
});
