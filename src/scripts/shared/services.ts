const urlData = 'http://jsonplaceholder.typicode.com/photos';
const getData = async () => {
  const data = await fetch(urlData)
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
