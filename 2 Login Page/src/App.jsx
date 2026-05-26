import { Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;