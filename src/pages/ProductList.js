import React, { useState, useEffect } from "react";
import { Table,  Menu, Icon } from "semantic-ui-react";
import ProductService from "../services/productService";
import {Link} from "react-router-dom"

export default function ProductList() {
  const [products, setProducts] = useState([]); // useState hook => products init değeri boş arraydir. setProducts ile set edilebilir
  // products'ta değişme olduğu zaman sayfa yeniden render edilir

  useEffect(()=> {  // component yüklendiğinde yapılmasını istediğimiz kod buraya yazılır
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data.data))
  },[])  // useEffect için [] koyulması gerekir

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (//=> sonrasında () içine yazılan kodlar jsx kodlarıdır//map ile gezerken her elemana key verilmesizorunludur
            <Table.Row key={product.productId}>  
              <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
