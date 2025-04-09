import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const [modalView, setModalView] = useState(false);
  const toggleView = () => {
    setModalView((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleView={toggleView} />
      <Main />
      <Modal toggleView={toggleView} modalView={modalView} />
    </>
  );
}

export default App;
