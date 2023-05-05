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

export default function ComplaintStatus() {
  return (
    // <section className="" style={{ backgroundColor: "#eee" }}>
    <div className="AdminHomeContainer">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">Complaints Registered</h4>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col"><b>No.</b></th>
                      <th scope="col"><b>Category</b></th>
                      <th scope="col"><b>Status</b></th>
                      <th scope="col"><b>Registered date</b></th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Debt</td>
                      <td>In progress</td>
                      <td>

                        26/04/2023 
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Credit Card</td>
                      <td>In progress</td>
                      <td>
                        26/04/2023
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Debt</td>
                      <td>In progress</td>
                      <td>
                        27/04/2023
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