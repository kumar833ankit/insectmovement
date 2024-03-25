// // // const navigateInsects = (req, res) => {
// // //     const { roomSize, insects } = req.body;
  
// // //     const output = navigateInsectsLogic(roomSize, insects);
  
// // //     res.json(output);
// // //   };
  
// // //   const navigateInsectsLogic = (roomSize, insects) => {
// // //     const output = [];
  
// // //     for (const insect of insects) {
// // //       let x = insect.x;
// // //       let y = insect.y;
// // //       let heading = insect.heading;
  
// // //       for (const command of insect.commands) {
// // //         switch (command) {
// // //           case 'L':
// // //             heading = turnLeft(heading);
// // //             break;
// // //           case 'R':
// // //             heading = turnRight(heading);
// // //             break;
// // //           case 'F':
// // //             const newPosition = moveForward(x, y, heading, roomSize);
// // //             x = newPosition.x;
// // //             y = newPosition.y;
// // //             break;
// // //         }
// // //       }
  
// // //       output.push(`${x} ${y} ${heading}`);
// // //     }
  
// // //     return output;
// // //   };
  
// // //   const turnLeft = (heading) => {
// // //     const headings = ['N', 'W', 'S', 'E'];
// // //     const currentIndex = headings.indexOf(heading);
// // //     const newIndex = (currentIndex - 1 + headings.length) % headings.length;
// // //     return headings[newIndex];
// // //   };
  
// // //   const turnRight = (heading) => {
// // //     const headings = ['N', 'W', 'S', 'E'];
// // //     const currentIndex = headings.indexOf(heading);
// // //     const newIndex = (currentIndex + 1) % headings.length;
// // //     return headings[newIndex];
// // //   };
  
// // //   const moveForward = (x, y, heading, roomSize) => {
// // //     const maxX = roomSize[0] - 1;
// // //     const maxY = roomSize[1] - 1;
  
// // //     switch (heading) {
// // //       case 'N':
// // //         y = Math.min(y + 1, maxY);
// // //         break;
// // //       case 'S':
// // //         y = Math.max(y - 1, 0);
// // //         break;
// // //       case 'E':
// // //         x = Math.min(x + 1, maxX);
// // //         break;
// // //       case 'W':
// // //         x = Math.max(x - 1, 0);
// // //         break;
// // //     }
  
// // //     return { x, y };
// // //   };
  
// // //   module.exports = {
// // //     navigateInsects,
// // //   };


// // // const navigateInsects = (req, res) => {
// // //   const { roomSize, insects } = req.body;

// // //   const output = navigateInsectsLogic(roomSize, insects);

// // //   res.json(output);
// // // };

// // // const navigateInsectsLogic = (roomSize, insects) => {
// // //   const output = [];

// // //   for (const insect of insects) {
// // //       let x = insect.x;
// // //       let y = insect.y;
// // //       let heading = insect.heading;

// // //       for (const command of insect.commands) {
// // //           switch (command) {
// // //               case 'L':
// // //                   heading = turnLeft(heading);
// // //                   break;
// // //               case 'R':
// // //                   heading = turnRight(heading);
// // //                   break;
// // //               case 'F':
// // //                   const newPosition = moveForward(x, y, heading, roomSize);
// // //                   x = newPosition.x;
// // //                   y = newPosition.y;
// // //                   break;
// // //           }
// // //       }

// // //       output.push(`${x} ${y} ${heading}`);
// // //   }

// // //   return output;
// // // };

// // // const turnLeft = (heading) => {
// // //   const headings = ['N', 'W', 'S', 'E'];
// // //   const currentIndex = headings.indexOf(heading);
// // //   const newIndex = (currentIndex - 1 + headings.length) % headings.length;
// // //   return headings[newIndex];
// // // };

// // // const turnRight = (heading) => {
// // //   const headings = ['N', 'W', 'S', 'E'];
// // //   const currentIndex = headings.indexOf(heading);
// // //   const newIndex = (currentIndex + 1) % headings.length;
// // //   return headings[newIndex];
// // // };

// // // // const moveForward = (x, y, heading, roomSize) => {
// // // //   const maxX = roomSize[0];
// // // //   const maxY = roomSize[1];

// // // //   switch (heading) {
// // // //       case 'N':
// // // //           y = Math.min(y + 1, maxY);
// // // //           break;
// // // //       case 'S':
// // // //           y = Math.max(y - 1, 0);
// // // //           break;
// // // //       case 'E':
// // // //           x = Math.min(x + 1, maxX);
// // // //           break;
// // // //       case 'W':
// // // //           x = Math.max(x - 1, 0);
// // // //           break;
// // // //   }
// // // const moveForward = (x, y, heading, roomSize) => {
// // //   const maxX = roomSize[0];
// // //   const maxY = roomSize[1];

// // //   switch (heading) {
// // //       case 'N':
// // //           y = Math.min(y + 1, maxY);
// // //           break;
// // //       case 'S':
// // //           y = Math.max(y - 1, 0);
// // //           break;
// // //           case 'E':
// // //             x = Math.min(x + 1, maxX);
// // //             // Check for "R" turn in remaining commands after East movement
// // //             if (remainingCommands.length > 0 && remainingCommands[0] === 'R') {
// // //               x = 0; // Force wrapping to leftmost edge if next is "Right" turn
// // //             }
// // //             break;
// // //       case 'W':
// // //         x = (x + roomSize[0] - 1) % roomSize[0];
// // //           break;
// // //   }

// // //   return { x, y };
// // // };


// // // module.exports = {
// // //   navigateInsects,
// // // };



























// // // const navigateInsects = (req, res) => {
// // //   const { roomSize, insects } = req.body;

// // //   const output = navigateInsectsLogic(roomSize, insects);

// // //   res.json(output);
// // // };

// // // const navigateInsectsLogic = (roomSize, insects) => {
// // //   const output = [];

// // //   for (const insect of insects) {
// // //     let x = insect.x;
// // //     let y = insect.y;
// // //     let heading = insect.heading;
// // //     let remainingCommands = insect.commands.split(''); // Convert commands string to character array

// // //     for (const command of remainingCommands) {
// // //       const newPosition = moveForward(x, y, heading, roomSize, remainingCommands.slice(1));
// // //       x = newPosition.x;
// // //       y = newPosition.y;
// // //       heading = turn(command, heading); // Helper function for turning (optional)
// // //       remainingCommands = remainingCommands.slice(1); // Update remaining commands
// // //     }

// // //     output.push(`${x} ${y} ${heading}`);
// // //   }

// // //   return output;
// // // };

// // // const turnLeft = (heading) => {
// // //   const headings = ['N', 'W', 'S', 'E'];
// // //   const currentIndex = headings.indexOf(heading);
// // //   const newIndex = (currentIndex - 1 + headings.length) % headings.length;
// // //   return headings[newIndex];
// // // };

// // // const turnRight = (heading) => {
// // //   const headings = ['N', 'W', 'S', 'E'];
// // //   const currentIndex = headings.indexOf(heading);
// // //   const newIndex = (currentIndex + 1) % headings.length;
// // //   return headings[newIndex];
// // // };

// // // // Helper function for turning (optional)
// // // const turn = (command, heading) => {
// // //   switch (command) {
// // //     case 'L':
// // //       return turnLeft(heading);
// // //     case 'R':
// // //       return turnRight(heading);
// // //     default:
// // //       return heading; // No change for 'F' command
// // //   }
// // // };

// // // // const moveForward = (x, y, heading, roomSize, remainingCommands) => {
// // // //   const maxX = roomSize[0];
// // // //   const maxY = roomSize[1];

// // // //   switch (heading) {
// // // //     case 'N':
// // // //       y = Math.min(y + 1, maxY);
// // // //       break;
// // // //     case 'S':
// // // //       // Check for remaining "East" commands after "Right" turn
// // // //       if (remainingCommands.length > 0 && remainingCommands[0] === 'E') {
// // // //         y = Math.max(y - 1, 0); // Adjust for potential overshoot from "East" after "Right"
// // // //       } else {
// // // //         y = Math.max(y - 1, 0);
// // // //       }
// // // //       break;
// // // //     case 'E':
// // // //       x = Math.min(x + 1, maxX);
// // // //       // Check for "R" turn in remaining commands after East movement
// // // //       if (remainingCommands.length > 0 && remainingCommands[0] === 'R') {
// // // //         x = 0; // Force wrapping to leftmost edge if next is "Right" turn
// // // //       }
// // // //       break;
// // // //     case 'W':
// // // //       x = (x + roomSize[0] - 1) % roomSize[0];
// // // //       break;
// // // //   }

// // // //   return { x, y };
// // // // };
// // // const moveForward = (x, y, heading, roomSize, remainingCommands) => {
// // //   const maxX = roomSize[0];
// // //   const maxY = roomSize[1];

// // //   switch (heading) {
// // //     case 'N':
// // //       y = Math.min(y + 1, maxY);
// // //       break;
// // //     case 'S':
// // //       y = Math.max(y - 1, 0);
// // //       break;
// // //     case 'E':
// // //       x = Math.min(x + 1, maxX);
// // //       break;
// // //     case 'W':
// // //       x = Math.max(x - 1, 0);
// // //       break;
// // //   }

// // //   return { x, y };
// // // };

// // // module.exports = {
// // //   navigateInsects,
// // // };









// // // const navigateInsects = (req, res) => {
// // //   const { roomSize, insects } = req.body;

// // //   const output = navigateInsectsLogic(roomSize, insects);

// // //   res.json(output);
// // // };

// // // const navigateInsectsLogic = (roomSize, insects) => {
// // //   const output = [];

// // //   for (const insect of insects) {
// // //     let x = insect.x;
// // //     let y = insect.y;
// // //     let heading = insect.heading;
// // //     let remainingCommands = insect.commands.split(''); // Convert commands string to character array

// // //     while (remainingCommands.length > 0) {
// // //       const command = remainingCommands.shift();
// // //       const newPosition = moveForward(x, y, heading, roomSize);
// // //       x = newPosition.x;
// // //       y = newPosition.y;
// // //       heading = turn(command, heading); // Helper function for turning (optional)
// // //     }

// // //     output.push(`${x} ${y} ${heading}`);
// // //   }

// // //   return output;
// // // };

// // // const turnLeft = (heading) => {
// // //   const headings = ['N', 'W', 'S', 'E'];
// // //   const currentIndex = headings.indexOf(heading);
// // //   const newIndex = (currentIndex - 1 + headings.length) % headings.length;
// // //   return headings[newIndex];
// // // };

// // // const turnRight = (heading) => {
// // //   const headings = ['N', 'W', 'S', 'E'];
// // //   const currentIndex = headings.indexOf(heading);
// // //   const newIndex = (currentIndex + 1) % headings.length;
// // //   return headings[newIndex];
// // // };

// // // const turn = (command, heading) => {
// // //   switch (command) {
// // //     case 'L':
// // //       return turnLeft(heading);
// // //     case 'R':
// // //       return turnRight(heading);
// // //     default:
// // //       return heading; // No change for 'F' command
// // //   }
// // // };

// // // const moveForward = (x, y, heading, roomSize) => {
// // //   const maxX = roomSize[0] - 1;
// // //   const maxY = roomSize[1] - 1;

// // //   switch (heading) {
// // //     case 'N':
// // //       y = Math.min(y + 1, maxY);
// // //       break;
// // //     case 'S':
// // //       y = Math.max(y - 1, 0);
// // //       break;
// // //     case 'E':
// // //       x = Math.min(x + 1, maxX);
// // //       break;
// // //     case 'W':
// // //       x = (x > 0) ? x - 1 : maxX;
// // //       break;
// // //   }

// // //   return { x, y };
// // // };

// // // module.exports = {
// // //   navigateInsects,
// // // };


// // const navigateInsects = (req, res) => {
// //   const { roomSize, insects } = req.body;

// //   const output = navigateInsectsLogic(roomSize, insects);

// //   res.json(output);
// // };

// // const navigateInsectsLogic = (roomSize, insects) => {
// //   const output = [];

// //   for (const insect of insects) {
// //     let x = insect.x;
// //     let y = insect.y;
// //     let heading = insect.heading;
// //     let remainingCommands = insect.commands.split(''); // Convert commands string to character array

// //     while (remainingCommands.length > 0) {
// //       const command = remainingCommands.shift();
// //       const newPosition = moveForward(x, y, heading, roomSize, remainingCommands);
// //       x = newPosition.x;
// //       y = newPosition.y;
// //       heading = turn(command, heading);
// //     }

// //     output.push(`${x} ${y} ${heading}`);
// //   }

// //   return output;
// // };

// // const turnLeft = (heading) => {
// //   const headings = ['N', 'W', 'S', 'E'];
// //   const currentIndex = headings.indexOf(heading);
// //   const newIndex = (currentIndex - 1 + headings.length) % headings.length;
// //   return headings[newIndex];
// // };

// // const turnRight = (heading) => {
// //   const headings = ['N', 'W', 'S', 'E'];
// //   const currentIndex = headings.indexOf(heading);
// //   const newIndex = (currentIndex + 1) % headings.length;
// //   return headings[newIndex];
// // };

// // const turn = (command, heading) => {
// //   switch (command) {
// //     case 'L':
// //       return turnLeft(heading);
// //     case 'R':
// //       return turnRight(heading);
// //     default:
// //       return heading; // No change for 'F' command
// //   }
// // };
// // const moveForward = (x, y, heading, roomSize, remainingCommands) => {
// //   const maxX = roomSize[0];
// //   const maxY = roomSize[1];

// //   switch (heading) {
// //       case 'N':
// //           y = Math.min(y + 1, maxY);
// //           break;
// //       case 'S':
// //           // Check for remaining "East" commands after "Right" turn
// //           if (remainingCommands.length > 0 && remainingCommands[0] === 'E') {
// //               y = Math.max(y - 1, 0); // Adjust for potential overshoot from "East" after "Right"
// //           } else {
// //               y = Math.max(y - 1, 0);
// //           }
// //           break;
// //       case 'E':
// //           x = Math.min(x + 1, maxX);
// //           // Check for "R" turn in remaining commands after East movement
// //           if (remainingCommands.length > 0 && remainingCommands[0] === 'R') {
// //               x = 0; // Force wrapping to leftmost edge if next is "Right" turn
// //           }
// //           break;
// //       case 'W':
// //           x = (x + roomSize[0] - 1) % roomSize[0];
// //           break;
// //   }

// //   return { x, y };
// // };

// // module.exports = {
// //   navigateInsects,
// // };




// const navigateInsects = (req, res) => {
//   const { roomSize, insects } = req.body;

//   const output = navigateInsectsLogic(roomSize, insects);

//   res.json(output);
// };

// const navigateInsectsLogic = (roomSize, insects) => {
//   const output = [];

//   for (const insect of insects) {
//       let x = insect.x;
//       let y = insect.y;
//       let heading = insect.heading;

//       for (const command of insect.commands) {
//           switch (command) {
//               case 'L':
//                   heading = turnLeft(heading);
//                   break;
//               case 'R':
//                   heading = turnRight(heading);
//                   break;
//               case 'F':
//                   const newPosition = moveForward(x, y, heading, roomSize);
//                   x = newPosition.x;
//                   y = newPosition.y;
//                   break;
//           }
//       }

//       output.push(`${x} ${y} ${heading}`);
//   }

//   return output;
// };

// const turnLeft = (heading) => {
//   const headings = ['N', 'W', 'S', 'E'];
//   const currentIndex = headings.indexOf(heading);
//   const newIndex = (currentIndex - 1 + headings.length) % headings.length;
//   return headings[newIndex];
// };

// const turnRight = (heading) => {
//   const headings = ['N', 'W', 'S', 'E'];
//   const currentIndex = headings.indexOf(heading);
//   const newIndex = (currentIndex + 1) % headings.length;
//   return headings[newIndex];
// };

// const moveForward = (x, y, heading, roomSize) => {
//   const maxX = roomSize[0] - 1;
//   const maxY = roomSize[1] - 1;

//   switch (heading) {
//       case 'N':
//           y = Math.min(y + 1, maxY);
//           break;
//       case 'S':
//           y = Math.max(y - 1, 0);
//           break;
//       case 'E':
//           x = Math.min(x + 1, maxX);
//           break;
//       case 'W':
//           x = Math.max(x - 1, 0);
//           break;
//   }

//   return { x, y };
// };

// module.exports = {
//   navigateInsects,
// };
const navigateInsects = (req, res) => {
  const { roomSize, insects } = req.body;

  const output = navigateInsectsLogic(roomSize, insects);

  res.json(output);
};

const navigateInsectsLogic = (roomSize, insects) => {
  const output = [];

  for (const insect of insects) {
      let x = insect.x;
      let y = insect.y;
      let heading = insect.heading;

      for (const command of insect.commands) {
          switch (command) {
              case 'L':
                  heading = turnLeft(heading);
                  break;
              case 'R':
                  heading = turnRight(heading);
                  break;
              case 'F':
                  const newPosition = moveForward(x, y, heading, roomSize);
                  x = newPosition.x;
                  y = newPosition.y;
                  break;
          }
      }

      output.push(`${x} ${y} ${heading}`);
  }

  return output;
};

const turnLeft = (heading) => {
  const headings = ['N', 'W', 'S', 'E'];
  const currentIndex = headings.indexOf(heading);
  const newIndex = (currentIndex - 1 + headings.length) % headings.length;
  return headings[newIndex];
};

const turnRight = (heading) => {
  const headings = ['N', 'W', 'S', 'E'];
  const currentIndex = headings.indexOf(heading);
  const newIndex = (currentIndex + 1) % headings.length;
  return headings[newIndex];
};

const moveForward = (x, y, heading, roomSize) => {
  const maxX = roomSize[0] - 1;
  const maxY = roomSize[1] - 1;

  switch (heading) {
      case 'N':
          y = Math.min(y + 1, maxY);
          break;
      case 'S':
          y = Math.max(y - 1, 0);
          break;
      case 'E':
          x = Math.min(x + 1, maxX);
          break;
      case 'W':
          x = Math.max(x - 1, 0);
          break;
  }

  return { x, y };
};

module.exports = {
  navigateInsects,
};
