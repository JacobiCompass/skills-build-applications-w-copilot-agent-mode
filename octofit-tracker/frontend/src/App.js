import './App.css';
import { HashRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <HashRouter>
      <header className="bg-dark text-light py-3 mb-4">
        <div className="container d-flex align-items-center">
          <img src="/octofitapp-small.png" alt="Logo" style={{ height: 40, marginRight: 12 }} />
          <h1 className="h4 mb-0">Octofit Tracker</h1>
        </div>
      </header>
      <nav className="mb-4">
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item"><NavLink className="nav-link" to="/activities">Atividades</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Ranking</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/teams">Times</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">Usuários</NavLink></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Bem-vindo ao Octofit Tracker!</h2>
                <p className="card-text">Acompanhe suas atividades, equipes, treinos e mais!</p>
                <Link className="btn btn-success" to="/activities">Ver Atividades</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </HashRouter >
  );
}

export default App;
