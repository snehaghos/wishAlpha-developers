import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import GuestRouter from "./GuestRouter";

const PlayGroundRouter = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {token ? (
          <Route path="/*" element={<AuthRouter />} />
        ) : (
          <Route path="/*" element={<GuestRouter />} />
        )}
      </Routes>
    </>
  );
};

export default PlayGroundRouter;
