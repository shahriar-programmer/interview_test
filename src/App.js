import './App.css';
import "./assets/main.css"
import NavBar from "./Components/NavBar"
import Card from "./Components/Card"
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"

function App() {
  return (
    <body className="flex flex-col px-6">
      <NavBar />
      <section className="ml-32 m-auto flex justify-start items-center mt-20">
      <Card tag="UX DESIGN" title="Wednesday Holmes: Art as an Act of Survival" author="Jonathan Doe" time="54" view="512" heart="514" img={img1}/>
        <Card tag="Graphic Design" title="21 Delightful Ideas About Graphics Design" author="Jonathan Doe" time="20" view="417" heart="554" img={img2}/>
      </section>
      <div class="h-64"></div>
    </body>
  );
}

export default App;
