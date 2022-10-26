import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, inputData, updateData } from "../redux/action";

function Form() {
  const dispatch = useDispatch();
  const obj = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  };
  const [input, setInput] = useState(obj);
  const [isEdit, setIsEdit] = useState(false);
  const data = useSelector((data) => data?.count?.data);
  const handaleDel = (id) => {
    const payload = {
      id: id,
    };
    dispatch(deleteItem(payload));
  };
  const handaleEdi = (el) => {
    setIsEdit(true);
    setInput(el);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleUpdate = () => {
    dispatch(updateData(input));
    setIsEdit(false);
  };

  const handleAdd = () => {
    dispatch(inputData(input));
  };
  return (
    <div>
      Form
      <table>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {data.map((el) => (
          <>
            <tr>
              <td>{el.id}</td>
              <td>{el.email}</td>
              <td>{el.first_name}</td>
              <td>{el.last_name}</td>

              <button onClick={() => handaleDel(el.id)}>Delete</button>
              <button onClick={() => handaleEdi(el)}>Edit</button>
            </tr>
          </>
        ))}
      </table>
      <div>
        <label>ID</label>
        <input
          name="id"
          value={input.id}
          onChange={handleChange}
          placeholder="Enter Your Id "
          disabled={isEdit}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Enter Your Email Id"
        />
        <br />
        <label>First Name</label>
        <input
          name="first_name"
          value={input.first_name}
          onChange={handleChange}
          placeholder=" Enter Your first Name"
        />
        <br />
        <label>Last Name</label>{" "}
        <input
          name="last_name"
          value={input.last_name}
          onChange={handleChange}
          placeholder=" Enter Your Last name"
        />
      </div>
      {isEdit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
    </div>
  );
}

export default Form;
