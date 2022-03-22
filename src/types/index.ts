export interface IFriendProps {
  friend: {
    id: number;
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
