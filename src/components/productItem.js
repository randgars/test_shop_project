import React, {
  PureComponent
} from 'react';
import {
  TableRow,
  TableColumn
} from 'react-md';

import DialogForm from './dialog/dialogForm';

import '../styles/shop.scss';

class ProductItemComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      visible: false
    };
  }

  submit(values) {
    const { item, shops, shop, actions} = this.props;
    actions.editProduct(item.id, shop, values, shops);
    this.setState({ visible: false });
  }

  show(e) {
    this.setState({ visible: true, formChoosen: e.currentTarget.id });
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
    const { visible, formChoosen } = this.state;
    const { item } = this.props;
    return [
      <TableRow id="editProduct" onClick={this.show} key={0}>
        <TableColumn>{item.name}</TableColumn>
        <TableColumn>{item.description}</TableColumn>
      </TableRow>,
      <DialogForm key={1} submit={this.submit} hide={this.hide} visible={visible} formChoosen={formChoosen}/>
    ];
  }
}

export default ProductItemComponent;