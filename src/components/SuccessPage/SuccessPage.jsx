import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

function SuccessPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const resetValues = () => {
        dispatch({
            type: "RESET_VALUES"
          })
        history.push('/')
    }
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
            THANK YOU!!
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">We appreciate your feedback!</Typography>
      </CardContent>
      <CardActions>
      <Button
        size="small"
        onClick={resetValues}
        data-testid="next">
            Leave New Feedback
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}

export default SuccessPage;
