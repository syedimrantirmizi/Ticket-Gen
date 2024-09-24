import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Ticket from './components/Ticket';
import CreateTicket from './components/CreateTicket';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/ticket/:id',
      element: <Ticket />,
    },
    {
      path: '/createticket',
      element: <CreateTicket />,
    },
  ]);
  
  return (
    <>
      <div>
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
