import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" icon="bitcoin" />
        <Dropdown pointing="top left" text="Burak">
          <Dropdown.Menu>

            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut}/>

          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
