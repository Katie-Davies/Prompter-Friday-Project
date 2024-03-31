import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Auth0Provider } from '@auth0/auth0-react'

import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="harakeke24-haruka.au.auth0.com"
      clientId="15rwO6QapkZepRZZknkipTutGuwmXLWH"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://prompter/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
