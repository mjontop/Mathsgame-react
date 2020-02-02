class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            score: 0,
            response: " ",
            incorrect: false
        }
    }

    render() {
        if (this.state.score < 5) {
            return this.renderProblem()
        } else {
            return this.renderWin()
        }
    }

    renderProblem() {
        return (
            <div>
                <h1 className={this.state.incorrect ? "incorrect" : ""}>
                    {" "}
                    {this.state.num1} + {this.state.num2}{" "}
                </h1>
                <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response} />
                <div>Score: {this.state.score}</div>
            </div>
        )
    }

    renderWin() {
        navigator.vibrate([100,200,100])
        return <h1>Congratulations! You Won </h1>
    }

    updateResponse = event => {
        this.setState({
            response: event.target.value
        })
    }

    inputKeyPress = event => {
        if (event.key === "Enter") {
            const answer = parseInt(this.state.response)

            // right Answer
            if (answer === this.state.num1 + this.state.num2) {
                this.setState(state => ({
                    score: state.score + 1,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: "",
                    incorrect: false
                }))
            }
            // Wrong Answer
            else {
                navigator.vibrate(1000)
                this.setState(state => ({
                    response: "",
                    incorrect: true
                }))
            }
        }
    }
} // class ends
ReactDOM.render(<App />, document.querySelector("#app")) //can use getElementByID("app")
