import {UserStorageServiceI} from "./ports";
import {LocalStorageAdapter} from "../services/LocalStorageAdapter";
import { getUserInfo } from "../domain/vuexUser";


/** Инициализация - получить информацию о пользователях */
export function useInitUserInfo() {
    const storage: UserStorageServiceI = new LocalStorageAdapter();

    const state = storage.getState();
    
    const user = state.length ? state : getUserInfo();
    
    storage.setState([...user]);
    
    return user;
}
