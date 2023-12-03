import axios from "axios";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Swal from 'sweetalert2'

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
  "&:nth-of-type(odd)": {},}));

function FeedbackItem({ feedback, getAllFeedback }) {
  const deleteFeedback = (incId) => {
    Swal.fire({
        title: "Are you sure?",
        text: "This will delete the feedback permanently!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "The feedback was deleted.",
            icon: "success"
          });
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
        }
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
        <Button
          size="small"
          className="flag-button"
          onClick={() => flagForReview(feedback.id)}
        >
          🏳️
        </Button>
      </StyledTableCell>
      <StyledTableCell align="right">
        {new Date(feedback.date).toDateString("en-us")}
      </StyledTableCell>
      <StyledTableCell align="right">{feedback.feeling}</StyledTableCell>
      <StyledTableCell align="right">{feedback.understanding}</StyledTableCell>
      <StyledTableCell align="right">{feedback.support}</StyledTableCell>
      <StyledTableCell align="right">{feedback.comments}</StyledTableCell>
      <StyledTableCell align="right">
        <Button size="small" onClick={() => deleteFeedback(feedback.id)}>
          DELETE
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default FeedbackItem;
