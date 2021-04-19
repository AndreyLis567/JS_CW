const maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]];

function mazeRunner(maze, directions) {
   let cursor;
   for ( let i = 0; i < maze.length; i++) {
      for( let j = 0; j < maze.length; i++) {
         if (maze[i][j] === 2) {
            cursor = [i, j]
            break;
         }
      }
   }
   let [y, x] = cursor 
   for ( let i = 0; i < directions.length; i++) {
      if (directions[i] === 'N') {
         y -= 1
      }
      if (directions[i] === 'S') {
         y += 1
      }
      if (directions[i] === 'E') {
         x -= 1
      }
      if (directions[i] === 'W') {
         x += 1
      }
      if ( maze[y] === undefined || maze[y][x] === undefined) {
         return 'dead'
      }
      if ( maze[y][x] === 3) {
         return 'finish'
      }
      if (maze[y][x] === 0) {
         continue;
      }
      if (maze[y][x] === 1) {
         return "Dead";
      }
   }
   return 'lost'
}