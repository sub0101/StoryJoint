import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'
import { Routes, Route , createBrowserRouter , createRoutesFromElements , RouterProvider, Router, BrowserRouter} from 'react-router-dom';

import MainRouter from './MainRouter';
// import rout from "./Router.jsx"
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
 <BrowserRouter>

<Routes>
<Route path="/*" element={<MainRouter />} />

</Routes>

  </BrowserRouter>
</QueryClientProvider>

 
 

  
)
