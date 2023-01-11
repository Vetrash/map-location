import React, { useEffect, useState } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import getDataPoligon from './getDataPoligon';
import '../css/App.css';
import MapPoligon from './MapPoligon';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataPoligon(setData);
  }, []);

  const [template, setTemplate] = useState({ value: null });

  const createTemplateLayoutFactory = (ymaps) => {
    if (ymaps && !template.value) {
      setTemplate({
        value: ymaps.templateLayoutFactory.createClass(
          '<div class="markerbox markerbox__text" >$[properties.iconContent]</div>',
        ),
      });
    }
  };

  return (
    <div className="conteiner__map conteiner__map--offset">
      <YMaps>
        <div className="map__title">Карта територий с границами полей</div>
        <Map
          onLoad={createTemplateLayoutFactory}
          modules={['templateLayoutFactory', 'layout.ImageWithContent']}
          className="map--size map--offset"
          defaultState={{
            center: [45.3385364852744, 42.50865653359858],
            zoom: 12,
            type: 'yandex#satellite',
          }}
        >
          {data.map((elem) => {
            const Location = JSON.parse(elem.Location);
            const { Polygon, Center } = Location;
            return (
              <MapPoligon
                poligonPoints={Polygon}
                centerIcon={Center}
                name={elem.Name}
                template={template.value}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};

export default App;
