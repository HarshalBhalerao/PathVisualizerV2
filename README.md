# Pathfinding Visualizer

This project has been created using React, JavaScript and CSS. It aims to provide a interactive fun way to learn more about these popular pathfinding algorithms such as Dijkstra, A*, BFS, and DFS. 

These algorithms get used in our day-to-day life for finding the shortest route from one point to another. For example, Google Maps uses Dijkstra and A* for finding the shortest route between two locations. Games use these algorithms to find the shortest route between one point on the navigation mesh to another, this is how certain AI characters who are chasing the player navigate around narrow corridors and corners, this avoids them from making wrong path decisions.

## Algorithms implemented

- **`Dijkstra`**: It is a greedy algorithm which finds the shortest path possible by prioritizing visiting nodes with the smallest known cost. This algorithm is known for having big fills and it searched the entire graph indiscriminately for the shortest possible route. Thus, making it wasteful for point-to-point pathfinding.
- **`A* Algorithm`**: Searches the entire graph for the shortest possible route using **Manhattan Distance(Heuristic)**. Most efficient algorithm implemented in AI Characters in games. For example: Going from one point in the map to another, movement planning of a character (animations), Goal-Oriented behaviour of a AI character, etc. The algorithm gets used for many real world situations like route planning on Google Maps, and in Robotics to navigate around obstacles and get to the goal as soon as possible.
- **`DFS (Depth First Search)`**: It is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.
- **`BFS (Breadth First Search)`**: This algorithm is used to search a tree or graph data structure for a node that meets a set of criteria. It starts at the tree’s root or graph and searches/visits all nodes at the current depth level before moving on to the nodes at the next depth level.

## Maze Algorithms implemented

- Horizontal Maze
- Random Wall Maze
- Vertical Maze
- Recursive Division Maze

## How to use this app?

- **Change Node Positions**: Drag nodes around using mouse.
- **Use tooltip**: Hover over any button with your mouse and it will help you understand what that button exactly does.
- **Custom mazes**: You can create your own custom maze by holding down mouse on the grid and walls will be placed in those positions.


