import gsap from 'gsap';

const animationLeave = () => {   
    return gsap.to('.transition', { scaleX: 1, transformOrigin: 'left', duration: .8, ease:'ExpoOut' });
};

export default animationLeave;