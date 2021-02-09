import barba from '@barba/core';

import animationEnter from './animations/animationEnter';
import animationLeave from './animations/animationLeave';

barba.init({

    transitions: [
        {
            once() {;
                // On page load...
            },

            leave: () => animationLeave(),


            enter() {
                animationEnter();
            },
        }
    ]

});