import axios from 'axios';

const getDataPoligon = async (cb) => {
  const promise = axios.get(
    'http://agro.energomera.ru:3060/api/field?lastChangeDate=2022-01-01T10:00:00.000&skip=0&take=100',
  );
  promise.then((response) => cb(response.data));
};
export default getDataPoligon;
