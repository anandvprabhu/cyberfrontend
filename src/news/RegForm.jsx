import React, { useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../news/newsItem.css'; 
import { Link } from 'react-router-dom';
export default function RegForm() {
    const [message,setMessage] = useState("");
  return (
    <form className="reg_form">
    <h1 className="mb-3">Complaint Form</h1>
      {/* <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' required/>
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' required/> */}
      {/* <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' required/> */}
      <div class="form-outline">
        <textarea class="form-control" id="textAreaExample1" rows="4"
        onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
        <label class="form-label" for="textAreaExample">Message</label>
      </div>
      <p class="lead">*Input should be atleast 10 characters</p>
      <MDBInput type='file' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />
      
      <Link to="/dashboard">
      <MDBBtn type='submit' className='mb-4' block disabled={message.length<10}>Submit</MDBBtn>
      </Link>
    </form>
  );
}