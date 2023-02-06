<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Добавление пользователя!
        </slot>

        <button
          type="button"
          class="btn-close"
          @click="$emit('closeModal')"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          Имя:
        </slot>
        <input 
          class="modal-input"
          v-model="state.name"
          id="addIUserInfo"
          type="text"
          placeholder="Введите имя..."
        />
       </section>

       <section class="modal-body">
        <slot name="body">
          Телефон:
        </slot>
        <input 
          class="modal-input"
          v-model="state.phone"
          id="addIUserInfo"
          type="text"
          placeholder="+7-xxx-xxx-xx-xx"
        />
       </section>

       <section class="modal-body">
        <slot name="body">
          Начальник:
        </slot>

        <select
            v-model="state.parentId"
            class="modal-select"
            >
            <option
                v-for="(item, id) in user"
                :key="id"
                :value="id"
            >
                {{ item.name }}
            </option>
        </select>

       </section>

      <button
          type="button"
          class="btn-green"
          @click="addNewUser"
        >
          Сохранить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {UserInfoI} from "../domain/UserInfo";

const {user} = defineProps<{ user: UserInfoI[] }>()
const emit = defineEmits([
  'closeModal',
  'addIUserInfo',
  'deleteInfoUser',
])

const state = reactive({ 
  name: "",
  phone: "" ,
  parentId: null
});

const addNewUser = async () => {
  emit('addIUserInfo', state.name, state.phone, state.parentId);
  emit('closeModal');
  
  state.name = "" ;
  state.phone = "" ;
  state.parentId = null;
}
</script>
