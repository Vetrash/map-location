import React from 'react';
import { Polygon, Placemark } from '@pbe/react-yandex-maps';

const MapPoligon = (props) => {
  const { centerIcon, name, poligonPoints } = props;

  return (
    <>
      <Placemark
        modules={['geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent']}
        geometry={centerIcon}
        options={{
          // iconLayout: 'default#imageWithContent',
          preset: 'islands#darkGreenStretchyIcon', // стандартный маркер яндекса
          /* iconImageHref: './img/markerIcon.svg',
        iconImageSize: [60, 180],
        iconImageOffset: [-24, -84],
        iconContentOffset: [24, 84],
        contentLayout: template,
        */
        }}
        properties={{ iconContent: name }}
      />
      <Polygon
        geometry={[poligonPoints]}
        options={{
          fill: false,
          strokeColor: '#fff',
          strokeWidth: 8,
          strokeStyle: 'solid',
        }}
      />
    </>
  );
};

export default MapPoligon;
