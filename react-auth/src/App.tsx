import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route
          path="/auth"
          element={
            <ProtectedRoutes>
              <AuthComponent />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;