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
   * custom response type from backend
   */
  export interface ICustomResponse {}

  /**
   * common response type, data is T, from backend
   */
  export interface IResponse<T> extends ICustomResponse, Record<string, any> {
    success: boolean;
    code: number;
    message: string;
    data: T;
  }

  /**
   * Partial<T> but B in T
   */
  export type PartialBut<
    T extends Record<string, any>,
    B extends keyof T,
  > = Partial<Omit<T, B>> & Pick<T, B>;

  /**
   * Partial<T> only O in T
   */
  export type PartialOnly<
    T extends Record<string, any>,
    O extends keyof T,
  > = Omit<T, O> & Partial<Pick<T, O>>;

  /**
   * Required<T> but B in T
   */
  export type RequiredBut<
    T extends Record<string, any>,
    B extends keyof T,
  > = Required<Omit<T, B>> & Pick<T, B>;

  /**
   * Required<T> only O in T
   */
  export type RequiredOnly<
    T extends Record<string, any>,
    O extends keyof T,
  > = Omit<T, O> & Required<Pick<T, O>>;

  /**
   * Readonly<T> but B in T
   */
  export type ReadonlyBut<
    T extends Record<string, any>,
    B extends keyof T,
  > = Readonly<Omit<T, B>> & Pick<T, B>;

  /**
   * Readonly<T> only O in T
   */
  export type ReadonlyOnly<
    T extends Record<string, any>,
    O extends keyof T,
  > = Omit<T, O> & Readonly<Pick<T, O>>;

  /**
   * to type from interface T extends Record<string, any>
   */
  export type ToType<T extends Record<string, any>> = {
    [k in keyof T]: T[k];
  };
}
