<template>
    <div class="y-input" :class="{ error }">
        <i v-if="icon !== ''" :name="icon" :class="classes"></i>
        <input :value="value" :type="type" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
            :class="{ [`inline-icon-${iconPosition}`]: icon !== '' }" 
            @change="$emit('change', $event.target.value)"
            @focus="$emit('focus', $event.target.value)" 
            @blur="$emit('blur', $event.target.value)"
            @input="$emit('input', $event.target.value)" />
        <template v-if="error">
            <i name="error" class="icon-error"></i>
            <span class="message-error">{{ error }}</span>
        </template>
    </div>

</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: '',
            },
            iconPosition: {
                type: String,
                default: 'left',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            value: {
                type: String,
            },
            type: {
                type: String,
                default: 'text',
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            error: {
                type: String,
            },
            placeholder: {
                type: String,
                default: '',
            },
        },
        computed:{
            classes() {
                return {
                [`icon-left`]: this.icon !== '' && this.iconPosition === 'left',
                [`icon-right`]: this.icon !== '' && this.iconPosition === 'right',
                }
            },

        }
    }
</script>

<style>
/* &.inline-icon-left {
    padding-left: 2em;
}
&.inline-icon-right {
    padding-right: 2em;
} */
.icon-left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 2;
}
.icon-right {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    z-index: 2;
}

</style>