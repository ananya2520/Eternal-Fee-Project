window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main1",
        // markers:true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
});
tl1
    .to(".text", {
        top: "-7%",
    }, 'a')
    .to("#card-one", {
        top: "35%",
    }, 'a')
    .to("#card-two", {
        top: "130%"
    }, 'a')
    .to("#card-two", {
        top: "42%"
    }, 'b')
    .to("#card-one", {
        width: "65%",
        height: "65vh"
    }, 'b')
    .to("#card-three", {
        top: "130%"
    }, 'b')
    .to("#card-three", {
        top: "50%"
    }, 'c')
    .to("#card-two", {
        width: "70%",
        height: "70vh"
    }, 'c')




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        //  markers:true,
        start: "50.1% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
    }
});
tl
    .to("#center", {
        height: "100vh",
    }, 'a')
    .to("#top", {
        top: "-50%",
    }, 'a')
    .to("#bottom", {
        bottom: "-50%",
    }, 'a')
    .to("#top-h1", {
        top: "60%"
    }, 'a')
    .to("#bottom-h1", {
        bottom: "-30%"
    }, 'a')
    .to("#center-h1", {
        top: "-30%"
    }, 'a')
    .to(".content", {
        delay: -0.2,
        marginTop: "0%"
    })






gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1500, rotate: -30 },
    ];

    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                x: `${-350 * self.progress}vw`,
                duration: 0.5,
                ease: "power3.out",
            });
        },
    });
});







document.addEventListener("DOMContentLoaded", function(){
            const counter3 = document.querySelector(".counter-3");

            for(let i = 0; i < 2; i++){
                for(let j = 0; j < 10; j++){
                    const div = document.createElement("div");
                    div.className = "num";
                    div.textContent = j;
                    counter3.appendChild(div);
                }
            }

            const finalDiv = document.createElement("div");
            finalDiv.className = "num";
            finalDiv.textContent = "0";
            counter3.appendChild(finalDiv);

            function animate(counter, duration, delay = 0){
                const numHeight = counter.querySelector(".num").clientHeight;
                const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

                gsap.to(counter, {
                    y: -totalDistance,
                    duration: duration,
                    delay: delay,
                    ease: "power2.inOut",
                })
            }

            animate(counter3, 5);
            animate(document.querySelector(".counter-2"), 6);
            animate(document.querySelector(".counter-1"), 2, 4);
        });

        gsap.to(".digit", {
            top: "-150px",
            stagger: {
                amount: 0.25,
            },
            // delay: 6,     // 100 ka 1 upr ara
            delay: 6,
            duration: 0,
            ease: "power4.inOut",
        });

        gsap.from(".loader-1", {
            width: 0,
            // duration: 6,    // loader1 speed
            duration: 4,
            ease: "power2.inOut",
        });

        gsap.from(".loader-2", {
            width:0,
            // delay: 1.9,
            // duration: 2,
            // speed-up


            delay: 1,
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.to(".loader", {
            background: "none",
            // delay: 6,
// grey dbe htne ka time

            delay: 4,
            duration: 0.1,
        });

        gsap.to(".loader-1", {
            rotate:90,
            y: -50,
            duration: 0.5,
            // delay: 6, // niche ane ka time
            delay: 4,
        });

        gsap.to(".loader-2", {
            x: -75,
            y: 75,
            duration: 0.5,
        },
        "<");

        gsap.to(".loader",{
            scale: 40,
            // duration: 1,
            // delay: 7,

            duration: 1,
            delay: 5,
            ease: "power2.inOut"
        });

        gsap.to(".loader", {
            rotate: 45,
            y: 500,
            x: 2000,
            // duration: 1,
            // delay: 7,
            duration: 1,
            delay: 5,
            ease: "power2.inOut",
        });

        gsap.to(".loading-screen", {
            opacity: 0,
            duration: 0.5,
            delay: 5.5,
            ease: "power1.inOut",
        });

        gsap.to("h1", 1.5, {
            delay: 7,
            y: -80,
            ease: "power4.inOut",
            stagger: {
                amount: 0.1,
            }, 
        });










function logOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "ss.html";
  }