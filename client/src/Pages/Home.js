import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import EducationSection from "../Components/EducationSection";
import AboutSection from "../Components/AboutSection";
import ProjectSection from "../Components/ProjectSection";
const Home = () => {
  return (
    <div style={{}}>
      Hero Section Component
      <Divider />
      <AboutSection />
      <Divider />
      <ProjectSection />
      <Divider />
      <EducationSection />
      <Divider />
      Extra stuff Section Component
      <Divider />
    </div>
  );
};

export default Home;
