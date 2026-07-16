import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewVolunteer = () => {
  const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-volunteer")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div>
            <NavigationBar/>
            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-success text-white text-center">
                        <h3>View All Volunteers</h3>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped">

                                <thead className="table-dark">

                                    <tr>
                                        <th>Volunteer ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Blood Group</th>
                                        <th>Department</th>
                                        <th>Year</th>
                                        <th>Camp</th>
                                        <th>Address</th>
                                        <th>Hours</th>
                                        <th>Unit</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.volunteerId}</td>
                                                <td>{value.fullName}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.dateOfBirth}</td>
                                                <td>{value.gender}</td>
                                                <td>{value.bloodGroup}</td>
                                                <td>{value.department}</td>
                                                <td>{value.yearOfStudy}</td>
                                                <td>{value.campName}</td>
                                                <td>{value.address}</td>
                                                <td>{value.hoursCompleted}</td>
                                                <td>{value.unitNumber}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default ViewVolunteer