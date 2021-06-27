import React from 'react'
import { Button, Menu} from "semantic-ui-react";

export default function SignedOut(signIn) {  //parametrede props yerine direk signIn yazaraj object destruction yapmış oluyoruz
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}>Giriş Yap</Button>
                <Button primary style={{marginLeft:"5px"}}>Kayıt Ol</Button>
            </Menu.Item>
            
        </div>
    )
}
