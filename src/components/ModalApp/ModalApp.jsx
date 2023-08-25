import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalApp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [taskStore, setTaskStore] = useState({
    task: "",
    created: "",
    expiration: "",
    status: "",
  });

  const handleFormSubmit = async (e) => {
    console.log("Recibo: ", e)
    let response = await axios.post("http://localhost:8000/tasks", taskStore);

    if (response) {
      alert("Data saved");
    } else {
      alert("Something went wrong");
    }

    setTaskStore({
      task: "",
      created: "",
      expiration: "",
      status: "",
    });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Task</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Button variant="outlined" onClick={handleClose}>
              X
            </Button>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Task
            </Typography>
            <TextField
              type="text"
              placeholder="Task"
              value={taskStore.task}
              onChange={(e) =>
                setTaskStore({ ...taskStore, task: e.target.value })
              }
            />
            <TextField
              type="text"
              name="created"
              value={taskStore.created}
              onChange={(e) =>
                setTaskStore({ ...taskStore, created: e.target.value })
              }
            />
            <TextField
              type="text"
              value={taskStore.expiration}
              onChange={(e) =>
                setTaskStore({ ...taskStore, expiration: e.target.value })
              }
            />
            <TextField
              type="text"
              value={taskStore.status}
              onChange={(e) =>
                setTaskStore({ ...taskStore, status: e.target.value })
              }
            />

            <Box>
              <Button variant="contained" onClick={handleFormSubmit}>
                Save
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalApp;
