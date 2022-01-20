import { useMapEvent } from "react-leaflet";

export function MapMoveWatcher({ fetchLocations, filter }) {
  useMapEvent("moveend", () => {
    fetchLocations(filter);
  });
  return null;
}
