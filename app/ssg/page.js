import Link from "next/link";
import UserApi from "../../userapi/userapi";

const UserList = async () => {
  const users = await UserApi();
  console.log(users);
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <h1 key={user.id}>
            <Link href={`/ssg/${user.id}`}>{user.name}</Link>
          </h1>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
