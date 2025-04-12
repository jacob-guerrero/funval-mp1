import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import useData from "./hooks/useData";

function App() {
  const { loading, response, error } = useData("/data/stays.json");
  const [staysView, setStaysView] = useState([]);
  const [modalView, setModalView] = useState(false);
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);

  useEffect(() => {
    response && setStaysView(response);
  }, [response]);

  const toggleView = () => {
    setModalView((prevState) => !prevState);
  };

  function filterResults(arr, locationValue, guestValue) {
    if (!locationValue && !guestValue) {
      return arr;
    }

    let filteredResult = [];
    if (locationValue) {
      filteredResult = arr.filter((item) => item.city === locationValue);
      if (guestValue) {
        filteredResult = filteredResult.filter(
          (item) => item.maxGuests >= guestValue
        );
      }
    } else if (guestValue) {
      filteredResult = arr.filter((item) => item.maxGuests >= guestValue);
    }

    return filteredResult;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const locationValue = formData.get("location").split(",")[0];
    const guestValue = +formData.get("guest").split(" ")[0];

    console.log(locationValue, guestValue);
    const filteredArr = filterResults(response, locationValue, guestValue);
    console.log(filteredArr);
    setStaysView(filteredArr);
    toggleView();
  };

  return (
    <>
      <Header toggleView={toggleView} />
      <Main loading={loading} response={staysView} error={error} />
      <Modal
        toggleView={toggleView}
        modalView={modalView}
        response={response}
        countAdult={countAdult}
        setCountAdult={setCountAdult}
        countChildren={countChildren}
        setCountChildren={setCountChildren}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
