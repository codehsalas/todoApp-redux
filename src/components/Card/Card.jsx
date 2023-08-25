import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/index.css";

import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { addTask, updateTask, deleteTask } from "../../redux/tasksSlice";

const Card = () => {
  const dispatch = useDispatch();
  const taskLists = useSelector((state) => state.tasks.value);

  const [taskName, setTaskName] = useState("");
  const [newMyTask, setNewMyTask] = useState("");
  const [dateCreatedTask, setDateCreatedTask] = useState("");
  const [dateExpirationTask, setDateExpirationTask] = useState("");
  const [statusTask, setStatusTask] = useState("");

  return (
    <>
      <div className="container-input-task">
        
        <input
          type="text"
          placeholder="Task..."
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Created..."
          onChange={(event) => {
            setDateCreatedTask(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Expiration..."
          onChange={(event) => {
            setDateExpirationTask(event.target.value);
          }}
        />
        <select
          className="input-edit-task-select"
          onChange={(event) => {
            setStatusTask(event.target.value);
          }}
        >
          <option value="">Status</option>
          <option value="Done">Done</option>
          <option value="Pending">Pending</option>
          <option value="Late">Late</option>
        </select>

        <button
          onClick={() => {
            dispatch(
              addTask({
                id: taskLists[taskLists.length - 1].id + 1,
                taskName,
                dateCreatedTask,
                dateExpirationTask,
                statusTask,
              })
            );
          }}
        >
          
          {" "}
          <span style={{fontSize:"24px", fontWeight:"bolder"}}>+</span>
        </button>
        <button>Order</button>
      </div>

      {taskLists.map((item) => {
        return (
          <div className="container-card" key={item.id}>
            <div className="container-card-details">
              <div className="container-card-icon-task">
                <p>
                  <ListAltOutlinedIcon sx={{ color: "#c4c4c4" }} />
                </p>
                <p style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  {item.taskName}
                </p>
              </div>

              <div className="card-box-buttons">
                <input
                  className="input-edit-task"
                  type="text"
                  placeholder="Edit Name of task..."
                  onChange={(event) => {
                    setNewMyTask(event.target.value);
                  }}
                />
                <button
                  className="card-box-buttons-edit"
                  onClick={() => {
                    dispatch(updateTask({ id: item.id, taskName: newMyTask }));
                  }}
                >
                  Edit
                </button>
                <button
                  className="card-box-buttons-delete"
                  onClick={() => {
                    dispatch(deleteTask({ id: item.id }));
                  }}
                >
                  Delete
                </button>
              </div>

              <div>
                <p className="card-text-dates">
                  Created: {item.dateCreatedTask}
                </p>
                <p className="card-text-dates">
                  Expiration: {item.dateExpirationTask}
                </p>
              </div>
            </div>

            <div
              className={`card-box-status
            ${item.statusTask === "Done" && "card-box-status-ok"}
            ${item.statusTask === "Pending" && "card-box-status-Pending"}
            ${item.statusTask === "Late" && "card-box-status-late"}
            `}
            >
              {(item.statusTask === "Done" && (
                <CheckCircleOutlinedIcon
                  sx={{ color: "white", fontSize: 50 }}
                />
              )) ||
                (item.statusTask === "Pending" && (
                  <PendingOutlinedIcon sx={{ color: "white", fontSize: 50 }} />
                )) ||
                (item.statusTask === "Late" && (
                  <HighlightOffOutlinedIcon
                    sx={{ color: "white", fontSize: 50 }}
                  />
                ))}

              <p>{item.statusTask}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
