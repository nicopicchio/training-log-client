import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Switch } from '@mui/material';

function ThemeSelector({ onThemeSelectorChange }) {
	return (
		<div className='theme-selector-container'>
			<LightModeIcon />
			<Switch onChange={onThemeSelectorChange} />
			<DarkModeIcon />
		</div>
	);
}

export default ThemeSelector;
