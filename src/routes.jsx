import App from "./components/App/App";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "shop", element: <Shop /> },
      { path: "home", element: <Home /> },
    ],
  },
];

export default routes;
