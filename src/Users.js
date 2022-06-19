import { useEffect, useState } from "react";

function USers(){
    const [users, SetUSsers] = useState([])

    useEffect(() =>{
        fetch('https://retoolapi.dev/B13laa/getusers')
        .then((res) => res.json())
        .then((result) =>{
            SetUSsers(result);
        });
    },[]);

    return(
        <div className="container">
            <h3 className="p-3 text-center text-primary">All User Lists</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr className="text-primary table-light">
                        <th>ID</th>
                        <th>Name</th>
                        <th>User ID</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr className="table-primary">
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.user_id}</td>
                            <td>{user.password}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default USers