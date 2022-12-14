import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    borderTop: "1px solid #585587",
    position: "relative",
    maxWidth: 1100,
    margin: "80px auto 0px",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6.5),
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(12),
    },
  },
  button: {
    textTransform: "none",
    margin: theme.spacing(1),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" gutterBottom>
        This xDapp is just a POC to highlight huge potential usecase to solve crypto xChain payment.
      </Typography>

      <Button
        variant="outlined"
        href="https://wormhole.com/"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        className={classes.button}
      >
        {" "}
        Wormhole
      </Button>

      <Button
        variant="outlined"
        href="https://wormhole-xpay.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        className={classes.button}
      >
        {" "}
        xPay demo
      </Button>

      <Button
        variant="outlined"
        href="https://github.com/0xStruct/wormhole-xpay"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        className={classes.button}
      >
        {" "}
        xPay source
      </Button>
    </footer>
  );
}
