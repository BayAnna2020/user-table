<template>
  <div 
    v-if="user" 
  >
    <div class="UserTable">
      <span @click="emit('mapInfoUser', user)"  :class="{'user-child' : user.parentId}"> {{ user.name }} </span>
      <span  :class="{'user-child' : user.parentId}"> {{ user.phone }} </span>
      <button @click="emit('deleteInfoUser', user.id)"
              class="btn btn-danger">delete
      </button>
    </div>
  </div>

  <div v-if="user.children">
    <div v-for="children in user.children" class="UserTable">
      <span @click="emit('mapInfoUser', user)"  :class="{'user-child' : children.parentId}"> {{ children.name }} </span>
      <span  :class="{'user-child' : children.parentId}"> {{ children.phone }} </span>
      <button @click="emit('deleteInfoUser', children.id)"
              class="btn btn-danger">delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UserInfoI} from "../domain/UserInfo";

const emit = defineEmits([
  'deleteInfoUser',
  'mapInfoUser',
])

const {user} = defineProps<{ user: UserInfoI }>()

</script>
