class grid {
  constructor(props) {
    this.width = props.width;
    this.height = props.heigth;
    this.grid = props.grid;
    this.currentPosition = props.currentPosition;
  }

  checkBoundaries(x,y) {
    return x >props.width || x<0 || y>props.height || y<0;
  }

  checkPosition(x,y) {
    return this.grid[x][y].canMove;
  }

  move(x, y) {
    if (this.checkBoundaries(x,y) && checkPosition(x,y)) {
      this.currentPosition = { x, y};
    }
  }
}