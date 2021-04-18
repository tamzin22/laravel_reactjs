import React from 'react';

const Users = () =>{
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Create Users </div>

                        <div className="card-body">
                            <a href="#" class="btn btn-primary">Create</a>
                            <form >
                                <strong>Name:</strong>
                                <input type="text" name="name" className="form-control" />
                                <strong>Description:</strong>
                                <textarea className="form-control" name="description"></textarea>
                                <button className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;


