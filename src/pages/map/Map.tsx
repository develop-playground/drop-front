import React, { useEffect, useState } from 'react';
import * as Clustering from '../../utils/MarkerClustering';
import { useGetMemory } from '../../network/query/memory';
import { Memory } from '../../types/Memory';
import styled from 'styled-components';
import { Mixin } from '../../common';

import { ReactComponent as PlusIcon } from '../../asset/svg/i_plus.svg';
import CreateMemoryModal from '../../components/modal/CreateMemoryModal';

const AddButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.lime};
  box-shadow: 1px 1px 2px #00000029;
  position: absolute;
  top: 85%;
  right: 3%;
  ${Mixin.FlexLayout({ direction: 'row', justify: 'center', align: 'center' })};

  svg {
    width: 22px;
    height: 22px;
    fill: black;
  }
`;
const Map = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const { data } = useGetMemory();
  useEffect(() => {
    const { naver } = window;

    let map: naver.maps.Map;

    map = new naver.maps.Map('map', {
      zoom: 10,
    });

    const markers = data?.map((item: Memory) => {
      if (item.location.latitude && item.location.longitude && item.image_urls) {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item.location.latitude, item.location.longitude),
          map,
          icon: {
            content: `<div style="width:50px;height:50px;border-radius: 2px;border: 1px solid black"> <img style="width:50px;height:50px" src="${item.image_urls[0]}/"></div>`,
          },
        });
        return marker;
      }
    });

    let htmlMarker1 = {
      content:
        '<div style="cursor:pointer;line-height:30px;font-size:14px;font-weight:500;width:30px;height:30px;background-color: white;border-radius: 50%;text-align: center;"></div>',
      size: new naver.maps.Size(50, 50),
      scaledSize: new naver.maps.Size(50, 50),
    };
    const markerClustering = new Clustering.MarkerClustering({
      minClusterSize: 2,
      maxZoom: 10,
      map: map,
      markers: markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [htmlMarker1],
      indexGenerator: [10, 100, 200, 500, 1000],
      stylingFunction: function (clusterMarker: { getElement: () => any; getIndexGenerator: () => any }, count: any) {
        clusterMarker.getElement().getElementsByTagName('div')[0].innerText = count;
        console.log(clusterMarker);
        // getClusterMember
      },
    });
  }, [data]);
  return (
    <>
      <div>
        <div id='map' style={{ width: '100%', height: '100vh' }}></div>
        <AddButton onClick={() => setIsCreateModalOpen(true)}>
          <PlusIcon />
        </AddButton>
      </div>
      {isCreateModalOpen && (
        <CreateMemoryModal isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen} refresh={() => {}} />
      )}
    </>
  );
};
export default Map;
