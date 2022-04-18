import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

import { FlatDetails } from "./Flatdata";
import { LoginPage } from "./Auth";

export const AllRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/flats/:id" element={<FlatDetails />} />
      </Routes>
    </>
  );
};
