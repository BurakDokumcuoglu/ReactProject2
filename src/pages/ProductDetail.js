import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams(); //useParams hooku parametreleri obje olarak döner. destruction ile değişkenlere atıyoruz.
  // id:id ile aynı anlamdadır  // parametre de route'dan :id şeklinde geliyor

  const [product, setProduct] = useState({}); // useState hook => products init değeri boş arraydir. setProducts ile set edilebilir
  // products'ta değişme olduğu zaman sayfa yeniden render edilir

  useEffect(()=> {  // component yüklendiğinde yapılmasını istediğimiz kod buraya yazılır  // sadece func complarda kullanılır
    let productService = new ProductService()
    productService.getByProductName(name).then(result => setProduct(result.data.data))
  },[])  // useEffect için [] koyulması gerekir

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
