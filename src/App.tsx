
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/map';
import Add from './pages/add';
import Reset from './pages/reset';
import Form from './pages/form';

function App() {

  return (
    <BrowserRouter basename='/gps-test/'>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/add" element={<Add />} />
        <Route path="/form/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
