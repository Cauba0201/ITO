import React, { useState } from "react";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

type Props = {};

const MapView = (props: Props) => {
  const position = { lat: 16.0583, lng: 107.2772 };
  const [open, setOpen] = useState(false)
  return (
    <APIProvider apiKey={"GOOGLE_MAP_VIEW_API"}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={"GOOGLE_MAP_VIEW_ID"}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>
          {open && <InfoWindow position={position}><p>That is Viet Nam</p></InfoWindow>}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapView;
