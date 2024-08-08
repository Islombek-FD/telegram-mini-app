export declare namespace IApi {
  export namespace Single {
    export type Response = IEntity.Data;
  }
}

export declare namespace IEntity {
  export interface Data extends IForm.Values {
    id: number;
  }
}

export declare namespace IForm {
  export interface Values {
    placeId: number | null;
    userId: number | null;
    text: string;
  }
}
