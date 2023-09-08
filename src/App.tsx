import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formpage from './pages/Formpage';
import Previewpage from './pages/Previewpage';
import Resultpage from './pages/Resultpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formpage />} />
        <Route path="/preview" element={<Previewpage />} />
        <Route path="/result" element={<Resultpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
