import gsap from 'gsap';

const animationEnter = () => {
    return gsap.to('.transition', { scaleX: 0, transformOrigin: 'right', duration: .8, ease:'ExpoIn' });
};

export default animationEnter;