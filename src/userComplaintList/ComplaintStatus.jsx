import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../admin/admin.css';
import app  from "../firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ComplaintItem from './ComplaintItem';
const db = getFirestore(app);

let complaintDataArray = [];

export default function ComplaintStatus() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        //setComplaintee(user.email);
        setUser(user.email);
        console.log("Current User: " + user.email);
      } else {
        console.log("User not found");
        navigate('/');
      }
    });  

    const getComplaintData = async () => {
      console.log("Get data func");
      const q = query(collection(db, "complaints"), where("email", "==", user));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        complaintDataArray.push(doc.data());
        console.log("Pushed");
      });   
    }    

    getComplaintData();

  }, []);
  
  return (
    <MDBTable className="mb-4">
      <MDBTableHead>
        <tr>
          <th scope="col"><b>CID</b></th>
          <th scope="col"><b>Subject</b></th>
          <th scope="col"><b>Registered date</b></th>
          <th scope="col"><b>Status</b></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {complaintDataArray.map((complaint, index) => {
          return(
            <ComplaintItem
              key={index}
              subject={complaint.subject}
              id={complaint.complaintId}
              status={complaint.status}
              date={complaint.priority} 
            />
          )
        })}
      </MDBTableBody>
    </MDBTable>
  );
}