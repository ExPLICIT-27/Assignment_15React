import { Header } from "../Components/Header";
import { Content } from "../Components/Content";
import { Footer } from "../Components/Footer";
import { Counter } from "../Components/Counter";
import { Counter2 } from "../Components/Counter2";
import LifeCycleDemo from "../Components/LifeCycleDemo";
import { Q7JokeFetcher } from "../Components/Q7JokeFetcher";
import { Q8UseRef } from "../Components/Q8UseRef";
import Q9MainContext from "../Components/Q9MainContext.jsx";
import { Q10parent } from "../Components/Q10parent";
import { Question2StyledButton } from "../Components/Question2StyledButton.jsx";
import { Q12FormValidation } from "../Components/Q12FormValidation.jsx";
import "./App.css";
function App() {
  return (
    <div className="Mainsection">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      <Question2StyledButton />
      <Counter></Counter>
      <Counter2></Counter2>
      <LifeCycleDemo></LifeCycleDemo>
      <Q7JokeFetcher />
      <Q8UseRef />
      <Q9MainContext></Q9MainContext>
      <Q10parent />
      <Q12FormValidation />
    </div>
  );
}
export default App;
