import {
  Avatar,
  Grid,
  Button,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useCallback } from "react";
import { useLocation } from "react-router";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Attest from "./components/Attest";
import Footer from "./components/Footer";
import HeaderText from "./components/HeaderText";
import Recovery from "./components/Recovery";
import TokenOriginVerifier from "./components/TokenOriginVerifier";
import Xpay from "./components/Xpay";
import UnwrapNative from "./components/UnwrapNative";
import WithdrawTokensTerra from "./components/WithdrawTokensTerra";
import { CLUSTER } from "./utils/consts";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent",
    marginTop: theme.spacing(2),
    "& > .MuiToolbar-root": {
      margin: "auto",
      width: "100%",
      maxWidth: 1440,
    },
  },
  spacer: {
    flex: 1,
    width: "100vw",
  },
  link: {
    ...theme.typography.body2,
    fontWeight: 600,
    marginLeft: theme.spacing(4),
    textUnderlineOffset: "6px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
    "&.active": {
      textDecoration: "underline",
    },
  },
  bg: {
    // background:
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  brandLink: {
    display: "inline-flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
    },
  },
  degen: {
    borderRadius: "50%",
    width: "110px",
  },
}));

function App() {
  const classes = useStyles();
  const { pathname } = useLocation();
  const handleClusterChange = useCallback((event) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("cluster", event.target.value);
    window.location.search = urlParams;
  }, []);
  return (
    <div className={classes.bg}>
      {["/xpay"].includes(pathname) ? (
        <Container maxWidth="sm" style={{ paddingBottom: 12, paddingTop: 12 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src="https://media.howrare.is/images/degenapes/ced231d0d04663147dd4b8205431ebc5.jpg" className={classes.degen} alt="degen ape #8290"/>
            </Grid>
            <Grid item xs={9}>
              <h3>Degen Ape #8290</h3>
              <p>
                Hey! I am from Solana. And I am venturing into the space of multi-chains. <em>Fund my adventure</em> via xPay with your tokens from your chains :D
              </p>
            </Grid>
          </Grid>
        </Container>
      ) : null}
      <Switch>
        <Route exact path="/xpay">
          <Xpay />
        </Route>
        <Route exact path="/redeem">
          <Recovery />
        </Route>
        <Route exact path="/token-origin-verifier">
          <TokenOriginVerifier />
        </Route>
        <Route exact path="/register">
          <Attest />
        </Route>
        <Route exact path="/withdraw-tokens-terra">
          <WithdrawTokensTerra />
        </Route>
        <Route exact path="/unwrap-native">
          <UnwrapNative />
        </Route>
        <Route>
          <Redirect to="/xpay" />
        </Route>
      </Switch>
      <div className={classes.spacer} />
      <div className={classes.gradientRight}></div>
      <div className={classes.gradientRight2}></div>
      <div className={classes.gradientLeft}></div>
      <div className={classes.gradientLeft2}></div>
      <Footer />
    </div>
  );
}

export default App;
