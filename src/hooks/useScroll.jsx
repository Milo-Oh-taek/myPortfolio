import React, { useRef, useEffect, useCallback } from 'react'

const useScroll = () => {
    const dom = useRef();

    const handleCallback = useCallback(([entry]) => {
        const { current } = dom;

        if(entry.isIntersecting){
            current.classList.add('inside_of_viewport');
            current.classList.remove('out_of_viewport');
        } else {
            current?.classList.add('out_of_viewport');
            current?.classList.remove('inside_of_viewport');
        }
        
    },[]);

    useEffect(() => {
        let observer;
        const { current } = dom;

        if (current) {
            observer = new IntersectionObserver(handleCallback, { threshold: 0.4 });
            observer.observe(current);

            return () => observer && observer.disconnect();
        };
    }, [handleCallback]);



  return {
      ref: dom,
    //   className: {...,'out_of_viewport'}
  };
};

export default useScroll