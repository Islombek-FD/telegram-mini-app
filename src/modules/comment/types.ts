import * as UserTypes from '@/modules/user/types';

export declare namespace IApi {
  export namespace List {
    export interface Response {
      data: IEntity.Data[];
    }
  }

  export namespace Single {
    export type Response = IEntity.Data;
  }
}

export declare namespace IEntity {
  export interface Data extends Omit<IForm.Values, 'userId'> {
    id: number;
    user: UserTypes.IEntity.Data;
    createdTime: string;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IEntity.Data[];
  }

  export interface Single {
    item: IEntity.Data;
  }

  export interface Delete {
    id: number;
  }
}

export declare namespace IForm {
  export interface Values {
    placeId: number | null;
    userId: number | null;
    text: string;
    star: number;
  }
}
