import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    width: 600
  },
  header: {
    alignItems: "flex-start"
  },
  avatar: {
    width: 49,
    height: 49
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
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
            Наконец-то на самом заседании, а не в зале трансляции. Семья Егора
            провела в зал как брата ^_^, приставы все поняли и на этот раз
            отреагировали адекватно.
          </Typography>
        }
      />
    </Card>
  );
}
