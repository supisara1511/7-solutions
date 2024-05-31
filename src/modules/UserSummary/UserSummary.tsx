import React, { useEffect } from "react";
import "./UserSummary.scss";
import { User, UserService } from "../../services/user";

export function UserSummary() {
  const userService = new UserService();
  const [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { users } = await userService.getUsers();
      setUsers(users);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleGetSummary = () => {
    const summary = userService.getSummayDepartment(users);
    console.log("User summary data:", summary);
  };

  return (
    <>
      <p>User summary data is logged to the console</p>
      <button onClick={handleGetSummary}>
        Click here to view user summary
      </button>
    </>
  );
}
