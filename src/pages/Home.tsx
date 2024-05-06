import React from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import { ReactComponent as IllustrationSignUpMobile } from "../assets/images/illustration-sign-up-mobile.svg";
import { ReactComponent as BulletIcon } from "../assets/images/icon-list.svg";
import { homePageText } from "../config/Home.config";
import { IUpdate } from "../interfaces";
import { useHomeStyles } from "../styles/Home";

const Home: React.FC = () => {
  const { classes } = useHomeStyles();
  return (
    <Grid container direction="column">
      <IllustrationSignUpMobile className="signUpMobileImg" />
      <Grid item container padding="1rem" width="100%">
        <Typography variant="h2" margin={"1rem 0"}>
          Stay Updated!
        </Typography>
        <Typography variant="subtitle1">
          Join 60,000+ product managers receiving monthly updates on:
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
        <TextField
          label={homePageText.emailLabel}
          placeholder={homePageText.emailPlaceholder}
          variant="standard"
          focused
          className={classes.textField}
          fullWidth
        />
        <Button className={classes.subscribeBtn} fullWidth>
          <Typography variant="subtitle2">{homePageText.buttonText}</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
