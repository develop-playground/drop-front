import React, {ForwardedRef, forwardRef, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {LocationSpec} from '../modal/CreateMemoryModal';


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


interface Props {
  onCloseMap(): void;

  setNowAddress(newAddress: string): void

  setLocationData(newLocationData: LocationSpec): void
}

const MiniMapContainer = forwardRef(({
                                       setLocationData,
                                       onCloseMap,
                                       setNowAddress
                                     }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const mapRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const {naver} = window;
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
        setLocationData({longitude: e.coord.x, latitude: e.coord.y});
        window.naver.maps.Service.reverseGeocode(
          {
            coords: e.coord,
            orders: [
              naver.maps.Service.OrderType.ADDR,
              naver.maps.Service.OrderType.ROAD_ADDR,
            ].join(","),
          },
          (
            status: number,
            response: {
              v2: {
                address: {
                  jibunAddress: string;
                };
              };
            }
          ) => {
            if (status !== window.naver.maps.Service.Status.OK) {
              return alert("Something wrong!");
            }
            const result = response.v2;
            setNowAddress(result.address.jibunAddress);
          }
        );
      });

    });

  }, []);

  return (
    <MapWrapper ref={ref}>
      <Map ref={mapRef}/>
    </MapWrapper>
  );
});


export default MiniMapContainer;
