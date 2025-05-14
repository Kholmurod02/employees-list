
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import AddUser from './pages/add-user/add'
import UpdateUser from './pages/update-user/update'
import GetById from './pages/get-by-id/getById'
import Table from './components/table/table'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Table/>
      },
      {
        path: "/addUser",
        element: <AddUser />
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser />
      },
      {
        path: "/getUserById/:id",
        element:<GetById/>
      }
    ]
  }])

function App() {



  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
