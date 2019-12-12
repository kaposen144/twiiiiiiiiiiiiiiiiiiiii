import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import LikeButton from "./LikeButton";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from "@material-ui/icons/Share";
import HorizontalScroll from "react-scroll-horizontal";

const useStyles = makeStyles(theme => ({
  app: {
    height: "100vh",
    minWidth: "100%",
    display: "flex",
    alignItems: "center"
  },
  card1: {
    minWidth: 600,
    height: 79,
    marginBottom: 5,
    marginRight: 150,
    marginLeft: 150
  },
  card: {
    minWidth: 600,
    marginBottom: 5,
    marginRight: 150
  },
  header: {
    alignItems: "flex-start"
  },
  avatar: {
    width: 49,
    height: 49
  },
  img: {
    width: 500,
    height: "auto",
    marginTop: 10,
    borderRadius: 10
  }
}));
const App = () => {
  const classes = useStyles();

  return (
    <HorizontalScroll
      reverseScroll={true}
      config={{ stiffness: 100 }}
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh"
      }}
    >
      <div className={classes.app}>
        <Card className={classes.card1} />

        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar
                aria-label="avatar"
                className={classes.avatar}
                src="https://pbs.twimg.com/profile_images/1175295104912961537/TO5Wcyda_reasonably_small.jpg"
              />
            }
            title={
              <Typography variant="subtitle2">
                Oxxxymiron @norimyxxxo · Nov 6
              </Typography>
            }
            subheader={
              <Typography variant="body2">
                Наконец-то на самом заседании, а не в зале трансляции. Семья
                Егора провела в зал как брата ^_^, приставы все поняли и на этот
                раз отреагировали адекватно.
              </Typography>
            }
          />
        </Card>
        <Card className={classes.card}>
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar
                aria-label="avatar"
                className={classes.avatar}
                src="https://pbs.twimg.com/profile_images/1175295104912961537/TO5Wcyda_reasonably_small.jpg"
              />
            }
            title={
              <Typography variant="subtitle2">
                Oxxxymiron @norimyxxxo · Nov 6
              </Typography>
            }
            subheader={
              <React.Fragment>
                <Typography variant="body2">
                  Наконец-то на самом заседании, а не в зале трансляции. Семья
                  Егора провела в зал как брата ^_^, приставы все поняли и на
                  этот раз отреагировали адекватно.
                </Typography>
                <CardActions
                  style={{ justifyContent: "space-between", padding: 0 }}
                >
                  <LikeButton />
                  <ShareIcon />
                  <ShareIcon />
                </CardActions>
              </React.Fragment>
            }
          />
        </Card>
        <div>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                  aria-label="avatar"
                  className={classes.avatar}
                  src="https://pbs.twimg.com/profile_images/1175295104912961537/TO5Wcyda_reasonably_small.jpg"
                />
              }
              title={
                <Typography variant="subtitle2">
                  Oxxxymiron @norimyxxxo · Nov 6
                </Typography>
              }
              subheader={
                <React.Fragment>
                  <Typography variant="body2">
                    Наконец-то на самом заседании, а не в зале трансляции. Семья
                    Егора провела в зал как брата ^_^, приставы все поняли и на
                    этот раз отреагировали адекватно.
                  </Typography>
                  <CardActions
                    style={{ justifyContent: "space-between", padding: 0 }}
                  >
                    <LikeButton />
                    <ShareIcon />
                    <ShareIcon />
                  </CardActions>
                </React.Fragment>
              }
            />
          </Card>
          <Card className={classes.card}>
            <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                  aria-label="avatar"
                  className={classes.avatar}
                  src="https://pbs.twimg.com/profile_images/1175295104912961537/TO5Wcyda_reasonably_small.jpg"
                />
              }
              title={
                <Typography variant="subtitle2">
                  Oxxxymiron @norimyxxxo · Nov 6
                </Typography>
              }
              subheader={
                <React.Fragment>
                  <Typography variant="body2">
                    Вынесу из коментов к посту на РиПе
                  </Typography>
                  <img
                    className={classes.img}
                    src="https://pbs.twimg.com/media/EK80DebXsAAqgzQ?format=jpg&name=medium"
                  />
                  <CardActions
                    style={{ justifyContent: "space-between", padding: 0 }}
                  >
                    <LikeButton />
                    <ShareIcon />
                    <ShareIcon />
                  </CardActions>
                </React.Fragment>
              }
            />
          </Card>
        </div>
      </div>
    </HorizontalScroll>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
