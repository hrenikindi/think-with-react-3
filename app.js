class Container extends React.Component {
    render() {
        return (
            <div>
                Hey Kalvians
                <div>Let's rock and roll with classes</div>
            </div>
        );
    }
}

const container = document.getElementById('container');
ReactDOM.render(<Container />, container);
