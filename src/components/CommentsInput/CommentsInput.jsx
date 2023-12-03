import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, TextField } from "@mui/material";

function CommentsInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const comments = useSelector(store => store.comments)
  const [commentsInput, setCommentsInput] = useState(comments);

  const handleInput = (e) => {
    setCommentsInput(e.target.value);
  };
  const submitComments = () => {
    dispatch({
      type: "SET_COMMENTS",
      payload: commentsInput,
    })
    history.push("/submit");
  };
  const goBack = () => {
    history.push('/support');
  };

  return (
    <Box sx={{ 
        color: 'success.dark',
        display: 'inline',
        fontWeight: 'bold'}}>
    <Card variant="outlined"
    sx={{ 
        mx: 1,
        fontSize: 20,
        maxWidth: 900 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            Any comments you want to leave?
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            You can leave this blank if you'd like
        </Typography>
        <Typography component="legend">Comments?</Typography>
        <TextField 
            fullWidth
            id="fullWidth"
            type="text"
            placeholder="Comment?"
            value={commentsInput}
            onChange={handleInput}
            data-testid="input" />
      </CardContent>
      <CardActions>
      <Button
        size="small"
        onClick={goBack}>
            GO BACK
        </Button>
        <Button 
        size="small" 
        onClick={submitComments} 
        data-testid="next"
        className="feedback-button">
          NEXT
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}

export default CommentsInput;
