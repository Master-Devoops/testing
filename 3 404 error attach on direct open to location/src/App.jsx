import { Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;