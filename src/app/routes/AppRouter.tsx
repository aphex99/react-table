import {Route, Routes} from "react-router-dom";

import Products from "@/pages/products/ui/Products.tsx";
import Auth from "@/pages/auth/ui/Auth.tsx";
import {ProtectedRoute} from "@/shared/routes/ProtectedRoute.tsx";
import {PublicRoute} from "@/shared/routes/PublicRoute.tsx";

import NotFound from "../ui/not-found/NotFound.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<PublicRoute><Auth/></PublicRoute>}/>
      <Route path={"/items"} element={(<ProtectedRoute><Products/></ProtectedRoute>)}/>
      <Route path={"*"} element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRouter;