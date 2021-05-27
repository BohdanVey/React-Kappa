import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Button, Container, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

// import TodoCard from "../TodoCard";
import Test from "../Test";

const Content = ({ filterType }) => {
  // eslint-disable-next-line no-unused-vars

  const items = [
    {
      id: 1,
      title: "title1",
      description: "description1",
      type: "personal",
    },
    {
      id: 2,
      title: "title2",
      description: "description2",
      type: "work",
    },
    {
      id: 3,
      title: "title3",
      description: "description3",
      type: "study",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={handleClickOpen}
          >
            Add
          </Button>
    </ Container>
  );
};

export default Content;