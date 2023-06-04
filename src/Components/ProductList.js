let ProductList = (props) => {
  return (
    <div>
      {props.userList.map((user, index) => {
        return (
          <ul>
            <li key={index}>
              {user.name} {user.desc}{" "}
              <button onClick={() => props.removeUser(user.id)}>Delete</button>
              <button onClick={() => props.EditUser(user.id)}>Edit</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductList;
