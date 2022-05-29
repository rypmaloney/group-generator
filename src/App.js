import './App.scss';
import TeamList from './components/TeamList';
import Header from './components/Header';
import GroupMaker from './components/GroupMaker';

function App() {
  return (
    <div className="App">
      <h1>Fishtank Grouper</h1>
      <header className="App-header">
        <Header />
      </header>
      <main>
        <TeamList />
        <GroupMaker />
      </main>
    </div>
  );
}

export default App;
