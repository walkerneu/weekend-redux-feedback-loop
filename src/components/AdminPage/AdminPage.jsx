import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

function AdminPage(){
    const allFeedback = useSelector(store => store.allFeedback)
    const dispatch = useDispatch();
    const getAllFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
          })
            .then((response) => {
              console.log(response.data);
              dispatch({
                type: "STORE_ALL_FEEDBACK",
                payload: response.data
              })
            })
            .catch((error) => {
              console.log('error on GET St.!! Am i right??', error);
            });
    }
    useEffect(() => {
        getAllFeedback();
      }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
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
                        <tr>
                            <td>{new Date(feedback.date).toDateString('en-us')}</td>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td><button>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage;