import { useEffect, useState } from "react";

export default function RandomColor() {
   const [type, setType] = useState('hex');
   const [color, setColor] = useState('#FFFFFF');

   const handleColor = () => {
      if (type === 'hex') {
         const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
         let hexColor = '#';
         for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
         }
         setColor(hexColor);
      } else {
         let rgbColor = 'rgb(';
         rgbColor += Math.floor(Math.random() * 256) + ',';
         rgbColor += Math.floor(Math.random() * 256) + ',';
         rgbColor += Math.floor(Math.random() * 256);
         rgbColor += ')';
         setColor(rgbColor);
      }
   }

   useEffect(() => {
      // eslint-disable-next-line
      handleColor();
   }, [type]);

   return (
      <div style={{
         height: '100vh',
         width: '100vw',
         backgroundColor: color
      }}>
         <div>
            <button onClick={() => setType('hex')}>create hex color</button>
            <button onClick={() => setType('rgb')}>create rgb color</button>
            <button onClick={handleColor}>create random color</button>
         </div>
         <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '60px',
            marginTop: '50px'
         }}>
            {color}
         </div>
      </div>
   );
}