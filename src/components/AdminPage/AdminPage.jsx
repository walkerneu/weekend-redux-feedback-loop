import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedbackItem from "../FeedbackItem/FeedbackItem";

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
      <table>
        <thead>
          <tr>
            <th>Flag for Review</th>
            <th>Date Added</th>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allFeedback.map((feedback) => (
            <FeedbackItem
                key={feedback.id} 
                feedback={feedback}
                getAllFeedback={getAllFeedback}/>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AdminPage;
