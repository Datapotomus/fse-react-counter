count: (state.count > 0 ? state.count - 1 : state.count = 0)

checkInitialCount = () =>{
  if (!this.props.intialCount){
    this.state.count = 0
  }
}

if(this.props.intialCount){
  this.state.count = this.props.intialCount
  }

  if(this.props.intialCount){
    this.state.count = this.props.intialCount
    }

    resetButton = () => {
      if (this.state.countModified){
        return <button onClick={this.resetHandler}>Reset</button>;
      }
    }