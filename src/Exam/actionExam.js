import {
  ADDITEM,
  CHANGEPATH,
  DELETEITEM,
  EDITDATA,
  UPDATEDATA,
} from "./typeExam";

export const deleteItem = (payload) => {
  return {
    type: DELETEITEM,
    payload,
  };
};
export const changePath = (payload) => {
  return {
    type: CHANGEPATH,
    payload,
  };
};
export const addItem = (payload) => {
  return {
    type: ADDITEM,
    payload,
  };
};
export const editItem = (payload) => {
  return {
    type: EDITDATA,
    payload,
  };
};
export const updateData = (payload) => {
  return {
    type: UPDATEDATA,
    payload,
  };
};
