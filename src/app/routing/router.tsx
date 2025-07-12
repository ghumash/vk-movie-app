import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@/pages/home'
import FavoritesPage from '@/pages/favorites'
import DetailsPage from '@/pages/details'
import ErrorPage from '@/pages/error'
import AppLayout from '@/widgets/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'movie/:id', element: <DetailsPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
