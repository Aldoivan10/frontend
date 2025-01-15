export class LinkedArray<T> extends Array<T> {
    public _index = 0

    constructor(...items: T[]) {
        super(...items)
    }

    public clean() {
        this.length = 0
        this._index = 0
    }

    public replace(array: Array<T>, index: number = 0) {
        this.length = 0
        this.push(...array)
        this._index = index
    }

    public current() {
        return this[this._index]
    }

    public next() {
        this._index = (this._index + 1) % this.length
        return this[this._index]
    }

    public previous() {
        this._index = (this._index - 1 + this.length) % this.length
        return this[this._index]
    }
}
