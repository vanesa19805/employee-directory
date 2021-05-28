import React from "react";
import "./style.css";

function EmployeeCard(props) {
    console.log(props)
    return (
        <div className="card">
           
            <div className="content">
                <ul>
                    <li>
                        <strong>Image:</strong>  <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
                    </li>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Phone:</strong> {props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                    <li>
                        <strong>DOB:</strong> {props.dob}
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;