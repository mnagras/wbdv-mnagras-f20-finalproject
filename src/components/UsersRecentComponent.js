import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

export default class UsersRecentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            users: [],
            selectedUser: ''
        }
    }

    componentDidMount() {
            fetch(`https://cs4550-final-node-mnagras.herokuapp.com/users/recent`)
              .then(response => response.json())
               .then(this.renderUsers);
            }

    keywordChanged = event => this.setState({keyword: event.target.value})


    renderUsers = (statusCode) =>
        //console.log(products)
       this.setState({
          users: statusCode.body
       })


    render() {
        return (
        <div className="container  p-3 my-3 border">
            <ul>
                    {
                        this.state.users.map((user, index) => (
                        user.firstName.includes(this.state.keyword) ?
                             <li> <Link to={`/profile/${user.userId}`}> {user.firstName} {user.lastName} </Link> </li>

                            : null
                            )
                          )
                    }
            </ul>

        </div>
        )
    }
}