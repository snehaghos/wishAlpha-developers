import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import { Dashboard } from "../modules/dashboard";
import { DeveloperProfile, UpdateProfile } from "../modules/DeveloperProfile";
import { CreateProject, Projects } from "../modules/Project";
import Developers from "../modules/Developers";
import { Settings } from "../modules/Settings";
import Games from "../components/Games/Games";

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/profile" element={<DeveloperProfile/>} />
          <Route path="/update-profile" element={<UpdateProfile />} />

          <Route path="/create-project" element={<CreateProject />} />

          <Route path="/developers" element={<Developers/>} />
          <Route path="/setting" element={<Settings/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/projects" element={<Projects/>} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthRouter;
