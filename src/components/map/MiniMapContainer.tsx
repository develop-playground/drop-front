import React, { Dispatch, ForwardedRef, forwardRef, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { LocationSpec } from '../modal/CreateMemoryModal';

const MapWrapper = styled.div`
  width: 328px;
  height: 200px;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  margin-top: -200px;
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

interface Props {
  onCloseMap(): void;

  setLocationData: Dispatch<SetStateAction<{ address: string; location: LocationSpec }>>;
}

const MiniMapContainer = forwardRef(({ setLocationData, onCloseMap }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current == null) return;
    navigator.geolocation.getCurrentPosition((nowPosition) => {
      const position = new naver.maps.LatLng(nowPosition.coords.latitude, nowPosition.coords.longitude);

      const map = new naver.maps.Map(mapRef.current, {
        center: position,
        zoom: 16,
      });

      const marker = new naver.maps.Marker({
        position: position,
        map: map,
      });

      naver.maps.Event.addListener(map, 'click', function (e: any) {
        marker.setPosition(e.coord);

        setLocationData({
          address: '',
          location: { latitude: e.coord.latitudem, longitude: e.coord.longitude },
        });
      });
    });
  }, []);

  return (
    <MapWrapper ref={ref}>
      <Map ref={mapRef} />
    </MapWrapper>
  );
});

export default MiniMapContainer;
