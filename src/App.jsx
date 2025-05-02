import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./page/Home";
import CreateCategory from "./components/CreateCategory";
import CategoryList from "./components/CategoryList";
import UpdateCategory from "./components/UpdateCategory";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      children: [
        { path: "/createCategory", Component: CreateCategory },
        { path: "/categoryList", Component: CategoryList },
        // { path: "/editCategories", Component: EditCategories },
        { path: "/updateCategory", Component: UpdateCategory },
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