import { StrictMode } from "react";
import "./index.css";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePages from "./views/homepages";
import ListSamples from "./views/list_sample/list_sample";
import SimpleWallet from "./views/list_sample/contract/simple_wallet";
import CoverList from "./views/list_sample/cover_list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "list_sample",
        element: <ListSamples />,
      },
      {
        path: "cover_list",
        element: <CoverList />,
        children: [
          {
            path: "simple_wallet",
            element: <SimpleWallet />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
