import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function SubmitPage() {
  const feelings = useSelector((state) => state.feelings);
  const understanding = useSelector((state) => state.understanding);
  const support = useSelector((state) => state.support);
  const comments = useSelector((state) => state.comments);
  const history = useHistory();
  const submitFeedback = () => {
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feelings,
        understanding,
        support,
        comments,
      },
    })
      .then((response) => {
        history.push("/success");
      })
      .catch((error) => {
        console.log("Error in POST", error);
      });
  };
  const goBack = () => {
    history.push("/comments");
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
            Review your feedback
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            You may go back and edit if needed
          </Typography>
          <Typography component="legend">Feelings: {feelings}</Typography>
          <Typography component="legend">
            Understanding: {understanding}
          </Typography>
          <Typography component="legend">Support: {support}</Typography>
          <Typography component="legend">Comments: {comments}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={goBack}>
            GO BACK
          </Button>
          <Button
            size="small"
            onClick={submitFeedback}
            data-testid="next"
            className="feedback-button"
          >
            SUBMIT
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default SubmitPage;
