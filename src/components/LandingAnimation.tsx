import '../styles/landing-animation.css';
import { useEffect } from 'react';
import anime from 'animejs';

const LandingAnimation: React.FC = () => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml12');
    if (textWrapper && textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime
      .timeline({ loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
    // anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: '.ml1 .letter',
    //     scale: [0.3, 1],
    //     opacity: [0, 1],
    //     translateZ: 0,
    //     easing: 'easeOutExpo',
    //     duration: 600,
    //     delay: (el, i) => 70 * (i + 1),
    //   })
    //   .add({
    //     targets: '.ml1 .line',
    //     scaleX: [0, 1],
    //     opacity: [0.5, 1],
    //     easing: 'easeOutExpo',
    //     duration: 700,
    //     offset: '-=875',
    //     delay: (el, i, l) => 80 * (l - i),
    //   })
    //   .add({
    //     targets: '.ml1',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: 'easeOutExpo',
    //     delay: 1000,
    //   });
  }, []);

  const name = 'Christopher Michael Clark';

  return (
    <h1 className="ml12">{name}</h1>
  );
};

export default LandingAnimation;
