import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputFormDta, updatedData } from "../redux/action";
import { v4 as uuid } from "uuid";

function NewForm() {
  const dispatch = useDispatch();
  const selectedToEdit = useSelector((state) => state?.count?.editData);
  const isEdit = useSelector((state) => state?.count?.isEdit);

  const obj = {
    name: "",
    email: "",
    age: "",
    mobile: "",
    agree: false,
    id: uuid(),
  };

  const [inputData, setInputData] = useState(isEdit ? selectedToEdit : obj);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setInputData({ ...inputData, [name]: value, agree: checked });
  };
  const handleAdd = () => {
    dispatch(inputFormDta(inputData));
    setInputData(obj);
  };

  const handleUpdate = () => {
    dispatch(updatedData(inputData));
  };

  return (
    <div>
      NewForm
      <input
        name="name"
        placeholder="Enter Your Name"
        value={inputData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Enter Your Email"
        value={inputData.email}
        onChange={handleChange}
        type="email"
      />
      <input
        name="age"
        placeholder=" Enter Your Age "
        value={inputData.age}
        onChange={handleChange}
        type="number"
      />
      <input
        name="mobile"
        placeholder="Enter Your Mobile"
        value={inputData.mobile}
        onChange={handleChange}
        type="number"
      />
      <input
        name="Agree"
        value={inputData.agree}
        onChange={handleChange}
        type="checkbox"
      />
      <button
        onClick={() => {
          isEdit ? handleUpdate() : handleAdd();
        }}
      >
        {isEdit ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
}

export default NewForm;
