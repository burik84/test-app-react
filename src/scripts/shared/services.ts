import { IData } from './interface';

const urlData = 'http://jsonplaceholder.typicode.com/photos';
const getData: () => Promise<IData[]> = async () => {
  const data: IData[] = await fetch(urlData)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.log('Something went wrong', error.message);
    });

  return data;
};

const getListsID = (data: IData[]): number[] => {
  if (!data) return [];
  const set = new Set<number>();
  data.forEach((element) => {
    set.add(element.albumId);
  });
  const result = [...set];

  return result;
};

const filterData = (data: IData[]|[], albomID = 0) => {
  const result = albomID
    ? data.filter((item: IData) => albomID === item.albumId)
    : data;
  return result;
};

export { getData, getListsID, filterData };
