import React, { Component } from 'react'

class AnimalFlashcard extends Component {
  constructor(props){
    super(props)
    this.state = {
      kitty: "",
      tracker: [],
      allkitties: []
    }
    console.log("Hi from Constructor AnimalFlashcard")
  }

  static getDerivedStateFromProps = (props, state) => {
      console.log("Hi from gDSFP AnimalFlashcard")
      if (!state.tracker.includes(props.trackingId)){
        return {
          kitty: props.chosenKitty,
          tracker: [...state.tracker, props.trackingId]
        }
      }
      return null
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("Hi from should? AnimalFlashcard")
    console.log(!this.state.tracker.includes(nextProps.trackingId))
    return !this.state.tracker.includes(nextProps.trackingId)
  }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //  // typical use case is for scroll position
  //  console.log("snapshotting")
  //  return prevProps.chosenKitty
  // }
  //
  // componentDidUpdate = (props, state, snapshot) => {
  //   console.log("Hi from CDU Flashcard with snapshot: " + snapshot)
  // }

  componentDidMount = () => {
    console.log("Hi from componentDidMount AnimalFlashcard")
  }

  componentWillUnmount() {
    console.log("AnimalFlashcard Unmounted!")
  }

  render() {
    console.log("Hi from Render AnimalFlashcard")
    const renderChosenKitties = this.state.tracker.sort((a, b) => a - b).map(id => id !== 0 ? <li key={id}>{id}</li> : null)
    return (
      <div>
        <img src={this.state.kitty} alt="kitty"/>
        <h2>{this.state.tracker.length - 1} Kitteh</h2>
        <div id="chosen-ones">{renderChosenKitties}</div>
      </div>
    )
  }
}

export default AnimalFlashcard
