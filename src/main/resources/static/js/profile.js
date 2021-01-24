
const Profile = () => {

    const [message, setMessage] = React.useState('')
    const [profiles, setProfiles] = React.useState([])

    const handleClick = () => {
        message === '' ? setMessage('Changed!') : setMessage('');
    }

    React.useEffect(() => {
        fetch('http://localhost:8080/rest/api/v1/test')
            .then(response => response.json())
            .then(response => setProfiles(response))
    }, [])

    return (
        <div>
            <div>{message === '' ? <p>No message</p> : <p>{message}</p>}</div>
            <button onClick={handleClick}>Change</button>
            <ol>
                {profiles.map(profile => (<li key={profile.id}>{profile.name}</li>))}
            </ol>
        </div>
    )
}

// export default Profile;