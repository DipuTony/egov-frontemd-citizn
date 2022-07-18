import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { AiOutlineMenuFold, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegHandshake, FaHandHoldingWater } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { FcAdvertising } from 'react-icons/fc';
import { SiSolidity } from 'react-icons/si';
import { TbCertificate } from 'react-icons/tb';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { AiOutlineBell } from 'react-icons/ai';
import { MdBrightnessMedium } from 'react-icons/md';
import avatar from './avatar.jpg'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SearchModel(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Shortcut Key Function (Ctrl + /)
  document.onkeyup = function (e) {
    if (e.ctrlKey && e.key == '/') {
      // alert("Ctrl + / shortcut combination was pressed");
      handleClickOpen()
    }
  };

  return (
    <>
      <div className='bg-white py-2'> {/* Top Bar*/}
        <AiOutlineMenuFold size={25} className='inline ml-2 mr-8' />
        <span onClick={handleClickOpen} className='text-gray-400 cursor-pointer'><BsSearch size={16} className='inline mr-3 -mt-1 text-black' /> Search (Ctrl + /) </span>
        {/* animation  */}
        <span class="inline animate-pulse rounded m-5 p-1 bg-red-400 text-white">
          <span className='animate-bounce w-10 h-10'><HiArrowNarrowLeft size='25' className='inline mb-0.5' /></span>
        </span>
        <div className='flex float-right mr-5'> {/* Righr Icons bell, brightness, User Icon*/}
          <AiOutlineBell size={20} className='cursor-pointer mr-5' /> <MdBrightnessMedium size={20} className='mr-5 cursor-pointer' /> <img src={avatar} alt="avatar" className='-mt-1 h-10 w-10 rounded-full cursor-pointer' />
        </div>
      </div> {/* End Top Bar*/}
      <div >

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            <p className='flex'> <BsSearch /> <input type="text" autoFocus className='ml-4 mr-5 -mt-3 focus:outline-0 border-0 w-full font-serif text-[1rem]' /><small className='text-gray-400 mr-10 mb-2'>[esc]</small></p>
          </BootstrapDialogTitle>
          <hr />
          <div id="main" className="flex h-72 m-5">
            <div className="w-max h-auto mx-5 ">
              <p className='font-mono text-gray-400 mb-3'>SERVICES</p>
              <p className='cursor-pointer hover:text-sky-400'><FaHandHoldingWater className='inline mr-5 my-3' /> Water</p>
              <p className='cursor-pointer hover:text-sky-400'><AiOutlineHome className='inline mr-5 my-3' /> Property</p>
              <p className='cursor-pointer hover:text-sky-400'><FcAdvertising className='inline mr-5 my-3' /> Advertisement</p>
              <p className='cursor-pointer hover:text-sky-400'><BiBuildingHouse className='inline mr-5 my-3' /> Building Plan Approval</p>
              <p className='cursor-pointer hover:text-sky-400'><SiSolidity className='inline mr-5 my-3' /> Solid Waste Management</p>
              <p className='cursor-pointer hover:text-sky-400'><TbCertificate className='inline mr-5 my-3' /> Birth and Death Certificate</p>
            </div>
            <div className="w-max h-auto mx-5 ">
              <p className='font-mono text-gray-400 mb-3 '>SERVICES</p>
              <p className='cursor-pointer hover:text-sky-400'><AiOutlineHome className='inline mr-5 my-3' /> Property</p>
              <p className='cursor-pointer hover:text-sky-400'><FaHandHoldingWater className='inline mr-5 my-3' /> Advertisement</p>
              <p className='cursor-pointer hover:text-sky-400'><FaRegHandshake className='inline mr-5 my-3' /> Building Plan Approval</p>
              <p className='cursor-pointer hover:text-sky-400'><FaHandHoldingWater className='inline mr-5 my-3' /> Solid Waste Management</p>
              <p className='cursor-pointer hover:text-sky-400'><FaRegHandshake className='inline mr-5 my-3' /> Birth and Death Certificate</p>
            </div>
          </div>

          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </>
  );
}
