import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateData } from "./actionExam";
import styles from "./Navbar.module.css";
function Form() {
  const dispatch = useDispatch();
  const { editData, isEdit } = useSelector((el) => el.Data);
  const obj = {
    name: 12,
    stationnum: 1,
    port: 12,
    prtype: "ADVANTAGE",
    height: 12,
    width: 12,
    linetonext: 12,
    printbar: "Y",
    printname: "Y",
    printtest: "Y",
    pins: "BAR128C",
    extra: 12,
    checksum: "Y",
    skip: "Y",
    indent: 12,
    in2: "O",
    filler: "",
    recid: 29,
  };
  const [input, setInput] = useState(isEdit ? editData : obj);
  console.log(input);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleAdd = (e) => {
    dispatch(addItem(input));
    e.preventDefault();
  };
  const handleUpate = () => {
    dispatch(updateData(input));
  };

  return (
    <div>
      <h3 className={styles.formH3}> Form Data</h3>
      <div className={styles.form}>
        <label>
          Name
          <input
            type="number"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Stationnum
          <input
            type="number"
            name="stationnum"
            value={input.stationnum}
            onChange={handleChange}
          />
        </label>

        <label>
          Port
          <input
            type="number"
            name="port"
            value={input.port}
            onChange={handleChange}
          />
        </label>
        <label>
          Prtype
          <select name="prtype" onChange={handleChange}>
            <option value="ADVANTAGE">ADVANTAGE</option>
            <option value="DISADVANTAGE">DISADVANTAGE</option>
          </select>
        </label>
        <label>
          Height
          <input
            type="number"
            name="height"
            value={input.width}
            onChange={handleChange}
          />
        </label>
        <label>
          Width
          <input
            type="number"
            name="width"
            value={input.width}
            onChange={handleChange}
          />
        </label>
        <label>
          Linetonext
          <input
            type="number"
            name="linetonext"
            value={input.linetonext}
            onChange={handleChange}
          />
        </label>
        <label>
          Printbar
          <select name="printbar">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Printname
          <select name="printname">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Printtest
          <select name="printtest">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Pins
          <input name="pins" value={input.pins} onChange={handleChange} />
        </label>
        <label>
          Extra
          <input name="extra" value={input.extra} onChange={handleChange} />
        </label>
        <label>
          Checksum
          <select name="checksum">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Skip
          <select name="skip">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Indent
          <input
            type="number"
            name="indent"
            value={input.indent}
            onChange={handleChange}
          />
        </label>
        <label>
          In2
          <select name="in2">
            <option value="O">O</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="A">A</option>
          </select>
        </label>
        <label>
          Printtest
          <select name="printtest">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Filler
          <input name="filler" value={input.filler} onChange={handleChange} />
        </label>
        <label>
          Recid
          <input
            type="number"
            name="recid"
            value={input.recid}
            onChange={handleChange}
          />
        </label>
      </div>
      <button
        className={styles.addBtnForm}
        onClick={isEdit ? handleUpate : handleAdd}
      >
        {isEdit ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default Form;
