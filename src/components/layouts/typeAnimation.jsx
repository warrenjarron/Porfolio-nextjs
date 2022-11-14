import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        'front-end', // Types 'One'
        1000, // Waits 1s
        'web designer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Graphiste', // Types 'Three' without deleting 'Two'
        1000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity} />
      );
    };
      export default Typing ;