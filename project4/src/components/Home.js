import React, { Component, Slide , useEffect} from 'react';
// export default class Header extends Component {
//    render() {
//       return (
//          <div className="slide-container">
//         <Slide easing="ease">
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(./images/lollicup/Ads/flavors.png)`}}>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(./images/lollicup/Ads/delivery.jpg`}}>
//             </div>
//           </div>
//         </Slide>
//       </div>
//          );
//    }
// }


export default class Header extends Component {
  Slideshow() {
    const ads = [`url(./images/lollicup/Ads/delivery.jpg`, `url(./images/lollicup/Ads/catering.jpg`, `url(./images/lollicup/Ads/flavors.png`];
    const delay = 2500;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === ads.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <header>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {ads.map((_, index) => (
            <div
              className="slide"
              key={index}
              style={{'backgroundImage': ads[index]}}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {ads.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      </header>
    );
  }
  render(){
    return(<this.Slideshow />);
  }
}