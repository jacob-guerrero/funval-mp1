import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import useData from "./hooks/useData";

function App() {
  const { loading, response, error } = useData("/data/stays.json");
  const [modalView, setModalView] = useState(false);
  const toggleView = () => {
    setModalView((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleView={toggleView} />
      <Main loading={loading} response={response} error={error} />
      <Modal
        toggleView={toggleView}
        modalView={modalView}
        response={response}
      />
    </>
  );
}

export default App;
