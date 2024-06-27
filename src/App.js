import AnswerDropdown from "./components/AnswerDropdown/AnswerDropdown";
import BackSection from "./components/BackSection/BackSection";
import FloatingActionButton from "./components/FAB/FloatingActionButton";
import FirstBox from "./components/FirstBox/FirstBox";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
import SecondBox from "./components/SecondBox/SecondBox";

function App() {
  return (
    <div className="App">
      <Header />
      <BackSection/>
      <FirstBox/>
      <AnswerDropdown/>
      <SecondBox/>
      {/* <Main /> */}
      <FloatingActionButton />
    </div>
  );
}

export default App;
