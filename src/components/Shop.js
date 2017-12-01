import React, {
  PureComponent
} from 'react';
import {
  DataTable,
  TableHeader,
  TableRow,
  TableColumn,
  TableBody,
  Button
} from 'react-md';

import '../styles/shop.scss';

import DialogForm from './dialog/dialogForm';
import ProductItem from './productItem';

class ShopComponent extends PureComponent {
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
    const { shops, shop, actions} = this.props;
    actions.editShop(shop.id, values, shops);
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
    const { shop, shops, actions } = this.props;
    const { visible, formChoosen } = this.state;
    return (
      <div>
        <div className="shop-component__header">
          <h2>{shop && shop.name}</h2>
          <div>
            <Button
              flat
              primary
              swapTheming
              id="addProductButton"
              onClick={this.show}
              className={'shop-component__header-button'}
            >
              Add product
            </Button>
            <Button
              flat
              primary
              swapTheming
              onClick={this.show}
              id="editShopButton"
            >
              Edit
            </Button>
          </div>
        </div>
        <DialogForm submit={this.submit} hide={this.hide} visible={visible} formChoosen={formChoosen}/>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Product name</TableColumn>
              <TableColumn>Description</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              shop && shop.products && shop.products.map((item, index) =>
                <ProductItem key={index} item={item} shop={shop} shops={shops} actions={actions}/>
              )
            }
          </TableBody>
        </DataTable>
      </div>
    );
  }
}

export default ShopComponent;