import "./style/App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginscreen/LoginScreen";

import { Routes, Route } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <div className="app-containe d-flex">
        <Sidebar />
        <Container fluid className="app-main">
          {children}
        </Container>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
