import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProfitPage, { Loader as LoaderProfits } from "../pages/ProfitPage";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<ProfitPage />} loader={LoaderProfits} />
    </Route>
  )
);
