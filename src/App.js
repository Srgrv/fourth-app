import "./App.css";
// import Main from "./UI/pages/Main/Main";
import Layout from "./UI/layout/Layout";
import { Routes, Route } from "react-router-dom";
import CollobaratesContainer from "./UI/pages/Collobarates/CollobaratesContainer/CollobaratesContainer";
import MainContainer from "./UI/pages/Main/MainContainer/MainContainer";
import LoginContainer from "./UI/pages/Login/LoginContainer";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "./hoc/withRouter";
import { initialize } from "./BLL/appReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    console.log(this.props.initial);
    if (!this.props.initial) {
      return <div>Hello</div>;
    }
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
}

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<MainContainer />} />
//           <Route path="/:id" element={<MainContainer />} />
//           <Route path="collobarate/" element={<CollobaratesContainer />} />
//           <Route path="messages/" element={<CollobaratesContainer />} />
//           <Route path="subscribtions/" element={<CollobaratesContainer />} />
//           <Route path="bookmark/" element={<CollobaratesContainer />} />
//           <Route path="communities/" element={<CollobaratesContainer />} />
//           <Route path="login/" element={<LoginContainer />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    initial: state.app.initial,
  };
};

export default withRouter(connect(mapStateToProps, { initialize })(App));
