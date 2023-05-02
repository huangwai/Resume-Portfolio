import React from "react";
import projects from "../Assets/Projectss/Projects";
import { Typography } from "@mui/material";
const ProjectSection = () => {
  return (
    <div>
      {projects.map((item) => (
        <Typography>{item.name}</Typography>
      ))}
    </div>
  );
};

export default ProjectSection;
