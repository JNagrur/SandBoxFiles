import React from "react";
import ProductList from "./ProductList";

let Product = () => {
  let initials = {
    id: 0,
    name: "",
    desc: ""
  };

  let [user, setUser] = React.useState({ ...initials });
  let [userList, setUserList] = React.useState([]);
  let [editUser, setEditUser] = React.useState({ ...initials });
  let [id, setId] = React.useState(-1);
  let handleInput = (event) => {
    let { name, value } = event.target;
    let _user = { ...user };
    _user[name] = value;
    setUser(_user);
  };

  let userAdd = (e) => {
    e.preventDefault();
    user.id = Date.now();
    let _userList = [...userList];
    _userList.push({ ...user });
    setUserList(_userList);
    setUser({ ...initials });
  };
  let removeUser = (id) => {
    let delIndex = userList.findIndex((user) => {
      return user.id === id;
    });
    if (delIndex >= 0) {
      let _userList = [...userList];
      _userList.splice(delIndex, 1);
      setUserList(_userList);
    }
  };

  let EditUser = (id) => {
    let edituser = userList.find((user) => {
      return user.id === Number(id);
    });
    if (edituser !== undefined) {
      setEditUser(editUser);
    }
  };
  return (
    <>
      <form onSubmit={userAdd}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInput}
          placeholder="enter name"
        />
        <input
          type="text"
          name="desc"
          value={user.desc}
          onChange={handleInput}
          placeholder="enter desc"
        />

        <button>submit</button>
      </form>

      <ProductList
        userList={userList}
        removeUser={removeUser}
        EditUser={EditUser}
      />
    </>
  );
};
export default Product;
