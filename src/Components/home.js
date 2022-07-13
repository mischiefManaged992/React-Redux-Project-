import React from "react"
import ReactDOM from "react-dom"
import Checkbox from './checkbox'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchUsers = () => {
        dataFetch();
    };

    const dataFetch = () => {
        fetch('https://immense-bastion-95145.herokuapp.com/api/users').then(response => response.json()).then((result) => {
            dispatch({ type: 'SET_USERS', users: result.users });
        });
    };
    return (
        <div className="mainContainer">
            <div className="home-page-container">
                <h1>Home Page</h1>
                <button className="btn btn-primary" onClick={() => { fetchUsers(); navigate('/allusers'); } }>Fetch Users</button>
            </div>
        </div>
    );
}

export default Home;