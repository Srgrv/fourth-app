import "./App.css";
import Main from "./UI/pages/Main/Main";
import Layout from "./UI/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Collobarates from "./UI/pages/Collobarates/Collobarates";
import CollobaratesContainer from "./UI/pages/Collobarates/CollobaratesContainer/CollobaratesContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="collobarate/" element={<CollobaratesContainer />} />
          <Route path="messages/" element={<CollobaratesContainer />} />
          <Route path="subscribtions/" element={<CollobaratesContainer />} />
          <Route path="bookmark/" element={<CollobaratesContainer />} />
          <Route path="communities/" element={<CollobaratesContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
