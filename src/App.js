import "./App.css";
// import Main from "./UI/pages/Main/Main";
import Layout from "./UI/layout/Layout";
import { Routes, Route } from "react-router-dom";
import CollobaratesContainer from "./UI/pages/Collobarates/CollobaratesContainer/CollobaratesContainer";
import MainContainer from "./UI/pages/Main/MainContainer/MainContainer";
import LoginContainer from "./UI/pages/Login/LoginContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContainer />} />
          <Route path="/:id" element={<MainContainer />} />
          <Route path="collobarate/" element={<CollobaratesContainer />} />
          <Route path="messages/" element={<CollobaratesContainer />} />
          <Route path="subscribtions/" element={<CollobaratesContainer />} />
          <Route path="bookmark/" element={<CollobaratesContainer />} />
          <Route path="communities/" element={<CollobaratesContainer />} />
          <Route path="login/" element={<LoginContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
