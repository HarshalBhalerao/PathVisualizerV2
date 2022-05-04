import React, { Component } from 'react'
import './Node.css'

export default class Node extends Component {
  render() {
    //Declaring properties of a node
    const {
      row,
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
    } = this.props;

    // Getting node name for different kinds of nodes. If the node is a wall then isWall triggers and the node name is node-wall
    const nodeClassName = isFinish
      ? 'node-finish'
      : isStart
        ? 'node-start'
        : isWall
          ? 'node-wall'
          : '';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${nodeClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    )
  }
}