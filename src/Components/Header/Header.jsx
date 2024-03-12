import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { InputAdornment, TextField } from '@mui/material';
// import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { getFilmBySearch, getFilms } from '../../features/FilmsList/filmsListSlice';
import { Clear } from '@mui/icons-material';

export default function SearchAppBar() {
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(getFilmBySearch(search));
	};

	const handleClear = async () => {
		dispatch(getFilms());
		setSearch('');
	};

	return (
		<Box sx={{ flexGrow: 1, position: 'relative', width: '70vw', margin: '0 auto' }}>
			<AppBar
				position='static'
				sx={{
					backgroundColor: '#1a1a1a',
					color: 'white',
				}}
			>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ p: '8px', mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						KINOPOISK
					</Typography>

					<form onSubmit={handleSubmit}>
						<TextField
							sx={{
								position: 'absolute',
								transform: 'translate(-50%,-50%)',
								left: '50%',
								top: '50%',
							}}
							placeholder='Напишите фильм'
							value={search}
							onChange={handleSearchChange}
							InputProps={{
								sx: {
									color: 'white',
								},
								endAdornment: (
									<InputAdornment>
										<IconButton type='submit' sx={{ color: 'white' }}>
											<SearchIcon />
										</IconButton>
										<IconButton
											sx={{ color: 'white' }}
											type='button'
											onClick={handleClear}
										>
											<Clear />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</form>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
