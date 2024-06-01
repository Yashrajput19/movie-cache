import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  color:"#FFFFFF",
  border: '2px solid #FFFFFF',
  boxShadow: 24,
  p: 4,
};

export default function CreatePlaylist() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className='bg-sky-500 p-2 rounded'>Create Playlist</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Playlist
          </Typography>
         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            <form action="">
                <label htmlFor="">Enter name : </label>
                <input type="text" placeholder='Enter the name of a playlist' className='bg-black border-2 p-2 my-4 w-full rounded'  />
                <label htmlFor=""> Choose Access : </label>
                <div className='flex gap-5'>
                <div className='mt-2'>
                <input type="radio" id="public" name="access" value="Public" checked/>
                <label for="public" className='ml-1'>Public</label>
                </div>
                <div className='mt-2'>
                <input type="radio" id="private" name="access" value="Private"/>
                <label for="private" className='ml-1'>Private</label>
                </div>
                </div>
                <div className='flex justify-center'>
                <button type='submit' className='p-2 mt-4 bg-green-500 rounded text-white'> Create </button>
                </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
