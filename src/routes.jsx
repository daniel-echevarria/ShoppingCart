import App from "./components/App/App";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
