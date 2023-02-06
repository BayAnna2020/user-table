import {UserInfoI} from "../domain/UserInfo";
import {UserStorageServiceI} from "../app/ports";

export class LocalStorageAdapter implements UserStorageServiceI  {
    private _KEY_FOR_LC: string = 'Users_Table_State';

    constructor() {
        /** Получить состояние из локального хранилища */
        this.getStateFromLC();
    }

    /** Получить состояние из локального хранилища */
    private getStateFromLC(): UserInfoI[] {
        const dataFromLC = localStorage.getItem(this._KEY_FOR_LC);
        if (dataFromLC) {
            return JSON.parse(dataFromLC);
        }
        return [];
    }

    /** Установить состояние в локальное хранилище */
    private setStateToLC(data: UserInfoI[]) {
        const dataToLC = JSON.stringify(data);
        localStorage.removeItem(this._KEY_FOR_LC);
        localStorage.setItem(this._KEY_FOR_LC, dataToLC);
    }

    /** Установить состояние */
    public setState(data: UserInfoI[]) {
        this.setStateToLC([...data]);
    }

    /** Получить состояние */
    public getState(): UserInfoI[] {
        return this.getStateFromLC();
    }

    /** Удалить элемент из состояния */
    public removeItemFromState(id: number) {
        const state = this.getStateFromLC();
        const newState = state.filter(item => item.id !== id)
        this.setStateToLC(newState);
    }
}
