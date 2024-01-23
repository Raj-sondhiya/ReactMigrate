import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const EmpManagement = () => {
    const [empList, setEmpList] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        mobile: '',
        city: '',
        age: '',
    });

    useEffect(() => {
        // Load data from local storage on component mount
        const storedEmpList = JSON.parse(localStorage.getItem('empList'));
        if (storedEmpList) {
            setEmpList(storedEmpList);
        }
    }, []);

    useEffect(() => {
        // Save data to local storage whenever empList is updated
        localStorage.setItem('empList', JSON.stringify(empList));
    }, [empList]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleFormSubmit = () => {
        const { name, email, pass, mobile, city, age } = formData;

        if (name && email && pass && mobile && city && age) {
            if (empList.some((element) => element.email === email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is already added',
                });
            } else {
                if (parseInt(age) < 18) {
                    Swal.fire({
                        title: 'Invalid Age',
                        text: 'Age must be 18 and above',
                        icon: 'error',
                    });
                    return;
                }

                if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
                    Swal.fire({
                        title: 'Invalid Password',
                        text: 'Password must contain at least one special character',
                        icon: 'error',
                    });
                    return;
                }

                setEmpList([...empList, formData]);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Added successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });

                setFormData({
                    name: '',
                    email: '',
                    pass: '',
                    mobile: '',
                    city: '',
                    age: '',
                });
            }
        } else {
            Swal.fire('Fields cannot be empty');
        }
    };

    const handleDelete = (emailToDelete) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                setEmpList((prevList) => prevList.filter((a) => a.email !== emailToDelete));

                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your entry has been deleted.',
                    icon: 'success',
                });
            }
        });
    };

    const renderTable = () => {
        if (empList.length !== 0) {
            return (
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile Number</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empList.map((e, index) => (
                            <tr key={index}>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.pass}</td>
                                <td>{e.mobile}</td>
                                <td>{e.city}</td>
                                <td>{e.age}</td>
                                <td>
                                    <button
                                        className="btn btn-danger delete"
                                        onClick={() => handleDelete(e.email)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        } else {
            return null;
        }
    };  

    return (
        <div className="container">
            <h4 className="my-5 bg-secondary text-dark p-3">
                Programmers Point Employee Management System
            </h4>
            <div className="row">
                <div className="col-4">
                    <div className="card text-center">
                        <div className="card-header">Employee Details Form</div>
                        <div className="card-body">
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pass" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="pass"
                                        value={formData.pass}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile" className="form-label">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="city" className="form-label">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="age" className="form-label">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleFormSubmit}
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </div>
                        <div className="cart-footer text-muted">
                            Employee Management System Application
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <div className="row empData">{renderTable()}</div>
                </div>
            </div>
        </div>
    );
};

export default EmpManagement;