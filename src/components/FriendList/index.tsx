import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import { ISearchResultProps } from "../../types";
import { Friend } from "../Friend";

const FriendList: React.FC<ISearchResultProps> = ({ data, follow }) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>{`Total de likes: ${totalLikes}`}</Text>
      <FlatList
        data={data}
        keyExtractor={(friend) => friend.id.toString()}
        renderItem={({ item }) => <Friend friend={item} follow={follow} />}
      />
    </View>
  );
};

export { FriendList };
