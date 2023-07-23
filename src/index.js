import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.css'
import '../src/styles2.css'

import App from './components/App';
import Result from './components/Result';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/result",
    element: <Result/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

// ReactDOM.render(<App/>, document.getElementById('root'));
