import { GlobalStyles } from './GlobalStyles';
import {
	Routes,
	Route,
} from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Overview from './Pages/Overview';
import Metric from './Pages/Metric';
import Credentials from './Pages/Credentials';


function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route exact path ='/' element={<SignIn/>}></Route>
        <Route exact path='/overview' element={<Overview/>}></Route>
        <Route exact path='/metric' element={<Metric/>}></Route>
        <Route exact path='/credential' element={<Credentials/>}></Route>
      </Routes>
    </>
  );
}

export default App;
