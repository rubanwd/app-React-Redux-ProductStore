import React, { Component } from 'react';
import getData from './api/getData';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';








const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <nav>
          <li>
              <a href="/users/add">Users Add</a>
          </li>
          <li>
              <a href="/users">Users</a>
          </li>
      </nav>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/add" component={UserAddPage} />
        <Route path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)



// class PrimaryLayout extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }

//     componentDidMount() {

//         getData()
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     items: result
//                 });
//             },
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 });
//             }
//         )

//     }

//     // render() {

//     //     const { error, isLoaded, items } = this.state;

//     //     if (error) {
//     //         return <div>Error: {error.message}</div>;
//     //     } else if (!isLoaded) {
//     //         return <div>Loading...</div>;
//     //     } else {
//     //         return (
//     //             <ul>
//     //                 {items.map(item => (
//     //                     <li key={item.name}>
//     //                         {item.name} {item.price}
//     //                     </li>
//     //                 ))}
//     //             </ul>
//     //         );
//     //     }
//     // }

//     render() {
//         return (
//           <Router history={history}>
//             <Route path='/' component={Home} />
//             <Route path='/address' component={Address} />
//           </Router>
//         )
//       }
// }

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>
const UserAddPage = () => <div>User Add Page</div>


const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;
