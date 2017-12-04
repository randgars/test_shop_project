import React, {
  PureComponent
} from 'react';
import {
  List,
  ListItem,
  Button
} from 'react-md';
import { Link } from 'react-router-dom';

import '../styles/home.scss';

import DialogForm from './dialog/dialogForm';
import MapComponent from './map/Map';

class HomeComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { visible: false };
  }

  submit(values) {
    this.props.actions.addShop(this.props.shops, values);
    this.setState({ visible: false });
  }

  show(e) {
    this.setState({ visible: true, formChoosen: e.target.id });
  }

  hide() {
    this.setState({ visible: false });
  }

  handleKeyDown(e) {
    const key = e.which || e.keyCode;
    if (key === 13 || key === 32) {
      this.hide();
    }
  }

  render() {
    const { shops } = this.props;
    const { visible, formChoosen } = this.state;
    return (
      <div className="home-component">
        <div className="home-component__header">
          <Button
            onClick={this.show}
            flat
            primary
            swapTheming
            id="addShopButton"
          >Add shop</Button>
        </div>
        <DialogForm submit={this.submit} hide={this.hide} visible={visible} formChoosen={formChoosen} />
        <div className="home-component__container">
          <div className="home-component__shops">
            {
              shops.length === 0 ?
              <p>No shops</p> :
              <List>
                {
                  shops && shops.map((item, index) =>
                    <ListItem
                      key={index}
                      primaryText={item.name}
                      leftIcon={item.serial_number}
                      secondaryText={
                        <div>
                          Mode: {item.mode} <br/>
                          Address: {item.address}
                        </div>
                      }
                      threeLines
                      primaryTextClassName="home-component__item-title"
                      rightIcon={
                        <Button
                          flat
                          primary
                          swapTheming
                          component={Link}
                          to={`/shop/${item.id}`}
                        >Open</Button>
                      }
                    />
                  )
                }
              </List>
            }
          </div>
          <div className="home-component__map">
            <MapComponent shops={shops} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;