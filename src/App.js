import './App.css';
import {Player, PlayerStateContextProvider, AnnotationsContextProvider } from '@mycujoo/player-mls'


// https://www.npmjs.com/package/@mycujoo/player-mls

// Had to install
// yarn add @mycujoo/player-mls
// yarn install @emotion/react
// And move Player {PlayerStateContextProvider} inside the {}  {Player, PlayerStateContextProvider, AnnotationsContextProvider }


// Advanced https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8
// Baisc https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8
function App() {
  return (
    <div className="App">

      <PlayerStateContextProvider>
    <AnnotationsContextProvider>
      <Player
      autoplay={true}
      qualitySelector={true}
      
      source="https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8" />
    </AnnotationsContextProvider>
  </PlayerStateContextProvider>
      
    </div>
  );
}

export default App;
