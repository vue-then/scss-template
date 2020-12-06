<template>
    <div>
        <div class="container">

            <svg width="500" height="200" viewBox="0 0 500 200">
              <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10,10) rotate(30)" />
            </svg>
            <!-- <svg width="200" height="200" viewBox="0 0 200 200">
              <rect x="0" y="0" width="50" height="50" transform="translate(50,50) rotate(30)" />
            </svg> -->
            <svg width="200" height="200" viewBox="0 0 200 200">
              <rect x="0" y="0" width="50" height="50" transform="translate(100,100) rotate(30)" />
              <rect x="0" y="0" width="50" height="50" fill="blue" transform="translate(0,0) skewX(30)" />
              <rect x="0" y="0" width="50" height="50" fill="red" transform="translate(50,50) skewY(30)" />
              <rect x="0" y="0" width="50" height="50" fill="green" transform="translate(50,50) scale(.5)" />
            </svg>

            <svg width="500" height="200" viewBox="0 0 500 200">
              <!-- 
                _x 旧值x
                _y 旧值y
                x 新值x
                y 新值y
                [2 -1 50] => 2*_x + -1*_y +50 = x
                [1 2 0] => 1*_x + 2*_y +0 = y

                顶点坐标
                [0,0] ==> [50,0]
                [100,0] ==> [250,100]
                [100,50] ==>[200,200]
                [0,50] ==>[0,100]

              -->
              <rect x="0" y="0" width="100" height="50" fill="red" transform="matrix(2 1 -1 2 50 0)" />
            </svg>
        </div>

        <div class="container">
          <svg width="50" height="50" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>
            <!-- 2*3.1415926*100 = 1130.97334 = 1131  -->
            <circle class="circle" cx="200" cy="200" r="180" stroke-width="20" stroke="#00a5e0" fill="none"></circle>
          </svg>
        </div>

        <div class="container">
          <svg width="440" height="440" viewbox="0 0 440 440">
            <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
            <circle
              class="circle"
              cx="220"
              cy="220"
              r="170"
              stroke-width="50"
              stroke="#00A5E0"
              fill="none"
              transform="matrix(0,-1,1,0,0,440)"
            />
          </svg>
        </div>

        <div class="container">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <rect x="0" y="0" width="200" height="200" fill="none" stroke="grey" stroke-width="8"></rect>
            <rect x="0" y="0" width="200" height="200" fill="none" stroke="blue" stroke-width="8" class="rect-process"></rect>
          </svg>
        </div>

        <div class="container">
          <svg viewBox="0 0 1024 1024" width="200" height="200">
            <path class="logo" d="M512 896a26.688 26.688 0 0 1-19.424-8.32L192 577.92a228.16 228.16 0 0 1-64-160 228.16 228.16 0 0 1 64-160 215.488 215.488 0 0 1 310.4 0l9.6 9.856 9.6-9.856a215.488 215.488 0 0 1 310.4 0 228.16 228.16 0 0 1 64 160 228.16 228.16 0 0 1-64 160l-300.48 309.76A26.688 26.688 0 0 1 512 896zM347.296 248.48a161.472 161.472 0 0 0-116.352 49.568 170.784 170.784 0 0 0-48 119.904 171.104 171.104 0 0 0 48 119.904L512 827.552l281.152-289.696a170.784 170.784 0 0 0 48-119.904 171.104 171.104 0 0 0-48-119.904 161.216 161.216 0 0 0-232.672 0l-28.8 29.888a26.848 26.848 0 0 1-38.848 0l-28.8-29.888a162.368 162.368 0 0 0-116.736-49.568z" p-id="925"></path>
          </svg>
        </div>

        <div class="container">
          <svg class="line-container" width="200" height="200" viewBox="0 0 400 400">
            <line class="line" x1="0" y1="50" x2="400" y2="50" fill="none" stroke-width="20" stroke="red"></line>
          </svg>
        </div>

        <div class="container">
          <svg width="200" height="200">
            <rect x="0" y="0" width="100" height="100" fill="red">
              <set attributeName="x" attributeType="XML" to="10" begin="1s" />
              <set attributeName="x" attributeType="XML" to="20" begin="2s" />
              <set attributeName="x" attributeType="XML" to="30" begin="3s" />
              <set attributeName="x" attributeType="XML" to="40" begin="4s" />
              <set attributeName="x" attributeType="XML" to="50" begin="5s" />
            </rect>
          </svg>
          <svg width="500" height="200" viewBox="0 0 500 200">
            <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
              <animate attributeName="cx" from="0" to="200" dur="5s" repeatCount="indefinite" />
              <animate attributeName="cy" from="0" to="200" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
          <svg width="400" height="400">
            <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
              <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1" />
            </polygon>
          </svg>

          <svg width="200" height="200" viewBox="0 0 200 200">
            <rect x="0" y="0" width="60" height="60" fill="red">
              <animateTransform attributeName="transform" begin="0s" dur="3s" type="scale" from="1" to="2" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
        <div class="container">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <rect x="0" y="0" width="10" height="10" fill="red">
              <animateMotion
                path="M 10 10 L 110 10 L 110 110 L 10 110 Z"
                dur="5s"
                rotate="auto"
                fill="freeze"
                repeatCount="indefinite"
              />
            </rect>
            <path id="motion-path" d="M 10 10 L 110 10 L 110 110 L 10 110 Z" fill="none" stroke="green" />
          </svg>

          <svg width="200" height="200" viewBox="0 0 200 200">
            <rect x="0" y="0" fill="red" width="10" height="10">
              <animateMotion
                path="M10 10 L110 10 L110 110 L10 110 Z"
                dur="5s"
                rotate="0"
                fill="freeze"
                repeatCount="indefinite"
              />
            </rect>
            <path d="M10 10 L110 10 L110 110 L10 110 Z" fill='none' stroke="green"></path>
          </svg>

          <svg viewBox="0 0 200 200" width="200" height="200">
              <rect x="0" y="0" rx="0" ry="0" width="10" height="10" fill="red">
                <animateMotion
                  id="forward-rect"
                  path="M 10 10 L 110 10 L 110 110 L 10 110"
                  dur="2s"
                  rotate="0"
                  fill="freeze"
                  begin="0; backward-rect.end + 0.5s"
                />
                <animateMotion
                  id="backward-rect"
                  path="M 10 110 L 110 110 L 110 10 L 10 10"
                  dur="2s"
                  rotate="0"
                  fill="freeze"
                  begin="forward-rect.end + 0.5s"
                />
                <animate
                  id="red-to-blue"
                  attributeType="XML"
                  attributeName="fill"
                  begin="0; blue-to-red.end + 1s"
                  from="red"
                  to="blue"
                  dur="2s"
                  fill="freeze"
                />
                <animate
                  id="blue-to-red"
                  attributeType="XML"
                  attributeName="fill"
                  begin="red-to-blue.end + 1s"
                  from="blue"
                  to="red"
                  dur="2s"
                  fill="freeze"
                />
              </rect>
              <path d="M 10 10 L 110 10 L 110 110 L 10 110" fill="none" stroke-width="1" stroke="blue"/>
          </svg>

          <svg viewBox="0 0 200 200" width="200" height="200">
              <g id="rect1">
                <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
                  <animate
                    attributeType="XML"
                    attributeName="fill"
                    from="red"
                    to="green"
                    begin="rect1.click"
                    dur="2s"
                    fill="freeze"
                  />
                </rect>
              </g>
              <animateTransform
                attributeType="XML"
                attributeName="transform"
                type="translate"
                from="0, 0"
                to="50, 50"
                begin="rect1.click"
                dur="2s"
                fill="freeze"
              />
              <rect x="0" y="100" width="100" height="100" fill="blue">
                <animate
                  attributeType="XML"
                  attributeName="fill"
                  from="blue"
                  to="green"
                  begin="rect1.click"
                  dur="2s"
                  fill="freeze"
                />
              </rect>
          </svg>
        </div>

        <div class="container">
          <svg width="400" height="400">
            <defs>
              <mask id="test-mask">
                <rect  x="5" y="5" width="390" height="300" fill="red"></rect>
                <circle r="50" cx="150" cy="150"></circle>
              </mask>
            </defs>
            <rect x="5" y="5" width="390" height="390" fill="red"></rect>
            <rect x="5" y="5" width="390" height="390" fill="blue"
              mask="url(#test-mask)"
            ></rect>
          </svg>
        </div>

        <div class="container">
          <svg width="400" height="400">
            <defs>
              <mask id="test-mask">
                <rect  x="5" y="5" width="390" height="300" fill="red"></rect>
                <circle r="50" cx="150" cy="150"></circle>
              </mask>
              <linearGradient id="test-linear-gradient">
                <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
                <stop offset="50%" stop-color="green"></stop>
                <stop offset="100%" stop-color="blue" stop-opacity="0.5"></stop>
              </linearGradient>
              <radialGradient
                id="test-radial-gradient"
                r="50%"
                cx="50%"
                cy="50%"
                fx="25%"
                fy="75%"
              >
                <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
                <!-- <stop offset="50%" stop-color="green"></stop> -->
                <stop offset="100%" stop-color="blue" stop-opacity="1.5"></stop>
              </radialGradient>
            </defs>
            <!-- <rect x="5" y="5" width="390" height="390" fill="url(#test-linear-gradient)"></rect> -->
            <!-- <rect x="5" y="5" width="150" height="150" fill="url(#test-radial-gradient)"></rect> -->
            <circle cx="200" cy="200" r="150" fill="url(#test-radial-gradient)"></circle>
          </svg>
        </div>

        <div class="container bg-gray">
          <svg width="400" height="400">
            <defs>
              <mask id="test-mask">
                <rect  x="5" y="5" width="390" height="300" fill="red"></rect>
                <circle r="50" cx="150" cy="150"></circle>
              </mask>
              <linearGradient id="test-linear-gradient">
                <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
                <stop offset="50%" stop-color="green"></stop>
                <stop offset="100%" stop-color="blue" stop-opacity="0.5"></stop>
              </linearGradient>
              <!-- <radialGradient
                id="test-radial-gradients"
                r="50%"
                cx="50%"
                cy="50%"
                fx="25%"
                fy="75%"
              >
                <stop offset="0%" stop-color="white" stop-opacity="1"></stop>
                <stop offset="10%" stop-color="yellow" stop-opacity="1"></stop>
                <stop offset="95%" stop-color="red" stop-opacity="1.5"></stop>
              </radialGradient> -->
              <radialGradient
                id="test-radial-gradients"
                r="50%"
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#test-radial-gradients)"></circle>
          </svg>
        </div>

    </div>

</template>

<script>
  export default {
    name: 'SvgAnimation',
    mounted() {
      var logo = document.getElementsByClassName('logo')[0];
      console.log("logo: ",logo.getTotalLength())
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    svg {
      border: 1px solid #000;

    }
  }
  .circle{
    /* stroke-dasharray: 10 1131; infinite*/
    animation: circle 5s linear 2;
  }
  @keyframes circle {
    from {
      stroke-dasharray: 0 1131;
    }
    to {
      stroke-dasharray: 1131 0;
    }
  }

  .rect-process{
    animation: rect-process 5s linear 2;
  }
  @keyframes rect-process {
    from {
      stroke-dasharray: 0 800;
    }
    to {
      stroke-dasharray: 800 0;
    }
  }

  .logo{
    fill: none;
    stroke: #333;
    stroke-width: 5;
    /* animation: logo-process 3s linear infinite; */
    animation: logo-process 3s linear 1 forwards;
  }
  .line{
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: stroke-dashoffset .5s ease-out;
  }
  .line-container{
    &:hover{
      .line{
        stroke-dashoffset: 0;
      }
    }
  }

  @keyframes logo-process {
    0% {
      fill: none;
      stroke: #333;
      stroke-dasharray: 4318;
      stroke-dashoffset: 4318;
    }
    50% {
      fill: none;
      stroke: #333;
      stroke-dasharray: 4318;
      stroke-dashoffset: 0;
    }
    75% {
      fill: red;
      stroke: red;
    } 
    100% {
      fill: yellow;
      stroke: yellow;
    } 
  }
  .bg-gray{
    background: #333;
  }

</style>