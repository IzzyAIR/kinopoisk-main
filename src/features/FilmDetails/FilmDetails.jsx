/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { getStaff } from "./FilmDetailsAPI";
import { getFilmDetails } from "./filmDetailsSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const FilmDetails = () => {
  const details = useSelector((state) => state.filmDetails.details);
  const [staff, setStaff] = useState([]);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmDetails(params.id));
    fetchStaffData();
  }, [dispatch, params.id]);

  async function fetchStaffData() {
    try {
      const staffResponse = await getStaff(params.id);
      setStaff(staffResponse);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div style={{ padding: "10px 5%" }}>
      {details && (
        <>
          <Button
            variant="contained"
            onClick={handleBack}
            style={{ marginBottom: "10px", backgroundColor: "primary" }}
          >
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
            Back
          </Button>
          <h1 style={{ textAlign: "center" }}>{details.nameRu}</h1>
          <h5 style={{ textAlign: "center", marginTop: "-10px" }}>
            {details.slogan}
          </h5>
          <Grid container>
            <Grid item>
              <img
                src={details.posterUrlPreview}
                alt="green iguana"
                style={{ width: "90%", height: "auto" }}
              />
            </Grid>
            <Grid item>
              <h3>Название фильма: {details.nameRu}</h3>
              <h3>Год выпуска: {details.year}</h3>
              {details.genres?.map((item) => (
                <div key={item.genre}>
                  <h3>Жанры: {item.genre}</h3>
                </div>
              ))}
              {details.countries?.map((item) => (
                <div key={item.country}>
                  <h3>Страна: {item.country}</h3>
                </div>
              ))}

              <h3>Длительность фильма: {details.filmLength} мин</h3>

              <h3>Рейтинг фильма: {details.ratingKinopoisk}</h3>
            </Grid>
          </Grid>
          <h3 style={{ width: "1000px" }}>{details.description}</h3>
          <div>
            <br />
            <h1>Персонал:</h1>
            <Grid container spacing={2}>
              {staff.slice(0, 12).map((staffMember) => (
                <Grid item key={staffMember.id} xs={12} sm={6} md={4} lg={3}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="400px"
                      image={staffMember.posterUrl}
                      alt={`${staffMember.nameRu} Photo`}
                    />
                    <CardContent
                      sx={{
                        backgroundColor: "black",
                        color: "rgb(146, 146, 146)",
                      }}
                    >
                      <Typography variant="h6">{staffMember.nameRu}</Typography>
                      <Typography variant="h6">
                        {staffMember.professionKey}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </div>
  );
};

FilmDetails.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FilmDetails;
