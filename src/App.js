import { RouterProvider,} from 'react-router-dom';
import './App.css';
import { router } from './router/Router/Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {

 

  return (
    <div data-theme="light" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
