import Products from "@/pages/products/Products.tsx";
import {ProtectedRoute} from "@/shared/routes/ProtectedRoute.tsx";
import {PublicRoute} from "@/shared/routes/PublicRoute.tsx";
import {Route, Routes} from "react-router-dom";
import NotFound from "@/app/NotFound.tsx";
import Auth from "@/pages/auth/Auth.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"*"} element={<NotFound/>}/>
      <Route path={"/items"} element={(<ProtectedRoute><Products/></ProtectedRoute>)}/>
      <Route path={"/"} element={<PublicRoute><Auth/></PublicRoute>}/>
    </Routes>
  );
};

export default AppRouter;