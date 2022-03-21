export interface IFriendProps {
  friend: {
    name: string;
    likes: number;
  };
}

export interface ISearchResultProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}
