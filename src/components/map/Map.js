import React, {
  PureComponent
} from 'react';

import '../../styles/map/map.scss';

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.initialize = this.initialize.bind(this);
  }

  initialize() {
    const mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(53.9102919, 27.494528),
      gestureHandling: 'cooperative'
    };
    this.map = new google.maps.Map(this.map, mapOptions);
    let markers = [];
    let marker;
    if (this.props.shops.length > 0) {
      this.props.shops.forEach(item => {
        marker = new google.maps.Marker({
          position: item.location,
          map: this.map,
          title: item.name
        });
        markers.push(marker);
      });
    }
    
    // debugger
    // const marker = new google.maps.Marker({
    //   position: this.props.shops[0].location,
    //   map: this.map
    // });
  }

  componentDidMount() {
    this.initialize();
  }
  componentDidUpdate() {
    this.initialize();
  }

  render() {
    return (
      <div ref={ref => (this.map = ref)} className="map-component">
      </div>
    );
  }
}

export default MapComponent;