const UserApi = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();

  return response;
};

export default UserApi;
