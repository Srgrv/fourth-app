import "./App.css";
import Main from "./UI/pages/Main/Main";
import Layout from "./UI/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Collobarate from "./UI/components/Collobarate/Collobarate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="collobarate/" element={<Collobarate />} />
          <Route path="messages/" element={<Collobarate />} />
          <Route path="subscribtions/" element={<Collobarate />} />
          <Route path="bookmark/" element={<Collobarate />} />
          <Route path="communities/" element={<Collobarate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
