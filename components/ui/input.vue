<template>
  <input
    type="text"
    :placeholder="name"
    :class="classes"
    v-model="inputValue"
  >
</template>

<script>
export default {
  name: 'input',
  props: {
    name: {
      type: String,
      default: ''
    },
    line: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return {
        'ui-input': true,
        'ui-input--line': this.line,
        'ui-input--outline': this.outline,
        'ui-input--error': this.error
      }
    },
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ui-input {
  color: #303136;
  outline: none;

  &::placeholder {
    color: #9496A6;
  }

  &--outline {
    border: 1px solid #CBCBCB;
    border-radius: 10px;
    padding: 5px 20px;
  }

  &--line {
    border-bottom: 1px solid #EFF1F9;
    font-size: 14px;
    padding-bottom: 6px;

    &:focus {
      border-bottom: 1px solid #6F849C;
    }
  }

  &--error {
    border-color: red;
  }
}
</style>
