<template>
  <div>
      <notifications></notifications>
      <el-button class="primary" @click="addNotification('top','right')">233333</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        addNotification(verticalAlign = 'top', horizontalAlign = 'right') {
            // this.$notify({
            //     message: 'Welcome',
            //     type: 'success'
            // })
            this.$notify({
                component: function(){
                        return {
                        template: '<h1>Hello</h1>'
                    };
                },
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: "success"
            })
        }
    },
}
</script>

<style>

</style>