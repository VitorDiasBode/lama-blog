import {
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
