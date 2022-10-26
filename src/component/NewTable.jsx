import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFormData, editData } from "../redux/action";

function NewTable() {
  //   const editData = useSelector((el) => el.editData);
  const dispatch = useDispatch();

  const data = useSelector((el) => el?.count?.formData);

  const handleDelete = (el) => {
    dispatch(deleteFormData(el));
  };
  const handleEdit = (el) => {
    // setStatus(true);
    // setDatas([editData]);

    dispatch(editData(el));
  };
  return (
    <div>
      NewTable
      <table>
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Agree</th>
        </tr>
        {data?.map((el) => (
          <>
            <tr>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.age}</td>
              <td>{el.mobile}</td>
              <td>{el.agree ? "YES" : "NO"}</td>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
              <button onClick={() => handleEdit(el)}>Edit</button>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default NewTable;
