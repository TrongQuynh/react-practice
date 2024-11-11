import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router'
import { AppRoutes } from 'src/setup/routers/Routes'
import { AuthProvider } from './setup/authentication/AuthProvider'
import {} from "react-router-dom"
import { Home } from './pages/home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
 // <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRoutes}/>
        {/* <Home /> */}
      </QueryClientProvider>
    </AuthProvider>
  //</StrictMode>,
)