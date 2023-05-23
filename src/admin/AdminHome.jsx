import React, { useState } from "react";
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
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AdminHome() {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(" ");
  
  const handleClick = () => {
    setOpen(!open);
  };
  
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
  console.log(age);
  return (
    // <section className="" style={{ backgroundColor: "#eee" }}>
    <div className="AdminHomeContainer">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4" style={{position:"relative"}}>
                <h4 className="text-center my-3 pb-3">Complaints</h4>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col"><b>CID</b></th>
                      <th scope="col"><b>Subject</b></th>
                      <th scope="col"><b></b></th>
                      <th scope="col"><b>Action</b></th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Debt</td>
                      <td>In progress</td>
                      <td>

                        <MDBBtn type="submit" color="success" className="ms-1" onClick={()=>handleClick()}>
                          View
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding className="flex">
                        <div className="" style={{flex:0.5}}><p>I lost my credit card on 27th april in jew town road
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></div> 
                        {/* {"I lost my credit card on 27th april in jew town road"} */}
                        <FormControl fullWidth style={{flex:0.5}}>
                          <InputLabel id="demo-simple-select-label">Status</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleChange}
                            label="Age"
                            value={age}>
                            <MenuItem value={10}>In progress</MenuItem>
                            <MenuItem value={20}>Checked</MenuItem>
                          </Select>
                        </FormControl>
                      </List>
                    </Collapse>
                  </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Credit Card</td>
                      <td>In progress</td>
                      <td>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          View
                        </MDBBtn>
                      </td>
                    </tr>
                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder/>
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse> */}
                    <tr>
                      <th scope="row">3</th>
                      <td>Debt</td>
                      <td>In progress</td>
                      <td>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          View
                        </MDBBtn>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    // </section>
  );
}