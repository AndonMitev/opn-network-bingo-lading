import './App.css';

import First from './assets/1.jpg';
import Second from './assets/2.jpg';
import Third from './assets/3.jpg';
import Fourth from './assets/4.jpg';
import Fifth from './assets/5.jpg';
import Sixth from './assets/6.jpg';
import Seventh from './assets/7.jpg';
import Eight from './assets/8.jpg';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
          <img src={First} alt='first' style={{ width: '10%', borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }} />
          <img src={Second} alt='second' style={{ width: '10%' }} />
          <img src={Third} alt='third' style={{ width: '10%' }} />
          <img src={Fourth} alt='fourth' style={{ width: '10%' }} />
          <img src={Fifth} alt='fifth' style={{ width: '10%' }} />
          <img src={Sixth} alt='sixth' style={{ width: '10%' }} />
          <img src={Seventh} alt='seventh' style={{ width: '10%' }} />
          <img src={Eight} alt='eight' style={{ width: '10%', borderTopRightRadius: 30, borderBottomRightRadius: 30 }} />
        </div>
        <h1 style={{ color: 'white' }}>OPN Network Bingo Game</h1>
        <p style={{ width: '50%', textAlign: 'center', color: 'white' }}>Get ready for a bingo extravaganza! Introducing OPN Network Bingo, the ultimate combination of excitement and chance. Play with the classic bingo game but with a twist of OPN Network letters, which can make you win big! OPN Network Bingo is the perfect way to experience the thrill of bingo like never before. Get your cards now and join the fun! Play OPN Network Bingo today, exclusively on the OPN ME Wallet!</p>
        <p style={{ color: 'white' }}>Download for ios: <span style={{ color: 'lightblue' }}>[ IOS Link ]</span></p>
        <p style={{ color: 'white' }}>Download for android:  <span style={{ color: 'lightblue' }}>[ Android Link ]</span></p>
      </div>
    </div>
  );
}

export default App;
