import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { SalonPage } from "../salonApp/pages/SalonPage";
import { RegisterPage } from "../auth/pages/RegisterPage";

export const AppRouter = () => {
  // eslint-disable-next-line no-unused-vars
  const authStatus = "not-authenticated";
  //  const authStatus = "authenticated";
  return (
    <Routes>
      {/* {authStatus == "not-authenticated" ? (
        <Route path="/auth/login" element={<LoginPage />} />
      ) : (
    )} */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      {/* <Route path="/*" element={<SalonPage />} /> */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
