import React, { useState, useRef } from 'react';
import { Btn } from '../common/Btn';
import { VaModal } from '@department-of-veterans-affairs/component-library/dist/react-bindings';

import Color from 'color';
import Splitting from '../Splitting'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
  };

  const baseHex = '#7743CE';

  const color = Color(baseHex);
  console.log(color.isDark());
  return (
    <div>
      <h1 style={{ backgroundColor: baseHex }}>Testing h1 heading</h1>
      <Splitting sentence='I am the sentence and I am god.' characterClassName="fart" />
      <button
        onClick={function noRefCheck() {
          setIsVisible(true);
        }}
      >
        Click here to open modal
      </button>
      <VaModal
        modalTitle="Modal title goes here"
        onCloseEvent={close}
        onPrimaryButtonClick={close}
        onSecondaryButtonClick={close}
        primaryButtonText="Primary button"
        secondaryButtonText="Secondary button"
        visible={isVisible}
      >
        <p>
          A modal may pass any React nodes as children to be displayed within
          it.
        </p>
        <p>
          By default, a modal may have up to one primary button, and up to one
          secondary button. Check the console log when clicking the buttons to
          see the events fired.
        </p>
        <p>If more buttons are required, pass them in as children.</p>
      </VaModal>

      <p>Hey hey hey</p>
    </div>
  );
}
