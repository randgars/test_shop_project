import React from 'react';
import {
  DialogContainer
} from 'react-md';

import ShopForm from './forms/shopForm';
import ProductForm from './forms/productForm';

const DialogForm = (props) => {
  const {visible, hide, submit, formChoosen} = props;

  const chooseForm = () => {
    switch (formChoosen) {
      case 'addShopButton':
        return <ShopForm onSubmit={submit}/>;
      case 'editShopButton':
        return <ShopForm onSubmit={submit}/>;
      case 'addProductButton':
        return <ProductForm onSubmit={submit}/>;
      case 'editProduct':
        return <ProductForm onSubmit={submit}/>;
      default:
        return null;
    }
  };

  return (
    <DialogContainer
      id="simple-list-dialog"
      visible={visible}
      title="Fill the form"
      onHide={hide}
    >
      {
        chooseForm()
      }
    </DialogContainer>
  );
};

export default DialogForm;