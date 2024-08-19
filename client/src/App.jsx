import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./views/homepages";
import ListSamples from "./views/list_sample/list_sample";
import SimpleWallet from "./views/list_sample/contract/simple_wallet";
import CoverList from "./views/list_sample/cover_list";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePages />,
      children: [
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
    <RouterProvider router={router} />
  );
}

export default App;
