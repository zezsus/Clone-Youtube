import "./style/App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginscreen/LoginScreen";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !loading) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate]);
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
