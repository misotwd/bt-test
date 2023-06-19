import UserDetails from '@/components/Users/UserDetails';

type UserPageOarams = {
  params: {id: string};
};

export const fetchCache = 'only-no-store';

async function UserPage({params}: UserPageOarams) {
  const {id} = params;

  return (
    <div>
      <p className="bg-yellow-600 px-2 w-max">No cache</p>
      <UserDetails id={id} />
    </div>
  );
}

export default UserPage;
