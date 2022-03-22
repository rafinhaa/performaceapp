import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { ISearchResultProps } from "../../types";
import { Friend } from "../Friend";

const FriendList: React.FC<ISearchResultProps> = ({ data }) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>{`Total de likes: ${totalLikes}`}</Text>
      {data.map((data) => (
        <View>
          <Friend key={String(data.id)} friend={data} />
        </View>
      ))}
    </View>
  );
};

export { FriendList };
