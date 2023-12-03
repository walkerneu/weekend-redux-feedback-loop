import axios from "axios";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

function FeedbackItem({ feedback, getAllFeedback }) {
  const deleteFeedback = (incId) => {
    axios({
      method: "DELETE",
      url: `/feedback/${incId}`,
    })
      .then(function (response) {
        getAllFeedback();
      })
      .catch(function (error) {
        console.log("error in DELETE", error);
      });
  };

  const flagForReview = (incId) => {
    axios({
      method: "PUT",
      url: `/feedback/${incId}`,
    })
      .then(function (response) {
        getAllFeedback();
      })
      .catch(function (error) {
        console.log("error in PUT, my dood", error);
      });
  };
  return (
    <StyledTableRow className={feedback.flagged ? "review-flag" : ""}>
      <StyledTableCell align="right">
        <button
          className="flag-button"
          onClick={() => flagForReview(feedback.id)}
        >
          🏳️
        </button>
      </StyledTableCell>
      <StyledTableCell align="right">
        {new Date(feedback.date).toDateString("en-us")}
      </StyledTableCell>
      <StyledTableCell align="right">{feedback.feeling}</StyledTableCell>
      <StyledTableCell align="right">{feedback.understanding}</StyledTableCell>
      <StyledTableCell align="right">{feedback.support}</StyledTableCell>
      <StyledTableCell align="right">{feedback.comments}</StyledTableCell>
      <StyledTableCell align="right">
        <button onClick={() => deleteFeedback(feedback.id)}>DELETE</button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default FeedbackItem;
