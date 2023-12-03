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

function SupportInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const support = useSelector((store) => store.support);
  const [supportInput, setSupportInput] = useState(support);

  const handleInput = (e) => {
    setSupportInput(e.target.value);
  };
  const submitSupport = () => {
    if (supportInput > 5 || supportInput < 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You need to enter a rating!",
            footer: 'Please select a score from 1 to 5'
          });
    } else {
      dispatch({
        type: "SET_SUPPORT",
        payload: supportInput,
      });
      history.push("/comments");
    }
  };
  const goBack = () => {
    history.push("/understanding");
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
            How well are you being supported?
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            On a scale of 1 to 5
          </Typography>
          <Typography component="legend">Feeling?</Typography>
          <Rating
            name="simple-controlled"
            value={supportInput}
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
            onClick={submitSupport}
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

export default SupportInput;
