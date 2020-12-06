<template>
  <div class="loading">
      <svg :width="width" :height="height" viewBox="0 0 50 50">
          <!-- 
              stroke-dasharray=2pir/4= 2*3.1415926*22/4 = 34
           -->
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke-width="3"
            stroke="#3be6cb"
            stroke-dasharray="34"
            stroke-linecap="round"
          >
                <!-- from="0 25 25"
                to="360 25 25" -->
           <animateTransform
                attributeName="transform"
                type="rotate"
                dur="2s"
                values="0 25 25;360 25 25"
                repeatCount="indefinite"
           />
           <animate
                attributeName="stroke"
                values="#3be6cb;#02bcfe;#3be6cb"
                dur="2s"
                repeatCount="indefinite"
           />

          </circle>
          <circle
            cx="25"
            cy="25"
            r="12"
            fill="none"
            stroke-width="3"
            stroke="#02bcfe"
            stroke-dasharray="19"
            stroke-linecap="round"
          >
                <!-- from="360 25 25"
                to="0 25 25" -->
            <animateTransform
                attributeName="transform"
                type="rotate"
                dur="2s"
                values="360 25 25;0 25 25"
                repeatCount="indefinite"
            />
            <animate
                attributeName="stroke"
                values="#02bcfe;#3be6cb;#02bcfe"
                dur="2s"
                repeatCount="indefinite"
           />
          </circle>
      </svg>
      <svg :width="width" :height="height" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
          <!-- 
              stroke-dasharray=2pir/4= 2*3.1415926*22/4 = 34
           -->
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke-width="3"
            :stroke="outsideColor"
            stroke-dasharray="34"
            stroke-linecap="round"
          >
                <!-- from="0 25 25"
                to="360 25 25" -->
           <animateTransform
                attributeName="transform"
                type="rotate"
                :dur="`${duration}s`"
                values="0 25 25;360 25 25"
                repeatCount="indefinite"
           />
           <animate
                attributeName="stroke"
                :values="outsideColorAnimation" 
                :dur="`${+duration * 2}s`"
                repeatCount="indefinite"
           />

          </circle>
          <circle
            cx="25"
            cy="25"
            r="12"
            fill="none"
            stroke-width="3"
            :stroke="insideColor"
            stroke-dasharray="19"
            stroke-linecap="round"
          >
                <!-- from="360 25 25"
                to="0 25 25" -->
            <animateTransform
                attributeName="transform"
                type="rotate"
                :dur="`${duration}s`"
                values="360 25 25;0 25 25"
                repeatCount="indefinite"
            />
            <animate
                attributeName="stroke"
                :values="insideColorAnimation" 
                :dur="`${+duration * 2}s`"
                repeatCount="indefinite"
           />
          </circle>
      </svg>
      <div class="loading-content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        width:{
            type: [Number, String],
            default: 50
        },
        height: {
            type: [Number, String],
            default: 50
        },
        outsideColor: {
            type: String,
            default: '#3be6cb'
        },
        insideColor: {
            type: String,
            default: '#02bcfe'
        },
        duration: {
            type: [Number, String],
            default: 2
        }
    },
    computed: {
        outsideColorAnimation(){
            return `${this.outsideColor};${this.insideColor};${this.outsideColor}`
        },
        insideColorAnimation(){
            return `${this.insideColor};${this.outsideColor};${this.insideColor}`
        }
    },

}
</script>

<style>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>