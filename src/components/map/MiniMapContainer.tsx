import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 350px;
  height: 200px;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  top: -210px;
`;
const Map = styled.div`
  width: 100%;
  height: 100%;
`;

declare global {
  interface Window {
    naver: any;
  }
}

const MiniMapContainer = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;
    navigator.geolocation.getCurrentPosition(function (position) {
      if (mapRef.current == null) return;
      const map = new naver.maps.Map(mapRef.current, {
        center: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 17,
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map,
      });

      naver.maps.Event.addListener(mapRef.current, 'click', function (e: any) {
        marker.setPosition(e.latlng);
      });
    });
  }, []);

  return (
    <MapWrapper>
      <Map ref={mapRef} />
    </MapWrapper>
  );
};

export default MiniMapContainer;
