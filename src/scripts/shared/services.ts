import { IData } from './interface';

const urlData = 'http://jsonplaceholder.typicode.com/photos';
const urlDaraReserve = '../photos.json';

const getData:() => Promise<IData[]> = () => {
  const fetchPromise1 = fetch(urlData);
  const fetchPromise2 = fetch(urlDaraReserve);
  const data = Promise.any([fetchPromise1, fetchPromise2])
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
const getFilterData: (albumID: number) => Promise<IData[]> = async (
  albumID: number
) => {
  const data: IData[] = await fetch(`${urlData}?albumId=${albumID}`)
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
const deleteData = async (id: number) => {
  await fetch(`${urlData}/${id}`, {
    method: 'DELETE',
  });
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

const filterData = (data: IData[] | [], albomID = 0) => {
  const result =
    albomID > 0 ? data.filter((item: IData) => albomID === item.albumId) : data;
  return result;
};

export { getData, deleteData, getFilterData, getListsID, filterData };
