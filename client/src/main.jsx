import { StrictMode } from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePages from "./views/homepages";
import ListSamples from "./views/list_sample/list_sample";
import CoverList from "./views/list_sample/cover_list";
import PublicWallet from "./views/list_sample/contract/public_wallet";
import PrivateWallet from "./views/list_sample/contract/private_wallet";

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
            path: "public_wallet",
            element: <PublicWallet />,
          },
          {
            path: "private_wallet",
            element: <PrivateWallet />,
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
