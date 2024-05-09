import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ReactComponent as SuccessImg } from "../assets/images/icon-success.svg";
import { useSuccessStyles } from "../styles/sucess.styles";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { emailState } from "../state/emailAtom";

const Success: React.FC = () => {
  const navigate = useNavigate();
  const { classes } = useSuccessStyles();

  const emailAddress = useRecoilValue(emailState);

  const handleDismissBtn = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.successPage}
      justifyContent={"center"}
      gap={"2em"}
    >
      <Grid item>
        <SuccessImg />
      </Grid>
      <Grid item>
        <Typography variant="h2">Thanks for subscribing!</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          A confirmation email has been sent to <b>{emailAddress}</b>. Please
          open it and click the button inside to confirm your subscription
        </Typography>
      </Grid>
      <Grid item marginTop={"auto"}>
        <Button
          className={classes.dismissBtn}
          fullWidth
          onClick={handleDismissBtn}
        >
          <Typography variant="subtitle2">Dismiss message</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Success;
