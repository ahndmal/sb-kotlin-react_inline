// import Profile from './profile.js'

const root = document.querySelector('.root');
// import ProfileOld from "./ProfileOld";

const App = () => (
    <div>
        <h3>TEST from React!!</h3>
        <Profile />
        {/*<Switch>*/}
        {/*    <Route path='/profile' component={ProfileOld} />*/}
        {/*</Switch>*/}
    </div>
)

ReactDOM.render(<App/>, root);