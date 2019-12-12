import React from "react";
import { Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class LikeButton extends React.Component {
  state = {
    like: false
  };

  handleChange = () => event => {
    this.setState({ ...this.state, like: event.target.checked }, () =>
      console.log(this.state)
    );
  };
  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.like}
            onChange={this.handleChange("like")}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            // value="like" // зачем нужен value
          />
        }
        label="1gbgf"
      />
    );
  }
}

export default LikeButton;
