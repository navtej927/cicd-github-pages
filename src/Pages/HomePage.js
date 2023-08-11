import React from "react";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const usersState = useSelector((state) => state.users);
  return (
    <>
      <div className="users-list">
        {usersState.users.map((_user) => {
          return <div>{_user.name}</div>;
        })}
      </div>
    </>
  );
};
