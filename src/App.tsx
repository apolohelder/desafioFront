import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes/AppRoutes';

function App() {
	return (
		<>
			<Header />
			<main className="container px-md-4 py-4 py-md-5">
				<AppRoutes />
			</main>
			<Footer />
		</>
	);
}

export default App;