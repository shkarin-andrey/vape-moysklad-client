import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Routers/Routers";

const App: FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
