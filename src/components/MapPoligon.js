import React from 'react';
import { Polygon, Placemark } from '@pbe/react-yandex-maps';

const MapPoligon = (props) => {
  const { centerIcon, name, poligonPoints, template } = props;
  return (
    <>
      <Placemark
        geometry={centerIcon}
        options={{ iconLayout: template }}
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
