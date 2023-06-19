import axios from 'axios';

const getUser = async (id: string) => {
  const promise: Promise<any> = new Promise(resolve => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      resolve(response.data);
    }, 2000);
  });

  const user = await promise;
  return user;
};

async function UserDetails({id}: {id: string}) {
  const user = await getUser(id);

  return (
    <>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h5>{user.phone}</h5>
    </>
  );
}

export default UserDetails;
