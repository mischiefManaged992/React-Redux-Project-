import React from "react"
import ReactDOM from "react-dom"
import Checkbox from './checkbox'
import { useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DisplayInfo = () => {
    const arr = useSelector(state => state.user.users);
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="col">Name</th>
                            <th className="col">Company</th>
                            <th className="col">Position</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Planet</th>
                            <th scope="col">Species</th>
                            <th scope="col">Status</th>
                        </tr>
                    
                    </thead>
                    <tbody>
                        {
                            arr.map((person) => {
                                return (
                                    <tr>
                                        <td>{person['name']}</td>
                                        <td>{person['company']}</td>
                                        <td>{person['position']}</td>
                                        <td>{person['profile']['age']}</td>
                                        <td>{person['profile']['gender']}</td>
                                        <td>{person['profile']['planet']}</td>
                                        <td>{person['profile']['species']}</td>
                                        <td>{person['profile']['status']}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-primary" onClick={() => { navigate('/home'); } }>Home</button>
        </div>
    )
}

export default DisplayInfo;