import {
  createBrowserRouter,
  RouteProvider,
  Route
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";

const router = createBrowserRouter([
  {
    path: "/",
    
  }
]);

function App() {
  return <div>Ola Mundo!</div>;
}

export default App;
