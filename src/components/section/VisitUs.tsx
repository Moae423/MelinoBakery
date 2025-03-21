"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

type LokasiData = [number, number];

const lokasi: LokasiData = [-0.271597, 100.387349];

const VisitUs = () => {
  // Dynamically import MapContainer with SSR disabled
  const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
  );
  const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
  );
  const Marker = dynamic(
    () => import("react-leaflet").then((mod) => mod.Marker),
    { ssr: false }
  );
  const Popup = dynamic(
    () => import("react-leaflet").then((mod) => mod.Popup),
    { ssr: false }
  );

  return (
    <div className="container mx-auto my-8">
      <div className=" px-4">
        <MapContainer
          className="rounded-xl"
          center={lokasi}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={lokasi}>
            <Popup>Melino Bakery</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default VisitUs;
