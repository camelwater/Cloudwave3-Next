import React from 'react';

const SmoothScroll: React.FC<{ isNav?: boolean }> = ({ isNav = false }) => {
    React.useEffect(() => {
      let script = document.createElement('script');
      script.setAttribute(
        'src',
        'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js'
      );
      script.setAttribute('crossorigin', 'anonymous');
      if (isNav) {
        document.querySelector('body')!.appendChild(script);
      } else {
        document.querySelector('body')!.appendChild(script);
      }
    }, [isNav])
  
    return <></>;
  }
  
  export default SmoothScroll