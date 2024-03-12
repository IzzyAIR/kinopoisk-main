import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from './filmsListSlice';
import { Box, CircularProgress, Grid } from '@mui/material';
import FilmCard from '../../Components/FilmCard/FilmCard';
import SearchAppBar from '../../Components/Header/Header';

const FilmsList = () => {
	const list = useSelector((state) => state.filmsList.list);
	const isLoading = useSelector((state) => state.filmsList.isLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFilms());
	}, [dispatch]);

	return (
		<>
			<SearchAppBar />
			{isLoading ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					}}
				>
					<CircularProgress />
				</Box>
			) : (
				<Grid
					container
					spacing={2}
					sx={{ p: 2, width: '70vw', margin: '0 auto', backgroundColor: '#FFFFFF' }}
				>
					{list?.map((item) => (
						<Grid key={item.filmId} item xs={12} sm={6} md={4}>
							<FilmCard film={item} />
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};

FilmsList.propTypes = {};

export default FilmsList;
