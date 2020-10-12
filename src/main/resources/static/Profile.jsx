export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false, message: '', profiles: []}
    }

    handleClick = () => {
        if (this.state.message === '') {
            this.setState((state) => ({message: 'Changed!'}))
        } else this.setState((state) => ({message: ''}))
    }

    componentDidMount() {
        fetch('http://localhost:8080/rest/api/v1/test')
            .then(response => response.json())
            .then(response => this.setState((state) => ({profiles: response})))
    }

    render() {
        return (
            <div>
                <p>{this.state.message === '' ? <p>No message</p> : this.state.message}</p>
                <button onClick={this.handleClick}>Change</button>
                <ol>
                    {this.state.profiles.map(profile => (<li key={profile.id}>{profile.name}</li>))}
                </ol>
            </div>
        )
    }
}