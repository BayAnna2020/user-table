import {UserStorageServiceI} from "./ports";
import {LocalStorageAdapter} from "../services/LocalStorageAdapter";
import { getUserInfo } from "../domain/vuexUser";

/** используйте Удалить информацию о пользователе */
export function useDeleteUserInfo() {
    const storage: UserStorageServiceI = new LocalStorageAdapter();

    /** Удалить информацию о пользователе */
    return function deleteUserInfo(idUserInfo: number) {
        const state = storage.getState();
        
        const userInfos = state.length ? state : getUserInfo();

        const newUserInfos = userInfos.filter(item => item.id !== idUserInfo);

        storage.setState([...newUserInfos]);

        return storage.getState();
    }
}
