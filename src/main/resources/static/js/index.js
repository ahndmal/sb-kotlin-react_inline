// import Profile from './profile.js'
import Header from "./header.js";

console.log('Inside INDEX.js');

const root = document.querySelector('.root');
const Link = window.ReactRouterDOM.Link;
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;

// const Prompt =  window.ReactRouterDOM.Prompt;
// const Redirect = window.ReactRouterDOM.Redirect;

const App = () => (
        <div>
            <h3>TEST from React main page!</h3>
            <Header />
            <Router>
                {/*<Link to='/profile' >Profile</Link>*/}
                {/*<Profile />*/}
                <Switch>
                    {/*<Route path='/profile' component={Profile} exact={true} />*/}
                </Switch>
            </Router>
        </div>
)

ReactDOM.render(<App/>, root);