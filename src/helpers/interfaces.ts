import { FILE_TYPE } from '@/helpers/enums';

export interface IParams {
  page?: number;
  perPage?: number;
  sort?: ISort;
  filter?: IFilter[];
}

export interface ISort {
  name?: string;
  direction?: 'asc' | 'desc';
}

export interface IFilter {
  key: string;
  operation: '>' | '>=' | '<' | '<=' | '=' | '!=' | '%_%' | '%_' | '_%' | 'in';
  value: string | number | string[] | number[];
  type:
    | 'STRING'
    | 'NUMBER'
    | 'BOOLEAN'
    | 'LOCAL_DATE'
    | 'LOCAL_DATETIME'
    | 'DATE'
    | 'JSON'
    | 'ENUM_COLLECTION';
}

export interface IMeta {
  totalPages: number;
  totalItems: number;
  current: number;
  perPage: number;
}

export interface IFile {
  id: string;
  name: string;
  url: string;
  size: string;
  type: FILE_TYPE;
  extension: string;
  uuid: string;
}
