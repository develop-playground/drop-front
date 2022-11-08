import React, { useEffect, useRef } from 'react';

const NaverMapTest = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;

    if (mapRef.current == null) return;
    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map,
    });
  }, []);
  return (
    <>
      <div ref={mapRef} style={{ width: '400px', height: '400px' }} />
      <div className=''></div>
      <h1 className='text-black'>Hello world!</h1>
    </>
  );
};

export default NaverMapTest;
