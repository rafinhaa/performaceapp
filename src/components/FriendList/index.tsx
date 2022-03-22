import React from "react";
import { View } from "react-native";
import { ISearchResultProps } from "../../types";
import { Friend } from "../Friend";

const FriendList: React.FC<ISearchResultProps> = ({ data }) => {
  return (
    <View>
      {data.map((data) => (
        <View>
          <Friend key={String(data.id)} friend={data} />
        </View>
      ))}
    </View>
  );
};

export { FriendList };
