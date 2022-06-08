import React, { Component } from 'react';
import Board from './Board/Board';
import Dialog from './Tutorial/Dialog'

export default class Pathfinding extends Component {

  render() {
    return (
      <>
        <Dialog />
        <Board />
      </>
    )
  }
}