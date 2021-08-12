<template>
  <button
    :class="classes"
    @click="click"
  >
    {{name}}
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    name: {
      type: String,
      default: ''
    },
    red: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'ui-button': true,
        'ui-button--red': this.red,
        'ui-button--outline': this.outline
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  .ui-button {
    border-radius: 10px;

    &--red {
      width: 100%;
      border: 1px solid #D6073D;
      background: #D6073D;
      color: #fff;
      font-family: Montserrat;
      font-weight: 500;
      padding: 5px 0;

      &:hover {
        border: 1px solid #D6073D;
        background: transparent;
        color: #D6073D;
      }
    }
  }
</style>
