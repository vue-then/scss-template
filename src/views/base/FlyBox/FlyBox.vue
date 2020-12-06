<template>
  <div class="fly-box" ref="fly-box" style="background: #333;">
      <svg :width="width" :height="height" >
          <defs>
                <!-- d="M5 5 L395 5 L395 395 L5 395 Z" -->
              <path
                id="fly-box-path"
                :d="path"
                fill="none"
              />
              <radialGradient
                id="radial-gradients"
                r="50%"
                cx="50%"
                cy="50%"
                fx="100%"
                fy="50%"
              >
                <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
              </radialGradient>
              <mask id="fly-box-mask">
                  <!-- fill="white" -->
                        <!-- path="M5 5 L395 5 L395 395 L5 395 Z" -->
                  <circle r="100" cx="0" cy="0" fill="url(#radial-gradients)">
                      <animateMotion
                        dur="2s"
                        :path="path"
                        rotate="auto"
                        repeatCount="indefinite"
                      />
                  </circle>
              </mask>
          </defs>
          <use 
            href="#fly-box-path"
            stroke-width="1"
            stroke="#235fa7"
          />
          <use 
            href="#fly-box-path"
            stroke-width="3"
            stroke="#4fd2dd"
            mask="url(#fly-box-mask)"
          />
      </svg>
      <div class="fly-box-content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "FlyBox",
    data(){
        return{
            width: 0,
            height: 0,
        }
    },
    computed: {
        path(){
            return `M5 5 L${parseInt(this.width) - 5} 5 L${parseInt(this.width) - 5} ${parseInt(this.height) - 5} L5 ${parseInt(this.height) - 5} Z`
        }
    },
    mounted() {
        console.log(this.$refs["fly-box"],'dom')
        var dom = document.querySelector('.fly-box')

        var height = window.getComputedStyle(dom).getPropertyValue('height')
        var width = window.getComputedStyle(dom).getPropertyValue('width')
        this.height = height;
        this.width = width;
        // this.width = this.$refs["fly-box"].offsetWidth;
        // this.height = this.$refs["fly-box"].offsetHeight;
    },

}
</script>

<style lang="scss" scoped>
.fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>