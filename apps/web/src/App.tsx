/* @refresh reload */
import { render } from 'solid-js/web';
import { AppProviders } from './providers';
import IndexPage from './routes';

function App() {
	return (
		<AppProviders>
			<IndexPage />
		</AppProviders>
	);
}

render(() => <App />, document.getElementById('root') as HTMLElement);
