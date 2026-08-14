document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LOADER
    ========================= */

    window.addEventListener("load", () => {

        setTimeout(() => {

            const loader = document.getElementById("loader");

            if (loader) {
                loader.style.opacity = "0";

                setTimeout(() => {
                    loader.style.display = "none";
                }, 800);
            }

        }, 1200);

    });


    /* =========================
       PIN SYSTEM
       PIN: 0908
    ========================= */

    const unlockBtn = document.getElementById("unlockBtn");
    const pinInput = document.getElementById("pinInput");
    const pinError = document.getElementById("pinError");

    const pinScreen = document.getElementById("pinScreen");
    const website = document.getElementById("website");

    unlockBtn.addEventListener("click", () => {

        const pin = pinInput.value.trim();

        if (pin === "0908") {

            pinScreen.style.display = "none";
            website.style.display = "block";

            pinError.innerText = "";

        } else {

            pinError.innerText = "PIN-nya salah sayang 🥹💕";

            pinInput.value = "";

            pinInput.focus();

        }

    });


    /* =========================
       OPEN BOOK
    ========================= */

    const openBookBtn =
        document.getElementById("openBookBtn");

    openBookBtn.addEventListener("click", () => {

        const music =
            document.getElementById("bgMusic");

        if (music) {

            music.play().catch(() => {
                console.log("Music membutuhkan interaksi pengguna.");
            });

        }

        document
            .getElementById("scrapbook")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


    /* =========================
       LETTER OPEN
    ========================= */

    const openLetter =
        document.getElementById("openLetter");

    const letterPaper =
        document.getElementById("letterPaper");

    openLetter.addEventListener("click", () => {

        if (letterPaper.style.display === "block") {

            letterPaper.style.display = "none";

        } else {

            letterPaper.style.display = "block";

            setTimeout(() => {

                letterPaper.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 200);

        }

    });


    /* =========================
       QUIZ
       QUESTION:
       "kamu sayang aku ga yaa?"

       ANSWER:
       "iyaa sayang banget banget sayaangg"
    ========================= */

    const checkQuiz =
        document.getElementById("checkQuiz");

    checkQuiz.addEventListener("click", () => {

        const answer =
            document
                .getElementById("answer1")
                .value
                .toLowerCase()
                .trim()
                .replace(/\s+/g, " ");

        const result =
            document.getElementById("quizResult");


        const correctAnswers = [
            "iyaa sayang banget banget sayaangg",
            "iya sayang banget banget sayaangg",
            "iyaa sayang banget banget sayang",
            "iya sayang banget banget sayang"
        ];


        if (correctAnswers.includes(answer)) {

            result.style.color = "#e75480";

            result.innerText =
                "IHHH IYAA 🥹💕 Aku tahu kamu sayang aku! Memory unlocked ✨";

            document
                .getElementById("specialMemory")
                .scrollIntoView({
                    behavior: "smooth"
                });

        } else {

            result.style.color = "#ff5c8d";

            result.innerText =
                "Jawab yang jujur donggg 🥹💗";

        }

    });


    /* =========================
       REVEAL MEMORY
    ========================= */

    const revealBtn =
        document.getElementById("revealBtn");

    revealBtn.addEventListener("click", () => {

        const specialPhoto =
            document.getElementById("specialPhoto");

        specialPhoto.classList.add("show");

        revealBtn.innerText =
            "Memory Revealed ♡";

        revealBtn.disabled = true;

        revealBtn.style.opacity = "0.7";

    });


    /* =========================
       LOVE COUNTER
    ========================= */

    /*
        Dibuat bukan sebagai counter
        hubungan, karena acara ini BUCIN.
        Tetap dibuat sebagai animasi
        love counter.
    */

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");


    function loveAnimation() {

        let count = 0;

        const interval =
            setInterval(() => {

                count++;

                if (count <= 100) {

                    days.innerText = count + "%";
                    hours.innerText = count + "%";
                    minutes.innerText = count + "%";

                }

                if (count >= 100) {

                    clearInterval(interval);

                    days.innerText = "∞";
                    hours.innerText = "∞";
                    minutes.innerText = "∞";

                }

            }, 20);

    }


    loveAnimation();


    /* =========================
       SECRET MESSAGE
    ========================= */

    const stars =
        document.querySelectorAll(".secret-star");

    let clickedStars = 0;

    stars.forEach((star) => {

        star.addEventListener("click", () => {

            if (!star.classList.contains("active")) {

                star.classList.add("active");

                clickedStars++;

                star.style.transform =
                    "scale(1.5) rotate(15deg)";

                star.style.opacity = "0.7";

                star.innerText = "💗";

            }


            const progress =
                document.getElementById("starProgress");

            progress.innerText =
                `Find all the hearts (${clickedStars}/5)`;


            if (clickedStars >= 5) {

                const secretMessage =
                    document.getElementById("secretMessage");

                secretMessage.style.display = "block";

                secretMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    });


    /* =========================
       REPLAY BUTTON
    ========================= */

    const replayBtn =
        document.getElementById("replayBtn");

    replayBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       ENTER KEY PIN
    ========================= */

    pinInput.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            unlockBtn.click();

        }

    });


    /* =========================
       CLEAR PIN ERROR
    ========================= */

    pinInput.addEventListener("input", () => {

        pinError.innerText = "";

    });


    /* =========================
       MUSIC
    ========================= */

    const music =
        document.getElementById("bgMusic");

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            if (music && !music.paused) {
                music.pause();
            }

        }

    });


});
