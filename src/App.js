import './App.css';
import React from 'react';
import { useState } from 'react';
import QRCode from 'qrcode.react';

// React Icons used on NavBar (on the Left);
import { FaWifi, FaLink, FaEnvelope, FaCommentAlt, FaTwitter } from 'react-icons/fa';
import { MdTextFields } from 'react-icons/md'
import { IconContext } from "react-icons";
import NavButton from './components/NavButton';
import {BsDownload} from 'react-icons/bs';


import {CompactPicker} from 'react-color';
import MyDisclosure from './components/Disclosure';
import FormArea from './components/FormArea';
// for downloading:
import {saveSvgAsPng} from 'save-svg-as-png';

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  excludeCss: true,
}


function App() {
  // Which form will render according to what is selected
  const forms = {
    'WIFI': <FaWifi />,
    'LINK': <FaLink />,
    'EMAIL': <FaEnvelope />,
    'MESSAGE': <FaCommentAlt />,
    'TEXT': <MdTextFields />,
    'TWITTER': <FaTwitter />
  };
  const [formRendered, setFormRendered] = useState('WIFI');

  const handleButtonClick = (value) => {
    setFormRendered(value);
  }

  const NavContent = Object.keys(forms).map((value, index) => (
    <NavButton key={index} id={value} handleButtonClick={handleButtonClick}>{forms[value]}</NavButton>
  ))
  

  // Qr code State
  const [qrCode, setQrCode] = useState('Beautiful QR Code Generator');

  // Color state and border option for QR code.
  const [qrColor, setQrColor] = useState('#000');
  const border = false;

  // Personalization options
  const options = ['Colors'];
  // Border selector; border Config is not avalable as feature yet.
  // const borderConfig = (
  //   <div>
  //     <input
  //       type="checkbox"
  //       id="border"
  //       className="rounded text-pink-500 m-2"
  //       checked={border}
  //       onChange={() => setBorder(!border)} />
  //     <label>Border</label>
  //   </div>
  // );

  const colorPicker = (
    <CompactPicker
      color={qrColor}
      onChange={(color) => setQrColor(color.hex)}
    />
  );

  const disclosureOptions = [colorPicker]
  // Config of Disclosures below QRCODE
  const Disclosures = options.map((value, index) => (
    <MyDisclosure key={index} content={disclosureOptions[index]}>{value}</MyDisclosure>
  ));

  const handleSubmit = (value) => {
    
    setQrCode(value);
  }

  const handleDownloadClick = () => {
    
    saveSvgAsPng(document.getElementById('svg-chart'), 'qrCode.png', imageOptions);
  };

  return (
    <div className="py-2 max-w-7xl my-4 mx-auto bg-blue-50 border-8 border-white rounded-xl shadow-md flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-between items-center">
      {/* NavBar on the Left, select the Form will be rendered */}
      <IconContext.Provider value={{ className: 'inline' }}>
        <nav className="flex lg:flex-col bg-white text-gray-400 p-4 m-2 lg:mx-4 rounded-full shadow-md">
          {NavContent}
        </nav>
      </IconContext.Provider>

      {/* Central area, it will display the selected Form */}
      <FormArea handleSubmit={handleSubmit} formToRender={formRendered}></FormArea>
      
      {/* Area where we will render QR Code and options for QR Code. */}
      <div className="bg-blue-900 flex flex-col items-center rounded-3xl text-white lg:mx-4 p-4 pt-12">
        <QRCode
          id='svg-chart'
          className={`rounded-3xl ${border ? 'border-4 border-blue-600' : ''}`}
          value={qrCode}
          renderAs='svg'
          includeMargin={true}
          bgColor="#FFF"
          fgColor={qrColor}
          size={200}
        ></QRCode>
        <div className="w-72 px-4 pt-4">
          <div className="w-full max-w-md p-2 mx-auto rounded-2xl">
            {Disclosures}
          </div>
        </div>
        <button
          className="flex flex-row items-center justify-between space-x-2 bg-blue-500 text-gray-100 hover:bg-blue-800 hover:text-white hover:shadow-md px-3 py-2 m-4 rounded-full text-sm font-medium"
          onClick={handleDownloadClick}
        >
          <BsDownload></BsDownload>
          <span>Download PNG</span>
        </button>
      </div>
    </div>
  );
}

export default App;
