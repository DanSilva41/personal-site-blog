import React, { useRef, useEffect, useState } from 'react';
import { withTheme } from 'styled-components';

import {
  HeroCardWrapper,
  CodeCardWrapper,
  ColorPaletteWrapper,
  ColorBoxWrapper,
} from './HeroCard.style';

function repeatString(str, count) {
  let maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));
  while (count) {
    str += str;
    count--;
  }
  str += str.substring(0, maxCount - str.length);
  return str;
}

function copyToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export const CodeCard = ({ ownerName }) => {
  const ageProgrammingDescription = `new Date().getFullYear() - 1998`;
  const [text, setText] = useState(ageProgrammingDescription);
  const age = new Date().getFullYear() - 1998;
  // trimed down polyfill of String.repeat
  const changeText = () => {
    if (text !== age) {
      setText(age);
    } else {
      setText(ageProgrammingDescription);
    }
  };

  const definitionPersonAttrs = [
    "String name",
    "String from",
    "List<String> traits",
    "Short age"
  ]

  const firstPersonAttrs = definitionPersonAttrs.slice(0, 2).join(', ');
  const lastPersonAttrs = definitionPersonAttrs.slice(2).join(', ').concat(') { }');

  return (
    <CodeCardWrapper>
      <pre>
        1&nbsp;&nbsp;record <b>Person</b> {'('}{firstPersonAttrs}
      </pre>
      <pre>
        2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lastPersonAttrs}
      </pre>
      <pre>
        3
      </pre>
      <pre>
        4&nbsp;&nbsp;var developer = new Person{'('}
      </pre>
      <pre>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "<b>{ownerName}</b>",
      </pre>
      <pre>
        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "<b>Brazil</b>",
      </pre>
      <pre>
        7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; listOf{'('}"<b>DEVELOPER</b>", "<b>MUSICIAN</b>"{')'},
      </pre>
      <pre onClick={changeText}>
        8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" onClick={e => e.preventDefault()}><b>{text}</b></a>
      </pre>
      <pre>9&nbsp;&nbsp; {');'}</pre>
      <pre>10</pre>
    </CodeCardWrapper>
  );
};

const ColorBox = ({ color }) => {
  const tooltipRef = useRef();
  useEffect(() => {
    return tooltipRef.current.addEventListener('animationend', () => {
      tooltipRef.current.classList.remove('tooltip-animate');
    });
  });
  const copy = () => {
    copyToClipboard(color);
    tooltipRef.current.classList.add('tooltip-animate');
  };

  return (
    <ColorBoxWrapper
      ref={tooltipRef}
      onClick={copy}
      style={{ background: color }}
    />
  );
};

export const ColorPalette = withTheme(({ theme }) => {
  return (
    <ColorPaletteWrapper>
      <ColorBox color={theme.primaryColor} />
      <ColorBox color={theme.gradient} />
      <ColorBox color={'#6A98F0'} />
      <ColorBox color={theme.primaryBlack} />
      <ColorBox color={theme.accentColor} title="Copy"/>
    </ColorPaletteWrapper>
  );
});

export const HeroCard = ({ ownerName }) => {
  return (
    <HeroCardWrapper>
      <CodeCard ownerName={ownerName} />
      <ColorPalette />
    </HeroCardWrapper>
  );
};
