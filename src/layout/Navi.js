import React,{useState} from "react";
import CartSummary from "./CartSummary";
import {  Menu, Container } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router-dom";


export default function Navi() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(true)

    const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }



  return (
    <div>
      <Menu inverted size="large" fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
           {isAuthenticated? <SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
