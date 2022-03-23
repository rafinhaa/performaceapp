import React, { memo } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IFriendProps } from "../../types";

const FriendComponent: React.FC<IFriendProps> = ({
  friend: { name, likes, id, online },
  follow,
}) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>{`${name} - likes: ${likes}`}</Text>
      <TouchableOpacity onPress={() => follow(id)}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>
      <Text>Online em: {online}</Text>
    </View>
  );
};

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.friend, nextProps.friend);
});
