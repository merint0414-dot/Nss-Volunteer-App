import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddVolunteer = () => {
  const [input, changeInput] = useState({
        volunteerId: "",
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        bloodGroup: "",
        department: "",
        yearOfStudy: "",
        campName: "",
        address: "",
        hoursCompleted: "",
        unitNumber: ""
    })

    const [message, setMessage] = useState("")

    const inputHandler = (e) => {
        changeInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const submitData = () => {

        axios.post("http://localhost:3000/add-volunteer", input)
            .then(() => {

                setMessage("Volunteer Added Successfully")

                changeInput({
                    volunteerId: "",
                    fullName: "",
                    email: "",
                    phone: "",
                    dateOfBirth: "",
                    gender: "",
                    bloodGroup: "",
                    department: "",
                    yearOfStudy: "",
                    campName: "",
                    address: "",
                    hoursCompleted: "",
                    unitNumber: ""
                })

            })
            .catch(() => {
                setMessage("Something went wrong")
            })

    }

    return (

        <div>
            <NavigationBar/>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-success text-white text-center">
                        <h3>Add Volunteer</h3>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Volunteer ID</label>
                                <input type="text" 
                                className="form-control" 
                                name="volunteerId" 
                                value={input.volunteerId} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Full Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="fullName" 
                                value={input.fullName} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Email</label>
                                <input type="email" 
                                className="form-control" 
                                name="email" 
                                value={input.email} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Phone</label>
                                <input type="text" 
                                className="form-control" 
                                name="phone" 
                                value={input.phone} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Date of Birth</label>
                                <input type="date" 
                                className="form-control" 
                                name="dateOfBirth" 
                                value={input.dateOfBirth} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Gender</label>
                                <input type="text" 
                                className="form-control" 
                                name="gender" 
                                value={input.gender} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Blood Group</label>
                                <input type="text" 
                                className="form-control" 
                                name="bloodGroup" 
                                value={input.bloodGroup} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Department</label>
                                <input type="text" 
                                className="form-control" 
                                name="department" 
                                value={input.department} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Year of Study</label>
                                <input type="text" 
                                className="form-control" 
                                name="yearOfStudy" 
                                value={input.yearOfStudy} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Camp Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="campName" 
                                value={input.campName} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Address</label>
                                <input type="text" 
                                className="form-control" 
                                name="address" 
                                value={input.address} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Hours Completed</label>
                                <input type="text" 
                                className="form-control" 
                                name="hoursCompleted" 
                                value={input.hoursCompleted} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-md-6">
                                <label>Unit Number</label>
                                <input type="text" 
                                className="form-control" 
                                name="unitNumber" 
                                value={input.unitNumber} 
                                onChange={inputHandler}/>
                            </div>

                            <div className="col-12 text-center">
                                <button className="btn btn-success" onClick={submitData}>Add Volunteer</button>
                            </div>

                            <div className="col-12 text-center">
                                <h5 className="text-success">{message}</h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default AddVolunteer