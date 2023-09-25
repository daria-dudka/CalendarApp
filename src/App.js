import Calendar from './components/Calendar/Calendar';
import logo from './assets/logo.png';

function App() {
  return (
    <div className='app'>
      <img className='logo' src={logo} alt='CodelittLogo' />
      <Calendar />
    </div>
  );
}

export default App;
