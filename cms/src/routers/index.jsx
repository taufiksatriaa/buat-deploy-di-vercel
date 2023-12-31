import { createBrowserRouter, redirect } from "react-router-dom";
import HomeCms from "../../views/Home";
import AddProduct from "../../views/FormAddProduct";
import Login from "../../views/login";
import AddUser from "../../views/AddUser";
import CategoryHome from "../../views/CategoryTable";

import EditProduct from "../../views/FormEditProduct";
import EditImage from "../../views/EditImagePage";

const router = createBrowserRouter([
  {
    path: "*",
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/");
      }
      return null;
    },
    path: "/login",
    element: <Login />,
  },
  {
    loader: ({ navigate }) => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        navigate("/login");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <HomeCms />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
  {
    path: "/:productId",
    element: <EditProduct />,
  },
  {
    path: "/:productId/editImage",
    element: <EditImage />,
  },
  {
    path: "/add-user",
    element: <AddUser />,
  },
  {
    path: "/category",
    element: <CategoryHome />,
  },
]);

export default router;
