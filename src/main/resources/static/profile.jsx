const root = document.querySelector('.root')
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
    }
    render() {
        return <div>In the class!</div>
    }
}

ReactDOM.render(<Profile />, root)