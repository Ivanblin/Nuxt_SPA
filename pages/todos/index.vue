<template>
  <div>
    <h1 class="mb-8">Список задач</h1>
    <wrapper-block class="text-sm font-medium overflow-x-auto h-5/6">
      <div class="flex justify-between">
        <div class="todo-header__title">Задача</div>
        <div class="todo-header__title">Статус</div>
      </div>
      <div class="todo-lists">
        <div
          class="todo-lists__item flex justify-between"
          v-for="(todo, i) in todos"
          :key="i"
        >
          <div class="item__text">{{todo.title}}</div>
          <div class="item__status flex items-center">
            <input :checked='todo.completed' type="checkbox"  :id="todo.id" class="mr-2 custom-checkbox">
            <label :for="todo.id">Выполнено</label>
          </div>
        </div>
      </div>
    </wrapper-block>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WrapperBlock from '@/components/blocks/wrapperContent'

export default {
  layout: 'rootlayout',
  components: {
    WrapperBlock
  },
  computed: {
    ...mapGetters({
      todos: 'todos/allTodos'
    })
  },
  async mounted () {
    await this.$store.dispatch('todos/fetchTodos')
  }
}
</script>

<style lang="scss" scoped>
.todo-header__title {
  color: #BABABA;
  font-weight: 500;
}

.todo-lists__item {
  padding: 16px 0;
  border-top: 1px solid #EFF1F9;
  border-bottom: 1px solid #EFF1F9;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: #BABABA;
}
.custom-checkbox+label:hover {
  color: #51CB3D;
}
.custom-checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  // border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox:checked+label {
  color: #51CB3D;
}
.custom-checkbox:checked+label::before {
  border-color: #51CB3D;
  // background-color: #0b76ef;
   border-color: #51CB3D;
  background-image: url("../../assets/images/Union.svg") !important;
}
.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
  border-color: #51CB3D;
  background-image: url("../../assets/images/Union.svg") !important;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active+label::before {
  // background-color: #b3d7ff;
  border-color: #BABABA;
}
/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus+label::before {
  // box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
   border-color: #51CB3D;

}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
  border-color: #BABABA;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
  background-color: #e9ecef;
}
</style>
