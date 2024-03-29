document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        new TypeIt("#hero-title-h1", {
            strings: ["Better Learning", "Experience With", "Peak Education"],
            speed: 60,
            waitUntilVisible: true
        })
            .exec(async () => {
                //-- Return a promise that resolves after something happens.
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        new TypeIt("#hero-subtitle-h2", {
                            // strings: "Better Learning\nExperience With\nPeak Education",
                            strings: "Founded in 2021",
                            speed: 80,
                            waitUntilVisible: true
                        }).go();
                        return resolve();
                    }, 1000);
                });
            })
            .go();
    }, 1000)
}, false);
