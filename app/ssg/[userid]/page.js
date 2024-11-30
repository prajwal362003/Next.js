import UserApi from "../../../userapi/userapi";

const DynamicPage = async ({ params }) => {
  const users = await UserApi();
  const currId = params.userid;
  const userDetails = users[currId - 1]; // -1 because array idx from 0 and user id are starting from 1
  console.log(userDetails);
  return (
    <div>
      <h1>User info</h1>
      <p>Name: {userDetails.name}</p>
      <p>Username: {userDetails.username}</p>
      <p>User Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <p>Website: {userDetails.website}</p>
    </div>
  );
};

// generates static html pages for better seo's at the build time only instead at every requests
export async function generateStaticParams() {
  const users = await UserApi();
  return users.map((user) => ({
    userid: user.id.toString(),
  }));
}

export default DynamicPage;
