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
  export interface Data {
    id: number;
    fullName: string;
    username: string;
    telegramId: number;
    lang: string;
    profilePhotoUrl: string;
    phone: string;
  }
}

export declare namespace IQuery {
  export interface List {
    items: IEntity.Data[];
  }

  export interface Single {
    item: IEntity.Data;
  }
}
