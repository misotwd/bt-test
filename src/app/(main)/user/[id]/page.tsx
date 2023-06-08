import axios from "axios";

type UserPageOarams = {
  params: { id: string };
};

export const generateStaticParams = async () => {
  const promise: Promise<[]> = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      resolve(response.data);
    }, 10000);
  });

  const users = await promise;
  console.log("users", users);

  return users.map((user: any) => ({
    id: user.id.toString(),
  }));
};

function UserPage({ params }: UserPageOarams) {
  const { id } = params;
  console.log("params", params);

  return <div>User ID: {id}</div>;
}

export default UserPage;
