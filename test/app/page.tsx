// retrieving maps from goodle maps api and rendering them on the page. 
//Then add cartoon styling to the map.

import { Loader } from "@googlemaps/js-api-loader"
import { SetStateAction, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import MapsComponent from "./api/MapsData";



export default function Home() {


  return(
    <main>
      <h1>Test Google Maps</h1>
      <MapsComponent />
    </main>
  )
}
