import {UserStorageServiceI} from "./ports";
import {LocalStorageAdapter} from "../services/LocalStorageAdapter";
import { getUserInfo } from "../domain/vuexUser";

/** Используйте, чтобы добавить информацию о пользователе */
export function useAddUserInfo() {
    const storage: UserStorageServiceI = new LocalStorageAdapter();

    /** Добавление информацим о информацию о пользователе */
    return function addUserInfo(id: number, sName: string, sPhone: string, iParentId?: number) {

        const newUserInfo = {
            id: id,
            name: sName,
            phone: sPhone,
            parentId: iParentId,
        }

        const state = storage.getState();
        const userInfos = state.length ? state : getUserInfo();

        storage.setState([...userInfos, newUserInfo]);

        return newUserInfo;
    }
}
