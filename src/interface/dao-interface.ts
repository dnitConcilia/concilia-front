export interface DaoInterface<T> {

	getAll(): Promise<T[]>;
	getById(id: number): Promise<T>;
	create(object: T): Promise<T>;
	update(object: T): Promise<T>;
	delete(id: number): Promise<T>;
}
