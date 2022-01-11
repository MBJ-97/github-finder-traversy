import { useEffect, useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 grid-gab-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((u) => (
          <UserItem key={u.id} user={u}></UserItem>
        ))}
      </div>
    );
  } else {
    return <h3>Loading</h3>;
  }
}

export default UserResults;
