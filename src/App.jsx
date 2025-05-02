import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./page/Home";
import CreateCategory from "./components/CreateCategory";
import CategoryList from "./components/CategoryList";
import UpdateCategory from "./components/UpdateCategory";
import CreateProduct from "./components/CreateProduct";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      children: [
        { path: "/createCategory", Component: CreateCategory },
        { path: "/createProduct", Component: CreateProduct },
        { path: "/categoryList", Component: CategoryList },
        { path: "/updateCategory/:id", Component: UpdateCategory },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App