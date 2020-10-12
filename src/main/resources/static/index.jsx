const root = document.querySelector('.root')
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false, message: ''}
    }

    handleClick = () => {
        this.setState((state) => ({message: 'Changed!'}))
    }

    render() {
        return (
            <div>
                <p>{this.state.message === '' ? <p>No message</p> : this.state.message}</p>
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}
ReactDOM.render(<Profile />, root)