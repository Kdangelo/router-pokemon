import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
