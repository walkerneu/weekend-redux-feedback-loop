import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
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

function AdminPage() {
  const allFeedback = useSelector((store) => store.allFeedback);
  const dispatch = useDispatch();

  const getAllFeedback = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "STORE_ALL_FEEDBACK",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error on GET St.!! Am i right??", error);
      });
  };

  useEffect(() => {
    getAllFeedback();
  }, []);

  return (
    <div>
      <h2>Feedback Results!</h2>
      <h3>Secret Admin Page! Woah!</h3>
      <div className="admin-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Flag for Review</StyledTableCell>
                <StyledTableCell align="right">Date Added</StyledTableCell>
                <StyledTableCell align="right">Feeling</StyledTableCell>
                <StyledTableCell align="right">Understanding</StyledTableCell>
                <StyledTableCell align="right">Support</StyledTableCell>
                <StyledTableCell align="right">Comments</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allFeedback.map((feedback) => (
                <FeedbackItem
                  key={feedback.id}
                  feedback={feedback}
                  getAllFeedback={getAllFeedback}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default AdminPage;
