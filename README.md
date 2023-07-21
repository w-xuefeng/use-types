# useTypes - a useful type library

_useTypes_ is a type library that assists developers in quickly using types in their typescript projects.

- Install

```bash
npm i use-types -D
```

- Add `"use-types"` to `tsconfig.json` like this:

```diff
{
  "compilerOptions": {
    "types": [
+      "use-types"
    ]
  }
}
```

now, you can use `useTypes` globally in your project.

## Type List

### useTypes.data
- `Nullable<T>`
- `UndefinedAble<T>`
- `InstanceType<T>`
- `DeepKeyOf<T>`
- `DeepGet<T, K>`
- `PickKeys<T, P>`
- `ICustomIPaginationParams`
- `IPaginationParams`
- `IPagination<T>`
- `RefType<T>`
- `ICustomResponse`
- `IResponse<T>`
- `PartialBut<T, B>`
- `PartialOnly<T, O>`
- `RequiredBut<T, B>`
- `RequiredOnly<T, O>`
- `ReadonlyBut<T, B>`
- `ReadonlyOnly<T, O>`
- `ToType<T>`

You can redeclare some interfaces to extend business fields:
```ts
declare namespace useTypes.data {
  export interface ICustomIPaginationParams {
    // your business fields can be defined here
    pageNo: number;
  }

  export interface ICustomResponse {
    // your business fields can be defined here
    errors?: Record<string, any>;
  }
}
``
