export class DataResource<T> {
    constructor(private endpoint: string) {}

    async loadAll() {}
    async save(data: T) {}
}