// import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Form from "./Exam/Form";
// import NewForm from "./component/NewForm";
// import NewTable from "./component/NewTable";
// import Api from "./componnent/Api";
// import Counter from "./componnent/Counter";
// import Form from "./componnent/Form";
// import Nav from "./componnent/Nav";
// import Todo from "./componnent/Todo";
// import Exam from "./Exam/Exam";
import Navbar from "./Exam/Navbar";
import Table from "./Exam/Table";

function App() {
  const { handleChange, isEdit } = useSelector((el) => el?.Data);
  console.log(handleChange, "handleChange");
  return (
    <nav style={{ textAlign: "center" }}>
      <Navbar />
      {handleChange || isEdit ? <Form /> : <Table />}

      {/* <Routes> */}
      {/* <Route path="/" element={isEdit ? <Form /> : <Table />} /> */}

      {/* <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/api" element={<Api />} />
        <Route path="/form" element={<Form />} />
        <Route path="/newForm" element={<NewForm />} />
        <Route path="/table" element={<NewTable />} />
        <Route path="/exam" element={<Exam />} /> */}
      {/* </Routes> */}
    </nav>
  );
}

export default App;
