import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QrGenerator () {
   const [input, setInput] = useState('');
   const [value, setValue] = useState('');

   const showQr = (ev) => {
      if(ev.keyCode === 13) {
         setValue(input);
      }
   }

   return (
      <div style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         height: '100vh',
         width: '100vw',
         
      }}>
         <input type="text" onChange={(e) => setInput(e.target.value)} onKeyDown={(ev) => showQr(ev)} placeholder='Type here' />
         {value && (
            <QRCode
               value={value}
               size={300}
            />
         )}
         <button onClick={() => setValue('')}>clear</button>
      </div>
   )
}