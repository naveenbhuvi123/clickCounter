import React from 'react'

class ClickCounter extends React.Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="counter-heading">
          The Button has been clicked
          <br />
          <span className="counter-num">{count}</span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
