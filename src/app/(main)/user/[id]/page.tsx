import axios from 'axios';
import UserDetails from '../../../../components/UserDetails';

type UserPageOarams = {
  params: {id: string};
};

// export const generateStaticParams = async () => {
//   const promise: Promise<[]> = new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//       resolve(response.data);
//     }, 1000);
//   });

//   const users = await promise;
//   // console.log("users", users);

//   return users.map((user: any) => ({
//     id: user.id.toString(),
//   }));
// };

// const getUser = async (id: string) => {
//   console.log("getUser");
//   const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//       resolve(response.data);
//     }, 2000);
//   });

//   const user = await promise;
//   return user;
// };

export const fetchCache = 'only-no-store';

async function UserPage({params}: UserPageOarams) {
  const {id} = params;

  return (
    <>
      <p>jkmlhljklj</p>
      <UserDetails id={id} />
    </>
  );
}

export default UserPage;
