import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { ReactComponent as IllustrationSignUpMobile } from "../assets/images/illustration-sign-up-mobile.svg";
import { ReactComponent as IllustrationSignUpDesktop } from "../assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as BulletIcon } from "../assets/images/icon-list.svg";

import { IUpdate } from "../interfaces";

import EmailInput from "../components/EmailInput";
import { useHomeStyles } from "../styles/home.styles";
import { homePageText } from "../config/home.config";

const Home: React.FC = () => {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes } = useHomeStyles();
  return (
    <Grid
      container
      direction={matchesLG ? "row-reverse" : "column"}
      width={matchesLG ? "55vw" : "100vw"}
      className={classes.homeContainer}
      alignContent={matchesLG ? "center" : undefined}
      justifyContent={matchesLG ? "center" : undefined}
    >
      <Grid item container justifyContent={"center"} alignItems={"center"} lg>
        {matchesLG ? (
          <IllustrationSignUpDesktop className={classes.signUpImg} />
        ) : (
          <IllustrationSignUpMobile className={classes.signUpImg} />
        )}
      </Grid>
      <Grid item lg>
        <Grid
          item
          container
          padding={matchesLG ? "3rem 2.5rem" : "1rem"}
          width="100%"
        >
          <Typography
            variant="h2"
            margin={"1rem 0"}
            fontSize={matchesLG ? "3.5em" : undefined}
          >
            {homePageText.title}
          </Typography>
          <Typography variant="subtitle1">
            {homePageText.listTitleText}
          </Typography>
          <List className={classes.listContainer} disablePadding>
            {homePageText.updates.map(({ id, update }: IUpdate) => (
              <ListItem
                key={id}
                disablePadding
                className={classes.listItemContainer}
              >
                <ListItemIcon className={classes.listItemIconContainer}>
                  <BulletIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemTextContainer}>
                  <Typography variant="subtitle1">{update}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <EmailInput />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
