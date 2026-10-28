import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./pages/index";
import CreateAccount from "./pages/create-account";
import UserAccountInfo from "./pages/user-account";
import Service from "./pages/service";
import Logout from "./pages/logout";
import ResetPasswordComponent from "./components/ResetPasswordComponent";
import SendRequestResetPasswordComponent from "./pages/send-reset-password";
import { MenuProvider } from "./context/MenuContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MenuProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/create-account" element={<CreateAccount />} />
              <Route exact path="/service" element={<Service />} />
              <Route exact path="/user-account" element={<UserAccountInfo />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route path="/reset-password/:uid/:token" element={<ResetPasswordComponent />} />
              <Route path="/send-reset-password-request" element={<SendRequestResetPasswordComponent />} />
            </Routes>
          </Layout>
        </MenuProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
