import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useEmailInputStyles } from "../styles/emailInput.styles";
import { emailInputText } from "../config/emailInput.config";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { emailState } from "../state/emailAtom";

const EmailInput: React.FC = () => {
  const navigate = useNavigate();
  const { classes } = useEmailInputStyles();

  const [emailValue, setEmailValue] = useRecoilState(emailState);
  const [emailHelperValue, setEmailHelperValue] = useState<string>("");

  const handleEmailInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setEmailValue(e.target.value);
    },
    [setEmailValue]
  );

  const handleSubscribeBtn = useCallback(() => {
    const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      emailValue
    );

    if (!isValid) {
      setEmailHelperValue("Please provide a valid email address");
    } else {
      setEmailHelperValue("");
      navigate("/success");
    }
  }, [emailValue]);

  return (
    <Grid item>
      <TextField
        label={emailInputText.emailLabel}
        placeholder={emailInputText.emailPlaceholder}
        variant="standard"
        focused
        className={classes.textField}
        fullWidth
        value={emailValue}
        onChange={handleEmailInput}
        error={emailHelperValue.length !== 0}
        helperText={emailHelperValue}
      />
      <Button
        className={classes.subscribeBtn}
        fullWidth
        onClick={handleSubscribeBtn}
      >
        <Typography variant="subtitle2">{emailInputText.buttonText}</Typography>
      </Button>
    </Grid>
  );
};

export default EmailInput;
