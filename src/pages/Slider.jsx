import { useEffect, useState } from "react";
import styles from "../Styles/landing.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { error } from "../Utils/notification";

function Slider() {
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [date, setdate] = useState("");
  const [showName, setShowNames] = useState(false);
  const [showNamedes, setShowNamesdes] = useState(false);
  const [output, setOutput] = useState([]);
  const [outputdes, setOutputdes] = useState([]);
  const [dateinfo, setdateinfo] = useState({});
  const [cityClicked, setCityclicked] = useState(false);
  const [CityDesclicked, setCityDesclicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let mindate = new Date().toISOString().split("T")[0];
    let maxdate = new Date().toISOString().split("T")[0];
    setdate(mindate);
    setdateinfo({
      ...dateinfo,
      mindate: mindate,
      maxdate: maxdate,
    });
  }, []);

  useEffect(() => {
    if (source === "") {
      setShowNames(false);
      return;
    }
    if (cityClicked === true) {
      setCityclicked(false);
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequest();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [source]);

  useEffect(() => {
    if (destination === "") {
      setShowNamesdes(false);
      return;
    }
    if (CityDesclicked === true) {
      setCityDesclicked(false);
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequestdes();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [destination]);

  const handleGetRequest = async () => {
    try {
      let res = await axios.post("https://blue-bus.onrender.com/city", {
        source,
      });
      res = res.data;
      setOutput(res);
      setShowNames(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetRequestdes = async () => {
    try {
      let res = await axios.post("https://blue-bus.onrender.com/city", {
        destination,
      });
      res = res.data;
      setOutputdes(res);
      setShowNamesdes(true);
    } catch (err) {
      console.log(err);
    }
  };

  function handleclicked() {
    if (date === "" || destination === "" || source === "") {
      error("Please Fill All The Details");
      return;
    }
    if (source === destination) {
      error("Source And Destination Can't Be Same");
      return;
    }
    setsource("");
    getcityinfo(source, destination, date);
  }

  async function getcityinfo(source, destination, date) {
    try {
      let res = await axios.post("https://blue-bus.onrender.com/city/showcity", {
        source,
        destination,
        date,
      });
      if (res.data.status === "success") {
        navigate({
          pathname: "/selectbus",
          search: `?from=${source}&to=${destination}&date=${date}`,
        });
      } else {
        setsource("");
        setdestination("");
        error("City Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlecityclicked(name) {
    setCityclicked(true);
    setsource(name);
    setShowNames(false);
  }

  function handlecityclicked1(name) {
    setCityDesclicked(true);
    setdestination(name);
    setShowNamesdes(false);
  }

  function handledateclicked() {
    setShowNamesdes(false);
    setShowNames(false);
  }

  return (
    <>
      <div className={styles.data}>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => {
            setsource(e.target.value);
            setShowNamesdes(false);
          }}
          className={styles.inputsource}
        />
        {showName && output.length !== 0 && (
          <div className={styles.names}>
            {output?.map((item, i) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handlecityclicked(item.name)}
                key={i}
              >
                <h6 style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                  {item.name}, {item.state}
                </h6>
                <hr />
              </div>
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => {
            setdestination(e.target.value);
            setShowNames(false);
          }}
          className={styles.inputsource1}
        />
        {showNamedes && outputdes.length !== 0 && (
          <div className={styles.names1}>
            {outputdes?.map((item, i) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handlecityclicked1(item.name)}
                key={i}
              >
                <h6 style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                  {item.name}, {item.state}
                </h6>
                <hr />
              </div>
            ))}
          </div>
        )}
        <input
          type="date"
          value={date}
          min={dateinfo.mindate}
          onChange={(e) => setdate(e.target.value)}
          onClick={() => handledateclicked()}
        />
        <button onClick={handleclicked}>Search</button>
      </div>
      <div className={styles.infodiv}>
        {/* <div>
          <img alt="shield" />
        </div>
        <div>
          <h4>Introducing Safety+ Program</h4>
          <p>A unique certification program that ensures safety in all buses</p>
        </div>
        <div>
          <div>
            <button>know More</button>
          </div> 
        </div>*/}
      </div>
    </>
  );
}

export default Slider;
