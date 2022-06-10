import React, { useState } from "react";
import "./App.css";
import Map from "./Components/Map/Map";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [govt, setGovt] = useState(true);
  const [autonomus, setAutonomus] = useState(true);
  const [genPublic, setGenPublic] = useState(true);
  const [minority, setMinority] = useState(true);
  const [special, setSpecial] = useState(true);
  const [retired, setRetired] = useState(true);
  const [overseas, setOverseas] = useState(true);
  const [media, setMedia] = useState(true);
  const [others, setOthers] = useState(true);
  const [allLayers, setAllLayers] = useState(true);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Sidebar
            allLayers={allLayers}
            setAllLayers={setAllLayers}
            autonomus={autonomus}
            setAutonomus={setAutonomus}
            genPublic={genPublic}
            setGenPublic={setGenPublic}
            minority={minority}
            setMinority={setMinority}
            special={special}
            setSpecial={setSpecial}
            retired={retired}
            setRetired={setRetired}
            govt={govt}
            setGovt={setGovt}
            overseas={overseas}
            media={media}
            setMedia={setMedia}
            others={others}
            setOthers={setOthers}
            setOverseas={setOverseas}
          />
        </div>
        <div style={{ flex: 4, position: "relative" }}>
          <Map
            allLayers={allLayers}
            setAllLayers={setAllLayers}
            autonomus={autonomus}
            genPublic={genPublic}
            minority={minority}
            special={special}
            retired={retired}
            govt={govt}
            overseas={overseas}
            media={media}
            others={others}
          />
        </div>
      </div>
    </>
  );
}

export default App;
