import React from "react";
import { Route, Link} from "react-router-dom";
import { connect } from 'react-redux';
import HeaderComponent from "./HeaderComponent";


class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            users: [],
            user : '',
            following: [],
            loggedInUser : false,
            followingArr : []
        }
    }

    componentDidMount() {
        if (! this.props.loggedIn) {
            return;
        }
        let userId = this.props.user.userId;
        Promise.all([
                    fetch('http://localhost:9000/users'),
                    fetch('http://localhost:9000/followers/following/' + userId),
                ]).then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                    .then(([data1, data2]) => this.setState({
                    users: data1.body,
                    following: data2
                })).then(status => this.createFollowArr());
                /*
            fetch(`http://localhost:9000/users`)
              .then(response => response.json())
               .then(this.renderUsers);
               */
    }

    keywordChanged = event => this.setState({keyword: event.target.value})


    renderUsers = (statusCode) =>
        //console.log(products)
       this.setState({
          users: statusCode.body
       })

    followUser = (followingId) => e =>{
      e.preventDefault();
      let follow = { followerId : this.props.user.userId , userId  : followingId}
       fetch("http://localhost:9000/followers",
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(follow)
        })
       .then(response => response.json())
       .then(this.setFollowing)
    }

    setFollowing = (response) => {
           this.setState({ following: response});
           this.createFollowArr();
       }

    setUsers= (response) => {
           this.setState({ users: response});
           }

   deleteUser = (userId) => e => {
    e.preventDefault();
       fetch("http://localhost:9000/users/" + userId,
        {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
       .then(response => response.json())
       .then(this.setUsers)
   }

    unFollowUser = (followingId) => e => {
        e.preventDefault();
          let follow = { followerId : this.props.user.userId , userId  : followingId}
           fetch("http://localhost:9000/followers",
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(follow)
            })
           .then(response => response.json())
           .then(this.setFollowing)
    }

    createFollowArr() {
        let fArr = [];
        let list = this.state.following;
        var i;
        for (i = 0; i < list.length; i++) {
            fArr.push(list[i].userId);
        }
         this.setState({
           followingArr: fArr
            });
    }

    render() {
        return (
        <div>
        <HeaderComponent/>
        <br/>
        {this.props.loggedIn &&

        <div className="container">
            <h2>Users</h2>
            <div className="input-group">
                <input value={this.state.keyword}  onChange={this.keywordChanged}
                     className="form-control" placeholder="keyword"/>
                <div className="input-group-append">
                    <button   className="btn btn-primary ml-2 ">
                        Filter
                    </button>
                </div>
            </div>
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Follow</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user, index) => (
                        user.firstName.includes(this.state.keyword) ?
                            <tr>
                             <td> <Link to={`/profile/${user.userId}`}> {user.firstName} {user.lastName} </Link> </td>
                             <td>
                             { (this.props.user.userId !== user.userId) &&
                               <div>
                                { this.state.followingArr.includes(user.userId)
                                ? (  <button className="btn btn-warning" onClick={this.unFollowUser(user.userId)}>Unfollow</button>)
                                : (  <button className="btn btn-primary" onClick={this.followUser(user.userId)}>Follow</button>)
                                }
                                </div>
                             }
                             </td>
                              <td>
                              { (this.props.user.userId !== user.userId) && (this.props.user.role === 'Admin') &&
                               <button className="btn btn-danger" onClick={this.deleteUser(user.userId)}>Delete</button>
                              }
                              </td>
                             </tr>
                            : null
                            )
                          )
                    }
                </tbody>
            </table>
         </div>
         }
        </div>
        )
    }
}

function mapState(state, ownProps) {
    const { authenticationReducer } = state;
    const { user , loggedIn} = authenticationReducer;
    return { user, loggedIn};
}

export default connect(mapState)(UsersComponent);