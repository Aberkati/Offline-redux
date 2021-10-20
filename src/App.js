import { useSelector } from 'react-redux';
import { Upload } from './components/Upload';
import ThemeMenu from './thememenu/ThemeMenu';

const App = () => {
	let themeReducer = useSelector((state) => state.Theme.mode);
	let colorMode = useSelector((state) => state.Theme.color);
	return (
		<div
			style={{
				backgroundColor:
					themeReducer === 'theme-mode-dark' ? '#3d3838' : 'white',
				height: '100vh',
			}}
		>
			<ThemeMenu />
			<Upload />
		</div>
	);
};

export default App;
