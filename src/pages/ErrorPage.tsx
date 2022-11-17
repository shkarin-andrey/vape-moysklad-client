import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error: any = useRouteError();

  return (
    <div className="flex justify-center">
      <h1>{error}</h1>
    </div>
  );
};

export default ErrorPage;
