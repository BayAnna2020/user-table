import {UserStorageServiceI} from "./ports";
import {LocalStorageAdapter} from "../services/LocalStorageAdapter";
import { getUserInfo } from "../domain/vuexUser";
import { UserInfoI } from "../domain/UserInfo";

/** используйте перебрать информацию о пользователе */
export function useMapUserInfo() {
    const storage: UserStorageServiceI = new LocalStorageAdapter();

    /** перебрать информацию о пользователе */
    return function mapUserInfo(userInfo: UserInfoI) {

        let nested = userInfo.children?.map(function(item) {
            return {
                key: item.id,
                name: item.name,
                parent: item.parentId,
            }
        });

        return nested;
    }
}
