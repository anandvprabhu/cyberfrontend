import React, {useState} from 'react'
import { MDBBtn } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../admin/admin.css';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AdminItem = ({ id, subject, dept, priority, message }) => {
    const [open, setOpen] = useState(false);
    const [age, setAge] = useState(" ");

    const handleClick = () => {
        setOpen(!open);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value);
    };

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{subject}</td>
                <td>{dept}</td>
                <td>{priority}</td>
                <td>
                <MDBBtn type="submit" color="success" className="ms-1" onClick={()=>handleClick()}>
                    View
                </MDBBtn>
                </td>
            </tr>
            <tr>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className="flex">
                        <div className="" style={{flex:0.5}}><p>{message}</p></div> 

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
        </>
    )
}

export default AdminItem;