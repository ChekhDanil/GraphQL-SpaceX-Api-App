import React from "react";
import {gql} from "apollo-boost";
import {useQuery, useMutation} from '@apollo/react-hooks';


import UserAddForm from "../../Components/user-add-form";
import './users.css'

const GET_USERS = gql`
{
  users {
    id
    name
  }
}
`;
const ADD_USER = gql`
mutation {
  insert_users(objects: {name: "dan"}) {
    returning {
      name
      id
    }
  }
}

`;

const Users = () => {
    // @ts-ignore
    const {errors, loading, data} = useQuery(GET_USERS);

    const addUser=()=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [addUser, { data }] = useMutation(ADD_USER);
    }
    return (
        <div className='users_page'>
            <h1>Users</h1>
            <UserAddForm/>
                {
                    errors
                        ? "Error!" : loading
                        ? "Loading..."
                        :
                        data.users.map(({id, name}: {
                            id: string, name: string,
                        }) => (
                            <div key={id}>
                                <div className="users_details">
                                    <h2 className='user_name'>User name:{name}</h2>
                                    <span className="user_id">User id {id}</span>
                                </div>
                            </div>
                        ))
                }
        </div>
)
};
export default Users;
