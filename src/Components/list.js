import React from "react"
import ReactDOM from "react-dom"
import Checkbox from './checkbox'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

function EmployeesList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const arr = useSelector(state => state.user.users);
    const [selectedUsers, setSelectedUsers] = React.useState([]);
    const handleSelectedUsers = () => {
        dispatch({ type: 'SET_SELECTED_USERS', selectedUsers });
        navigate('/selected');
        setSelectedUsers([]);
    };
    const handleSelection = (id) => {
        const duplicate = Object.assign([], selectedUsers);
        console.log(duplicate, id);
        if (duplicate.indexOf(id) == -1) {
            duplicate.push(id);
        } else {
            const index = duplicate.indexOf(id);
            duplicate.splice(index, 1);
        }
        setSelectedUsers(duplicate);
    };
    // const dispatch = useDispatch();

    return (
        <div>
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="col">Select</th>
                            <th className="col">Name</th>
                            <th className="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((person) => {
                            return (
                                <tr>
                                    <td><Checkbox id={person['id']} handleUserSelect={handleSelection} /></td>                               
                                    <td>{person['name']}</td>
                                    <td>{person['company']}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
           
            <Button onClick={handleSelectedUsers} disabled = {selectedUsers.length == 0}>Display Info</Button>
        </div>
    );
}

export default EmployeesList;