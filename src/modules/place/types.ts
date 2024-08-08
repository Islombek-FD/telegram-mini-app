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
    images: Image[];
    image: string;
    delivery: boolean;
    placeId: number;
    logo: string;
    name: string;
    phone: string;
    phone2: string;
    photoUrl: string;
    latitude: number;
    longitude: number;
    placeType: string[];
    rating: number;
    workStartTime: string;
    workEndTime: string;
    workDays: WorkDay[];
    status: boolean;
    freeWifi: string;
    website: string;
    instagram: string;
    telegram: string;
    telegramBot: string;
    facebook: string;
    twitter: string;
    youtube: string;
    street: string;
    info: string;
    fullAddress: string;
    timezone: string;
    about: string[];
    district: string;
    city: string;
    country: string;
    workingHours: string;
    type: string;
  }

  interface Image {
    id: number;
    image: string;
    created: string;
    placeId: number;
    userId: number;
  }

  interface WorkDay {
    endTime: string;
    dayOfWeek: number;
    startTime: string;
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
