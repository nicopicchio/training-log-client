import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Switch } from '@mui/material';

function ThemeSelector() {

  const handleSwitch = (e) => {
		console.log(e.target.checked)
	}

	return (
		<div className='theme-selector'>
			<LightModeIcon />
			<Switch onChange={handleSwitch}/>
			<DarkModeIcon />
		</div>
	);
}

export default ThemeSelector;
