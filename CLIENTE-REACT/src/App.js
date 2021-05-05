import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TareasList from './components/TareaList';
import CrearTarea from './components/CrearTarea';
import BorrarTarea from './components/BorrarTarea';
import TareasListHook from './components/TareaListHook'
import ActualizarTarea from "./components/ActualizarTarea";


function App() {
  return (
    <Router>
        <div>
			<div className="container">
			<h2>Tareas</h2>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link to="/" className="navbar-brand">Tareas App</Link>
					<div className="collpase navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/" className="nav-link">Tareas</Link>
							</li>
							<li className="navbar-item">
								<Link to="/crear" className="nav-link">Create Tarea</Link>
							</li>
							<li className="navbar-item">
								<Link to="/borrar" className="nav-link">Borrar Tarea</Link>
							</li>
							<li className="navbar-item">
								<Link to="/hook" className="nav-link">Hook</Link>
							</li>
							<li className="navbar-item">
								<Link to="/actualizar" className="nav-link">Actualizar</Link>
							</li>
						</ul>
					</div>
				</nav>
				<br />

				<Route exact path="/" component={TareasList} />
				<Route exact path="/crear" component={CrearTarea} />
				<Route exact path="/borrar" component={BorrarTarea} />
				<Route exact path='/hook' component={TareasListHook} />
				<Route exact path='/actualizar' component={ActualizarTarea} />
			</div>
		</div>
    </Router>
  );
}

export default App;
