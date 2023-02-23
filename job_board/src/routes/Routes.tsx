import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { RouteTypes } from "../types/routes";
import { routes } from "./consts";

const Routes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }: RouteTypes) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
