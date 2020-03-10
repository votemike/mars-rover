module.exports = (input) => {
  const parts = input.split('\n');
  const plateauSize = parts.shift();
  const rovers = [];

  while (parts.length) {
    rovers.push({coords: parts.shift(), movements: parts.shift()});
  }

  rovers.forEach(rover => {
    const coords = rover.coords.split(' ');
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    let orientation = coords[2];
    rover.movements.split('').forEach(movement => {
      if (movement === 'M') {
        if (orientation === 'N') {
          y += 1;
        } else if (orientation === 'E') {
          x += 1;
        } else if (orientation === 'S') {
          y -= 1;
        } else if (orientation === 'W') {
          x -= 1;
        }
      } else if (movement === 'R') {
        if (orientation === 'N') {
          orientation = 'E';
        } else if (orientation === 'E') {
          orientation = 'S';
        } else if (orientation === 'S') {
          orientation = 'W';
        } else if (orientation === 'W') {
          orientation = 'N';
        }
      } else if (movement === 'L') {
        if (orientation === 'N') {
          orientation = 'W';
        } else if (orientation === 'W') {
          orientation = 'S';
        } else if (orientation === 'S') {
          orientation = 'E';
        } else if (orientation === 'E') {
          orientation = 'N';
        }
      }
    });

    rover.coords = [x, y, orientation].join(' ');
  });

  return rovers.map(rover => {
    return rover.coords;
  }).join('\n');
};
