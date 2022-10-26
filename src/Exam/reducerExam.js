import {
  ADDITEM,
  CHANGEPATH,
  DELETEITEM,
  EDITDATA,
  UPDATEDATA,
} from "./typeExam";

const init = {
  handleChange: false,

  editData: {},
  isEdit: false,
  tableData: [
    {
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
    },
  ],
};
export const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDITEM:
      return {
        ...state,
        tableData: [...state.tableData, payload],
        handleChange: false,
      };
    case CHANGEPATH:
      return {
        ...state,
        handleChange: payload.handleChange,
      };
    case EDITDATA:
      return {
        ...state,
        editData: payload,
        isEdit: true,
      };
    case UPDATEDATA:
      return {
        ...state,
        tableData: state.tableData.map((el) =>
          el.recid === payload.recid ? payload : el
        ),
        isEdit: false,
      };

    case DELETEITEM:
      console.log(state.tableData.filter((el) => el.recid !== payload));
      return {
        ...state,
        tableData: state.tableData.filter((el) => el.recid !== payload),
      };
    default:
      return {
        ...state,
      };
  }
};
