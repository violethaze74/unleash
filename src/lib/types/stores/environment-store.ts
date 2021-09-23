import { IEnvironment, IEnvironmentCreate } from '../model';
import { Store } from './store';

export interface IEnvironmentStore extends Store<IEnvironment, string> {
    exists(name: string): Promise<boolean>;
    create(env: IEnvironmentCreate): Promise<IEnvironment>;
    update(
        env: Pick<IEnvironment, 'displayName' | 'type' | 'protected'>,
        name: string,
    ): Promise<IEnvironment>;
    updateProperty(
        id: string,
        field: string,
        value: string | number | boolean,
    ): Promise<void>;
    updateSortOrder(id: string, value: number): Promise<void>;
    importEnvironments(environments: IEnvironment[]): Promise<IEnvironment[]>;
}
