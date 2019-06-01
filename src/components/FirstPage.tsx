
import * as React from 'react';
import './FirstPage.css';

export interface IProps {
  name: string; // Its a required string variable
  enthusiasmLevel?: number; // Its an optional number variable
}

// function Hello({ name, enthusiasmLevel = 1 }: IProps) { // If enthusiasmLevel isn't given in IProps object, it will have default 1
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }

// export default Hello;

// // helper method

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }



// Here, Props is the type of our class's this.props, and object is the type of this.state.

class Hello extends React.Component<IProps, object> {  
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
export default Hello;

// helper method

 function getExclamationMarks(numChars: number) {
   return Array(numChars + 1).join('!');
 }
