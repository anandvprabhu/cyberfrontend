import React, { useState } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../news/newsItem.css'; 

import app  from "../firebase.js";
import { doc, addDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function RegForm() {
    const [message,setMessage] = useState("");
    const [complaintee,setComplaintee] = useState("");
    const [subject,setSubject] = useState("");
    const navigate = useNavigate();
    const db = getFirestore(app);
    
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setComplaintee(user.email);
          console.log("Current User: " + user.email);
        } else {
          console.log("User not found");
          navigate('/');
        }
      });
    }, []);

    //funtion for classification model
    async function classify(data) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/joeldenny/finalclassificationmodel",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }

    //function for priority model
    async function priority(data) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/joeldenny/priority-model",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      let dept;
      let pri;
      
      // Request to model 1 for dept
      await classify({"inputs": message})
      .then((response) => {
        console.log("Department: " + response[0][0].label);
        dept = response[0][0].label;
      });
      
      // Request to model 2 for priority
      await priority({"inputs": message})
      .then((response) => {
        console.log("Priority: " + response[0][0].label);
        pri = response[0][0].label;
      });

      console.log("dept from var: "+ dept);
      console.log("pri from var: "+ pri);

      const data = {
        message,
        department: dept,
        status: null,
        priority: pri,
        complaintId : null
      };

      console.log("Data : " + data.department);
      console.log("Data : " + data.priority);
            
      const docRef = await addDoc(collection(db, "complaints"), data);

      // console.log("Complaintee: " + complaintee);
      const userDoc = doc(db, "users", complaintee);
      await updateDoc(userDoc, {
        complaints: arrayUnion(docRef.id)
      });
    }

    return (
    <form className="reg_form" onSubmit={handleSubmit}>
      <h1 className="mb-3">Complaint Form</h1>
      
      <div className="form-outline">
        <textarea className="form-control" id="textAreaExample1" rows="2"
        onChange={(e) => setSubject(e.target.value)} value={subject}></textarea>
        <label className="form-label">Subject</label>
      </div>

      <div className="form-outline">
        <textarea className="form-control" id="textAreaExample1" rows="4"
        onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
        <label className="form-label">Complaint Description</label>
      </div>
      
      <p className="lead">*Input should be atleast 10 characters</p>
      
      <MDBInput type='file' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='I have read the rules and regulations'
      />

      <MDBBtn type='submit' className='mb-4' block disabled={message.length<10}>Submit</MDBBtn>
    </form>
  );
}