import './App.css';
import {Cc} from './card/TabCardGrid.js';
import tw from 'twin.macro'
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic`;
function App() {
  return (
    <Cc
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
  );
}

export default App;
