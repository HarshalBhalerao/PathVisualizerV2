import React, { useEffect, useState } from "react";
import "./tutorial.css";

const Tutorial = ({ setOpenModal }) => {
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("Welcome to the Pathfinding Visualizer");
  let [paragraph, setParagraph] = useState("");
  let [paragraphStyle, setParagraphStyle] = useState("");
  let [image, setImage] = useState("modalPicture");
  let [imageExist, setImageExist] = useState(true);
  let [disablePrev, setDisablePrev] = useState(true);
  let [disableNext, setDisableNext] = useState(false);

  const changeContent = (count) => {
    setCount(count);
    if (count === 0) {
      setImageExist(true);
      setTitle("Welcome to the Pathfinding Visualizer");
      setImage("modalPicture");
      setDisablePrev(true);
    }
    if (count === 1) {
      setImageExist(false);
      setDisablePrev(false);
      setDisableNext(false);
      setTitle("Algorithms Used");
      setParagraphStyle("algorithms");
      setParagraph(<ul><li><b>Dijkstra</b>: It is a greedy algorithm which finds the shortest path possible by prioritizing visiting nodes with the smallest known cost. This algorithm is known for having big fills and it searched the entire graph indiscriminately for the shortest possible route. Thus, making it wasteful for point-to-point pathfinding.</li>
      <li><b>A* Algorithm</b>: Searches the entire graph for the shortest possible route using <b>Manhattan Distance(Heuristic)</b>. Most efficient algorithm implemented in AI Characters in games. For example: Going from one point in the map to another, movement planning of a character (animations), Goal-Oriented behaviour of a AI character, etc. The algorithm gets used for many real world situations like route planning on Google Maps, and in Robotics to navigate around obstacles and get to the goal as soon as possible.</li></ul>);
    }
    if (count === 2) {
      setImageExist(false);
      setDisablePrev(false);
      setDisableNext(false);
      setTitle("Algorithms Used");
      setParagraphStyle("algorithms");
      setParagraph(<ul><li><b>DFS (Depth First Search)</b>: It is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.</li><li><b>BFS (Breadth First Search)</b>: This algorithm is used to search a tree or graph data structure for a node that meets a set of criteria. It starts at the tree’s root or graph and searches/visits all nodes at the current depth level before moving on to the nodes at the next depth level.</li></ul>);
    }
    if(count === 3){
      setImageExist(false);
      setDisablePrev(false);
      setDisableNext(false);
      setTitle("Different types of mazes available");
      setParagraphStyle("paragraph");
      setParagraph(<ol><li>Horizontal Maze</li><li>Random Wall Maze</li><li>Vertical Maze</li><li>Recursive Division Maze</li></ol>);
    }
    if(count === 4){
      setImageExist(false);
      setDisablePrev(false);
      setDisableNext(true);
      setTitle("How to use this app?");
      setParagraphStyle("algorithms");
      setParagraph(<ul><li><b>Change Node Positions</b>: Drag nodes around using mouse.</li><li><b>Use tooltip</b>: Hover over any button with your mouse and it will help you understand what that button exactly does.</li><li><b>Custom mazes</b>: You can create your own custom maze by holding down mouse on the grid and walls will be placed in those positions.</li><li>It is quite simple. Check out the project here on my <a href = "https://github.com/HarshalBhalerao/PathVisualizerV2">GitHub</a> Page.</li></ul>);
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">
          {imageExist ? <img className={image} /> : <div className = {paragraphStyle}>{paragraph}</div>}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Skip Tutorial
          </button>
          <button
            onClick={() => {
              if(count - 1 >= 0){
                changeContent(count - 1);
              }
            }}
            id="prevBtn"
            disabled={disablePrev}
          >
            Previous Page
          </button>
          <button
            onClick={() => {
              if(count + 1 <= 4){
                changeContent(count + 1);
              }
            }}
            disabled={disableNext}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
