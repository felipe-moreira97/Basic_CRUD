import './App.css';
import Provider from './Context/provider';
import Routes from './routes/routes';
function App() {
  return (
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}
export default App;
