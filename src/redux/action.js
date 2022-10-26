import {
  DECREMENT,
  DELETEFORMDATA,
  DELETEITEM,
  EDITDATA,
  EDITITEM,
  INCREMENT,
  INPUTDATA,
  INPUTFORMDATA,
  UPDATEDATA,
  UPDATE_DATA,
} from "./type";

export const handleInc = () => {
  return {
    type: INCREMENT,
    payload: 1,
  };
};
export const handleDec = () => {
  return {
    type: DECREMENT,
    payload: 1,
  };
};
export const deleteItem = (payload) => {
  return {
    type: DELETEITEM,
    payload: payload,
  };
};
export const editItem = (payload) => {
  return {
    type: EDITITEM,
    payload: payload,
  };
};
export const inputData = (payload) => {
  return {
    type: INPUTDATA,
    payload,
  };
};
export const updateData = (payload) => {
  return {
    type: UPDATEDATA,
    payload,
  };
};
export const inputFormDta = (payload) => {
  return {
    type: INPUTFORMDATA,
    payload,
  };
};
export const deleteFormData = (payload) => {
  return {
    type: DELETEFORMDATA,
    payload,
  };
};
export const editData = (payload) => {
  return {
    type: EDITDATA,
    payload,
  };
};

export const updatedData = (payload) => {
  console.log(payload);
  return {
    type: UPDATE_DATA,
    payload,
  };
};
