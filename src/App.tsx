import { Routes, Route } from 'react-router-dom';
import IntroCard from './pages/IntroCard';
import Resume from './pages/Resume';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<IntroCard/>}/>
        <Route path='/jakin-resume' element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
