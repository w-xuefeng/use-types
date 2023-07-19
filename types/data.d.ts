declare namespace useTypes.data {
  /**
   * T may be null
   */
  export type Nullable<T> = null | T;

  /**
   * T may be undefined
   */
  export type UndefinedAble<T> = undefined | T;

  /**
   * infer instance type R from class T
   */
  export type InstanceType<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer R ? R : any;

  /**
   * get deep property keys from T
   */
  export type DeepKeyOf<T> = T extends Record<string, any> ? {
      [k in keyof T]: k extends string
        ? T[k] extends Array<any> ? k : k | `${k}.${DeepKeyOf<T[k]>}`
        : never;
    }[keyof T]
    : never;

  /**
   * get deep property K from T
   */
  export type DeepGet<T, K> = T extends Record<string, any>
    ? K extends DeepKeyOf<T>
      ? K extends `${infer A}.${infer B}` ? DeepGet<T[A], B>
      : T[K]
    : never
    : never;

  /**
   * pick all properties of P from T
   */
  export type PickKeys<T, P extends string | never = never> = T extends Record<
    string,
    any
  > ? `${P}${{
      [k in keyof T]: k extends string ? k : never;
    }[keyof T]}`
    : never;

  /**
   * custom pagination params
   */
  export interface ICustomIPaginationParams {}

  /**
   * pagination params
   */
  export interface IPaginationParams
    extends ICustomIPaginationParams, Record<string, any> {
    pageSize: number;
    pageNum: number;
  }

  /**
   * pagination list item type is T
   */
  export interface IPagination<T>
    extends IPaginationParams, Record<string, any> {
    totalCount: number;
    totalPages: number;
    pageSize: number;
    pageNum: number;
    nextPage: boolean;
    prePage: boolean;
    list: T[];
  }

  /**
   * current type is T
   */
  export interface RefType<T> {
    current: T;
  }

  /**
   * custom response type form backend
   */
  export interface ICustomResponse {}

  /**
   * common response type, data is T, form backend
   */
  export interface Response<T> extends ICustomResponse, Record<string, any> {
    success: boolean;
    code: number;
    message: string;
    data: T;
  }
}
