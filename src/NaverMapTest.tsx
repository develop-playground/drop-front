import React, { useEffect, useRef } from 'react';

function NaverMapTest() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;

    if (mapRef.current == null) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });
  }, []);
  return <div ref={mapRef} style={{ width: '400px', height: '400px' }} />;
}

export default NaverMapTest;
