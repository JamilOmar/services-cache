import { IStorage } from '../storages/IStorage';

export abstract class AbstractBaseStrategy {

    constructor(protected storage: IStorage) { }

    public async abstract getItem<T>(key: string): Promise<T>;
    public async abstract setItem(key: string, content: any, options: any): Promise<void>;
    public async abstract clear(): Promise<void>;
    public async abstract deleteItem(key: string): Promise<void>;
}
