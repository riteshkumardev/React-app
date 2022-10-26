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

const int = {
  count: 0,
  filterdata: [],
  formData: [],
  editData: {},
  isEdit: false,
  data: [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ],
};
export const changeCount1 = (state = int, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    case DELETEITEM:
      const filter = state.data.filter((el) => el.id !== payload.id);
      return {
        ...state,
        data: filter,
      };
    case EDITITEM:
      return {
        ...state,
        edit: payload.el,
      };
    case INPUTDATA:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case UPDATEDATA:
      return {
        ...state,
        data: state.data.map((el) => (el.id === payload.id ? payload : el)),
      };
    case INPUTFORMDATA:
      return {
        ...state,
        formData: [...state.formData, payload],
      };
    case DELETEFORMDATA:
      return {
        ...state,
        formData: state.formData.filter((el) => el.id !== payload),
      };
    case EDITDATA:
      return {
        ...state,
        editData: payload,
        isEdit: true,
      };

    case UPDATE_DATA:
      console.log(payload);
      return {
        ...state,
        formData: state.formData.map((item) =>
          item.id === payload.id ? payload : item
        ),
        editData: {},
      };
    default:
      return state;
  }
};
