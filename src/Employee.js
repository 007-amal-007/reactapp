import { useEffect, useState } from "react";

function Employee(props){
    const[employees,SetEmployee] = useState([])

    useEffect(() =>{
        fetch('https://retoolapi.dev/GFHqAV/getemployees')
        .then((res) => res.json())
        .then((result) =>{
            SetEmployee(result);
        });
    },[]);
      // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }

    return (
      <div className="container">
        <div>
          Welcome User!
          <br />
          <br />
          <input type="button" onClick={handleLogout} value="Logout" />
        </div>
        <h3 className="p-3 text-center text-primary">All Employee Lists</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="text-primary table-light">
              <th>ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Designation</th>
              <th>company_logo</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                <tr className="table-primary">
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.company}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.company_logo}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
}

export default Employee