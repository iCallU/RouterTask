import './App.css';
import { HealthDataContextWrapper } from './context/health-data-context';
import EditHealthData from './component/EditHealthData/EditHealthData';
import MainComponent from './component/MainComponent/MainComponent';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import ViewHealthData from './component/ViewHealthData/ViewHealthData';
import RootComp from './RootComp/RootComp';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComp /> ,
    children:[
      {
        path: '/home',
        element: <HomePage /> 
      },
      {
        path: '/show',
        element: <ShowHealthData />
      },
      {
        path: '/edit',
        element: <EditHealthData/>
      },
      {
        path: '/view',
        element: <ViewHealthData />
      },
      
    ]
  }
  
]);



function App() {


  return (
    <HealthDataContextWrapper>
      
       <RouterProvider router={router} />
      {/* <MainComponent /> */}
    </HealthDataContextWrapper>

  );
}

export default App;
