class Counter extends React.Component {
  /*
  Adding a constructor so we can set our initial state
  */
  constructor(props) {
    //let the parent class do its thing with props
    super(props);
    //setup the initial value for count in state
    this.state = {
      count: 0
    }
  }
  //simple render method just displaying the count
  render() {
    return (
      <div> 
        {this.state.count}
      </div>
      )}
}

// This works.
count: (state.count > 0 ? state.count - 1 : state.count = 0)

