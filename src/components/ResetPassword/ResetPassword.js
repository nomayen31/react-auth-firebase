import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import app from '../../Hook/firebaseConfig';

const ResetPassword = (props) => {

    const [email, setEmail] =useState("");
    const auth =getAuth(app);

    const handleResetPass= ()=>{
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    props.onHide();
    Swal.fire("Good job!", "You clicked the button!", "success")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

    return (
        <div>
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Forget Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className='text-danger mt-3'>Reset Your password</h5>
        <input
        onBlur={(e)=>setEmail(e.target.value)}
        type="email" 
        placeholder='Email'
        className='form-control p-2 mt-3'>
        </input>
        
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button onClick={handleResetPass}>Update</Button>
      </Modal.Footer>
    </Modal>
        </div>
    );
};

export default ResetPassword;