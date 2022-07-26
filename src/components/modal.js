import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicRating from './rating'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>+ Add Artist</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div class="m-5">
                <h3>Fill the details</h3>
                <input placeholder='Name of the artist' onChange={props.artistName}></input>
                <input onChange={props.song} placeholder='song'></input>
                <input onChange={props.releaseDate} placeholder='date of release'></input>
                <BasicRating />
                <button onClick={props.btnHandler} type="button" class="btn btn-secondary mx-1">submit</button>
            </div>
        </Box>

      </Modal>
    </div>
  );
}
