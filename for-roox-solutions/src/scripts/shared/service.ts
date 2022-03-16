import { IUser } from './interface';

const urlData = 'https://jsonplaceholder.typicode.com/users';

const getDataUsers: () => Promise<IUser[]> = async () => {
  const data: IUser[] = await fetch(urlData)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('Something went wrong', error.message);
    });

  return data;
};

export { getDataUsers };
