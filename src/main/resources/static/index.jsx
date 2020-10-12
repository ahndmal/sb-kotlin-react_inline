const root = document.querySelector('.root')
// import Profile from "./Profile";
const Profile = () => {

    const [message, setMessage] = React.useState('')
    const [profiles, setProfiles] = React.useState([])

    const handleClick = () => {
        if (message === '') {
            setMessage('Changed!')
        } else setMessage('')
    }

    React.useEffect(() => {
        fetch('http://localhost:8080/rest/api/v1/test')
            .then(response => response.json())
            .then(response => setProfiles(response))
    }, [])

    return (
        <div>
            <p>{message === '' ? <p>No message</p> : message}</p>
            <button onClick={handleClick}>Change</button>
            <ol>
                {profiles.map(profile => (<li key={profile.id}>{profile.name}</li>))}
            </ol>
        </div>
    )
}

const App = () => (
    <div>
        <Profile />
        {/*<Switch>*/}
        {/*    <Route path='/profile' component={Profile} />*/}
        {/*</Switch>*/}
    </div>
)

ReactDOM.render(<App/>, root)