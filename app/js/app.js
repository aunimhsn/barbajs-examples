function pageTransition() {
    let tl = gsap.timeline();
    tl.to('div.transition', { duration: 1, scaleX: 1, transformOrigin: "left" });
    tl.to('div.transition', { duration: 1, scaleX: 0, transformOrigin: "right" });
}

function contentAnimation() {

}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    });
}


barba.init({

    sync: true,

    transitions: [{
        
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(2000);
            done();
        },

        async enter() {
            contentAnimation();
        },

        async once() {
            contentAnimation();
        }

    }]

})