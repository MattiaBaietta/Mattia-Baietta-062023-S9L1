import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ImageComponent';

import Button from './components/ButtonComponents';
function App() {
  return (
    <div className="App">
      
      <Button testo="ciao"/>
      <ClassComponent src="https://www.backmarket.it/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/943afa80-1922-43de-a7d9-8c1b4294a727-1_57539676-9a3c-465d-85d8-5a8f811d04dc.jpg" alt="immagine iphone"/>
    </div>
  );
}

export default App;
