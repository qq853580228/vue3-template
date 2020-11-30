<template>
  <div class="todo-list">
    <div>
      <label>New Todo</label>
      <input
        v-model="state.todo"
        @keyup.enter="handleAddTodo"
      >
    </div>
    <div>
      <h3>Todo List ({{ todos.length }})</h3>
      <ul>
        <li
          v-for="item in todos"
          :key="item.id"
          @click="handleChangeStatus(item, true)"
        >
          <input type="checkbox">
          <label>{{ item.text }}</label>
        </li>
      </ul>
    </div>
    <div>
      <h3>Done List ({{ dones.length }})</h3>
      <ul>
        <li
          v-for="item in dones"
          :key="item.id"
          @click="handleChangeStatus(item, false)"
        >
          <input
            type="checkbox"
            checked
          >
          <label>{{ item.text }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';
// import { useRouter } from 'vue-router';

interface TodoItem {
  id: number;
  done: boolean;
  text: string;
}

const todoInitList: Array<TodoItem> = [
  {
    id: 1,
    done: false,
    text: 'Eat',
  }, {
    id: 2,
    done: false,
    text: 'Sleep',
  }, {
    id: 3,
    done: false,
    text: 'Play',
  },
];

export default {
  setup(/* props, context */) {
    const state = reactive({
      todoList: todoInitList,
      todo: '',
    });

    const todos = computed(() => state.todoList.filter((item) => !item.done));
    const dones = computed(() => state.todoList.filter((item) => item.done));

    const handleChangeStatus = (item: TodoItem, status: boolean) => {
      const itemToChange = item;
      itemToChange.done = status;
    };

    const handleAddTodo = () => {
      if (!state.todo) {
        // eslint-disable-next-line no-alert
        alert('todo text is empty');
        return;
      }

      state.todoList.push({
        text: state.todo,
        id: Date.now(),
        done: false,
      });
      state.todo = '';
    };

    return {
      state,
      todos,
      dones,
      handleChangeStatus,
      handleAddTodo,
    };
  },
};
</script>

<style scoped>
.todo-list {
  text-align: center;
}

.todo-list ul li {
  list-style: none;
}
</style>
