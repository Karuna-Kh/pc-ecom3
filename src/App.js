import {
  createBrowserRouter as Router,
  createRoutesFromElements as RouteEle,
  Route,
  RouterProvider as RouterProv,
} from 'react-router-dom';

import Navbar from './layouts/Navbar/Navbar';
import Index from './layouts/Index/Index';
import Admin from './components/Admin';
import Laptop from './components/Laptop'; 
import Desktop from './components/Desktop';
import Gaming from './components/Gaming';
import Peripheral from './components/Peripheral'; 
import PcBuilder from './components/PcBuilder';
import Contact from './components/Contact';
import Footer from './layouts/Footer/Footer';

function App() {
  const router = Router(
    RouteEle(
      <Route path='/' element={<Navbar />} >
        <Route path='/' element={<Index />} />    
        <Route path='/' element={<Footer />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/desktop' element={<Desktop />} />
        <Route path='/gaming' element={<Gaming />} />
        <Route path='/peripheral' element={<Peripheral />} />
        <Route path='/pcbuilder' element={<PcBuilder />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    ) 
  );

  return (
    <div className='w-full'>      
      <RouterProv router={router} />  
    </div>   
  )  
};

export default App;
