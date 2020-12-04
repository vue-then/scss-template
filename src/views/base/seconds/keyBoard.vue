<style lang="scss">
html, body {height:100%}
.container {height:100%}
html, body {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    -webkit-use-select:none;
    -webkit-touch-callout: none;
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, fieldset, lengend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
    font-weight: normal
}
ul {
    list-style: none
}
table {
    border-collapse: collapse;
    border-spacing: 0
}
textarea {
    overflow: auto;
    resize: none
}
a, button {
    cursor: pointer
}
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
}
a {
    text-decoration: none;
    color: inherit;
}
  .box{
    height: 100%;
    border:1px solid #ccc;
    height: 45px;
    padding:10px;
    margin:10px;
    /* display: none; */
  }
</style>
<template>
  <div id="aap">
    <el-input v-model="val" @focus="keyFocus" type="search"></el-input>
    <div class="box">
       <wc-keyboard 
        placeholder="询问服务员后输入"
        label="消费金额"
        inter="9"
        decimal="0"
        v-model="val"/>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        val: ''
      }
    },
    mounted() {
      
    },
    methods: {
      keyFocus(){
        this.$bus.$emit('focus')
        document.activeElement.blur();
      }
    },
  }
</script>