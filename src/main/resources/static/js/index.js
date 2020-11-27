// import Profile from './profile.js'

const root = document.querySelector('.root');

const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const App = () => (
    <Router>
        <div>
            <h3>TEST from React main page!</h3>
            {/*<Profile />*/}
            <Switch>
                <Route path='/profile' component={Profile} exact={true} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(<App/>, root);