export interface IData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IListsCard {
  lists: IData[];
}

export interface IListsID {
  lists: number[];
}
