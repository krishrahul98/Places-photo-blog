import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rahul Krishna",
      image: "https://krishrahul98.me/images/rahul.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
