import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes/AppRoutes';

function App() {
	return (
		<>
			<Header />
			<main className="container px-4 py-5">
				<AppRoutes />
			</main>
			<Footer />
		</>
	);
}

export default App;