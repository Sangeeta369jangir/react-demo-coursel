import images from "./image";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

  
const App = () => {
  return (
    <div className="App">
      <Navbar />
    <ImageSlider images={images}/>
  </div>
  )
}
  
export default App;
