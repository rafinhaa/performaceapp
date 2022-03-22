export interface IFriendProps {
  friend: {
    id: number;
    name: string;
    likes: number;
  };
  follow: (id: number) => void;
}

export interface ISearchResultProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
  follow: (id: number) => void;
}
