import React from "react";
import { View } from "react-native";
import { ISearchResultProps } from "../../types";
import { Friend } from "../Friend";

const FriendList: React.FC<ISearchResultProps> = ({ data }) => {
  return (
    <View>
      {data.map((friend) => (
        <View>
          <Friend key={String(friend.id)} friend={friend} />
        </View>
      ))}
    </View>
  );
};

export { FriendList };
