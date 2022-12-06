import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
