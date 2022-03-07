import {IData} from './interface';

const urlData = 'http://jsonplaceholder.typicode.com/photos';
const getData:()=>Promise<IData[]> = async ()=> {
  const data:IData[] = await fetch(urlData)
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

export { getData };
