import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";

function UnderstandingInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const understanding = useSelector((store) => store.understanding);
  const [understandingInput, setUnderstandingInput] = useState(understanding);

  const handleInput = (e) => {
    setUnderstandingInput(e.target.value);
  };
  const submitUnderstanding = () => {
    if (understandingInput > 5 || understandingInput < 1) {
      alert("You need to enter a number between 1 and 5!");
    } else {
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: understandingInput,
      });
      history.push("/support");
    }
  };
  const goBack = () => {
    history.push("/");
  };

  return (
    <Box
      sx={{
        color: "success.dark",
        display: "inline",
        fontWeight: "bold",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          mx: 1,
          fontSize: 20,
          maxWidth: 900,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            How well are you understanding the content?
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            On a scale of 1 to 5
          </Typography>
          <Typography component="legend">Feeling?</Typography>
          <Rating
            name="simple-controlled"
            value={understandingInput}
            onChange={handleInput}
            data-testid="input"
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={goBack}>
            GO BACK
          </Button>
          <Button
            size="small"
            onClick={submitUnderstanding}
            data-testid="next"
            className="feedback-button"
          >
            NEXT
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default UnderstandingInput;
