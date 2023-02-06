<template>
  <div class="User-info-page">
    <button 
            :disabled="isModalOpen"
            @click="handlerShowSettings"
            class="User-info-page__btn btn btn-primary">Добавить
    </button>

    <add-user-modal
        v-if="isModalOpen"
        :user="sortedItemInfo"
        @closeModal="handlerShowSettings"
        @addIUserInfo="setNewUserInfo"
    />

    <user-item
        v-for="user in sortedItemInfo"
        :key="user.id"
        :user="user"
        @deleteInfoUser="deleteInfoUser"
        @mapInfoUser="mapInfoUser"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UserItem from './UserItem.ce.vue'
import AddUserModal from './AddUserModal.ce.vue'

import {UserInfoI} from "../domain/UserInfo";
import {useDeleteUserInfo} from "../app/deleteUserInfo";
import {useAddUserInfo} from "../app/addUserInfo";
import {useInitUserInfo} from "../app/initUserInfo";
import { useMapUserInfo } from "../app/mapUserInfo";

const deleteUserInfo = useDeleteUserInfo();
const addUserInfo = useAddUserInfo();
const mapUserInfo = useMapUserInfo();

export default defineComponent({
  components: {
    UserItem,
    AddUserModal
  },
  data() {
    return {
      isModalOpen: false,
      userInfo: [] as UserInfoI[],
    }
  },
  methods: {
    /** обработчик Показать настройки */
    handlerShowSettings() {
      this.isModalOpen = !this.isModalOpen;
    },

    /** установить новую информацию о пользователе */
    setNewUserInfo(sName: string, sPhone: string, iParentId?: number) {
      const newUserId = this.userInfo.length + 1;
        
      const newUser = addUserInfo(newUserId, sName, sPhone, iParentId);
      if (newUser) {
        this.userInfo.push(newUser)
      }
    },

    /** удалить информацию о пользователе */
    deleteInfoUser(id: number) {
      this.userInfo = deleteUserInfo(id);
    },

    /** создадим дубликат массива объектов только с необходимым набором свойств */
    mapInfoUser(userInfo: UserInfoI) {
      // this.userInfo = mapUserInfo(userInfo);
      mapUserInfo(userInfo);
    },
  },
  computed: {
    /** Информация об отсортированном элементе */
    sortedItemInfo() {

      return this.userInfo;
    }
  },
  mounted() {
    /** инициализация */
    this.userInfo = useInitUserInfo();
  }
})
</script>
