import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//csss
import './styles/index.css';
import './styles/mainFont.css';

//routes
import RoutesSystem from './routes/RoutesSystem';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={RoutesSystem} />
  </StrictMode>
);
