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
import Swal from 'sweetalert2'
import { CardActionArea } from "@mui/material";

function FeelingsInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feelings = useSelector((store) => Number(store.feelings));
  const [feelingsInput, setFeelingsInput] = useState(feelings);

  const handleInput = (e) => {
    setFeelingsInput(e.target.value);
  };
  const submitFeeling = () => {
    if (feelingsInput > 5 || feelingsInput < 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You need to enter a rating!",
            footer: 'Please select a score from 1 to 5'
          });
    } else {
      dispatch({
        type: "SET_FEELINGS",
        payload: feelingsInput,
      });
      history.push("/understanding");
    }
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
            How are you feeling today?
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            On a scale of 1 to 5
          </Typography>
          <Typography component="legend">Feeling?</Typography>
          <CardActionArea>
          <Rating
            name="simple-controlled"
            value={feelingsInput}
            onChange={handleInput}
            data-testid="input"
          />
          </CardActionArea>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={submitFeeling}
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

export default FeelingsInput;
