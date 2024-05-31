import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/change-color/index.jsx';
import StarRating from './components/rating-stars/index.jsx';
import ImageSlider from './components/image-slider/index.jsx';
import LoadMore from './components/load-more-button/index.jsx';
import TreeView from './components/tree-view/index.jsx';
import menu from './components/tree-view/data.js';
import QrGenerator from './components/qr-code-generator/index.jsx';
import Test from './components/test/index.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMore /> */}
      {/* <TreeView  menu={menu}/> */}
      {/* <QrGenerator /> */}
	<Test />      
    </div>
  );
}

export default App;
