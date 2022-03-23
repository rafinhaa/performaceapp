export interface IFriendProps {
  friend: {
    id: number;
    name: string;
    likes: number;
    online;
  };
  follow: (id: number) => void;
}

export interface ISearchResultProps {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  }[];
  follow: (id: number) => void;
}
