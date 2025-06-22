<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,user-scalable=no" />
    <title>Mading Carousel</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap");

        * {
            margin: 0;
            padding: 0;
        }

        html,
        body {
            height: 100%;
            /* for touch screen */
            touch-action: none;
        }

        body {
            overflow: hidden;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background: #111;
            -webkit-perspective: 1000px;
            perspective: 1000px;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }

        #drag-container,
        #spin-container {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin: auto;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transform: rotateX(-10deg);
            transform: rotateX(-10deg);
        }

        .mading {
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            line-height: 200px;
            font-size: 50px;
            text-align: center;
            -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
        }

        .mading {
            -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
        }

        #drag-container p {
            font-family: Serif;
            position: absolute;
            top: 100%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%) rotateX(90deg);
            transform: translate(-50%, -50%) rotateX(90deg);
            color: #fff;
        }

        #ground {
            width: 900px;
            height: 900px;
            position: absolute;
            top: 100%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%) rotateX(90deg);
            transform: translate(-50%, -50%) rotateX(90deg);
            background: -webkit-radial-gradient(center center,
                    farthest-side,
                    #9993,
                    transparent);
        }

        #music-container {
            position: absolute;
            top: 0;
            left: 0;
        }

        @-webkit-keyframes spin {
            from {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
            }

            to {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
            }
        }

        @keyframes spin {
            from {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
            }

            to {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
            }
        }

        @-webkit-keyframes spinRevert {
            from {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
            }

            to {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
            }
        }

        @keyframes spinRevert {
            from {
                -webkit-transform: rotateY(360deg);
                transform: rotateY(360deg);
            }

            to {
                -webkit-transform: rotateY(0deg);
                transform: rotateY(0deg);
            }
        }

        .mading {
            object-fit: contain;
        }

        .first-mading {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-image: linear-gradient(180deg, #cc8b02 0%, #723f11 74%);

            .first-mading-image-pplk {
                width: 96px;
                height: 96px;
                border-radius: 50%;
                overflow: hidden;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;

                .inner-image {
                    width: 100%;
                    height: 100%;
                }
            }

            .first-mading-image-kelompok {
                width: 96px;
                height: 96px;
                border-radius: 50%;
                overflow: hidden;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;

                .inner-image {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        @media (max-width: 768px) {
            .first-mading {
                .first-mading-image-pplk {
                    width: 48px;
                    height: 48px;
                }

                .first-mading-image-kelompok {
                    width: 48px;
                    height: 48px;
                }
            }
        }
    </style>
</head>

<body>
    <div id="drag-container">

        <div id="spin-container">

            <!-- Add your images (or video) here -->

            <div class="mading first-mading">
                <div class="first-mading-image-pplk">
                    <img src="https://cdn.jsdelivr.net/gh/krossmanzs/test-naramuda-explorer@main/assets/images/logo-pplk-hd.png"
                        alt="" class="inner-image" />
                </div>

                <div class="first-mading-image-kelompok">
                    <img src={{$logo_kelompok_url}} alt="" class="inner-image" />
                </div>
            </div>
            @foreach($urls as $url)
                <img src={{ $url }} alt="" class="mading" />
                <!-- Text at center of ground -->
            @endforeach
        </div>
        <div id="ground">

            <img src="https://cdn.jsdelivr.net/gh/krossmanzs/test-naramuda-explorer@main/assets/images/logo-pplk-hd.png"
                alt="" class="mading" />

        </div>
    </div>

    <div id="music-container">

    </div>

    <div class="github-corner">
        <a href={{ route('mading')}} class="link-back" aria-label="link-to-mading-page">
            <span class="icon-back">&#x2039;</span>
            Kembali
        </a>
    </div>
    <style>
        .github-corner {
            position: fixed;
            top: 30px;
            right: 0;
            border: 0;
            z-index: 1000;
            width: 100%;
            display: flex;
            height: 50px;
            justify-content: center;
            align-items: center;

            .link-back {
                text-decoration: none;
                color: #000;
                font-family: "Montserrat", sans-serif;
                font-weight: 700;

                background-color: white;
                border-radius: 5px;
                padding-left: 8px;
                padding-right: 10px;
                padding-top: 1px;
                padding-bottom: 2px;
            }

            .icon-back {
                font-size: 20px;
                margin-top: 5px;
            }
        }

        @keyframes octocat-wave {

            0%,
            100% {
                transform: rotate(0)
            }

            20%,
            60% {
                transform: rotate(-25deg)
            }

            40%,
            80% {
                transform: rotate(10deg)
            }
        }
    </style>

    </style>

    <script>
        // Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
        // Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

        // You can change global variables here:
        var multiplier = (screen.width > 1366) ? 2.5 : (screen.width > 1024) ? 2 : (screen.width > 768) ? 1.5 : 1;
        let width = screen.width;
        var radius = 105 * multiplier; // how big of the radius
        var autoRotate = true; // auto rotate or not
        var rotateSpeed = -60; // unit: seconds/360 degrees
        var imgWidth = 120 * multiplier; // width of images (unit: px)
        var imgHeight = 170 * multiplier; // height of images (unit: px)
        // Link of background music - set 'null' if you dont want to play background music
        var bgMusicURL =
            "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
        var bgMusicControls = true; // Show UI music control

        /*
       NOTE:
         + imgWidth, imgHeight will work for video
         + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
         + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
         + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
  */

        // ===================== start =======================
        setTimeout(init, 100);

        var odrag = document.getElementById("drag-container");
        var ospin = document.getElementById("spin-container");
        var aImg = ospin.getElementsByClassName("mading");
        var aEle = [...aImg]; // combine 2 arrays

        // Size of images
        ospin.style.width = imgWidth + "px";
        ospin.style.height = imgHeight + "px";

        // Size of ground - depend on radius
        var ground = document.getElementById("ground");
        ground.style.width = radius * 1 + "px";
        ground.style.height = radius * 1 + "px";

        function init(delayTime) {
            for (var i = 0; i < aEle.length; i++) {
                aEle[i].style.transform =
                    "rotateY(" +
                    i * (360 / aEle.length) +
                    "deg) translateZ(" +
                    radius +
                    "px)";
                aEle[i].style.transition = "transform 1s";
                aEle[i].style.transitionDelay =
                    delayTime || (aEle.length - i) / 4 + "s";
            }
        }

        function applyTranform(obj) {
            // Constrain the angle of camera (between 0 and 180)
            if (tY > 180) tY = 180;
            if (tY < 0) tY = 0;

            // Apply the angle
            obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
        }

        function playSpin(yes) {
            ospin.style.animationPlayState = yes ? "running" : "paused";
        }

        var sX,
            sY,
            nX,
            nY,
            desX = 0,
            desY = 0,
            tX = 0,
            tY = 10;

        // auto spin
        if (autoRotate) {
            var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
            ospin.style.animation = `${animationName} ${Math.abs(
                rotateSpeed
            )}s infinite linear`;
        }

        // setup events
        document.onpointerdown = function (e) {
            clearInterval(odrag.timer);
            e = e || window.event;
            var sX = e.clientX,
                sY = e.clientY;

            this.onpointermove = function (e) {
                e = e || window.event;
                var nX = e.clientX,
                    nY = e.clientY;
                desX = nX - sX;
                desY = nY - sY;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(odrag);
                sX = nX;
                sY = nY;
            };

            this.onpointerup = function (e) {
                odrag.timer = setInterval(function () {
                    desX *= 0.95;
                    desY *= 0.95;
                    tX += desX * 0.1;
                    tY += desY * 0.1;
                    applyTranform(odrag);
                    playSpin(false);
                    if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                        clearInterval(odrag.timer);
                        playSpin(true);
                    }
                }, 17);
                this.onpointermove = this.onpointerup = null;
            };

            return false;
        };

        document.onmousewheel = function (e) {
            e = e || window.event;
            var d = e.wheelDelta / 20 || -e.detail;
            radius += d;
            init(1);
        };
    </script>
</body>

</html>