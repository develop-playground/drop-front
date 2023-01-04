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
  nowLocation: LocationSpec;

  onCloseMap(): void;

  setLocationData: Dispatch<SetStateAction<{ address: string; location: LocationSpec }>>;
}

const MiniMapContainer = forwardRef(
  ({ nowLocation, setLocationData, onCloseMap }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const { naver } = window;
      const nowPosition = new naver.maps.LatLng(nowLocation.latitude, nowLocation.longitude);

      console.log(nowPosition);
      if (mapRef.current == null) return;
      const map = new naver.maps.Map(mapRef.current, {
        center: nowPosition,
        zoom: 17,
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new naver.maps.Marker({
        position: nowPosition,
        map,
      });

      naver.maps.Event.addListener(mapRef.current, 'click', function (e: any) {
        marker.setPosition(e.coord);
        onCloseMap();
        setLocationData({ address: '', location: { latitude: e.coord.latitudem, longitude: e.coord.longitude } });
      });
    }, [nowLocation]);

    return (
      <MapWrapper ref={ref}>
        <Map ref={mapRef} />
      </MapWrapper>
    );
  }
);

export default MiniMapContainer;
