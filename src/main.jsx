import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { LoadScript } from '@react-google-maps/api'

// Components / Pages
import App from './App.jsx'
import CreateTrip from './create-trip/index.jsx'
import Viewtrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from './components/ui/sonner.jsx'

// Layout wrapper → adds Header + Toaster on every page
function Layout({ children }) {
  return (
    <>
      <Header />
      <Toaster />
      {children}
    </>
  )
}

// Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/create-trip',
    element: (
      <Layout>
        <CreateTrip />
      </Layout>
    ),
  },
  {
    path: '/view-trip/:tripId',
    element: (
      <Layout>
        <Viewtrip />
      </Layout>
    ),
  },
  {
    path: '/my-trips',
    element: (
      <Layout>
        <MyTrips />
      </Layout>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={['places']} // important for autocomplete
      >
        <RouterProvider router={router} />
      </LoadScript>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
