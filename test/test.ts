interface IUserVO {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

type UserRequiredButPhone = useTypes.data.RequiredBut<IUserVO, "phone">;
type UserRequiredButPhoneDisplay = useTypes.data.ToType<UserRequiredButPhone>;

type UserWithEmail = useTypes.data.RequiredOnly<IUserVO, "email">;
type UserWithEmailDisplay = useTypes.data.ToType<UserWithEmail>;

type UserPartialButId = useTypes.data.PartialBut<IUserVO, "id">;
type UserPartialButIdDisplay = useTypes.data.ToType<UserPartialButId>;

type UserPartialName = useTypes.data.PartialOnly<IUserVO, "name">;
type UserPartialNameDisplay = useTypes.data.ToType<UserPartialName>;

type UserReadlonyButName = useTypes.data.ReadonlyBut<IUserVO, "name">;
type UserReadlonyButNameDisplay = useTypes.data.ToType<UserReadlonyButName>;

type UserReadonlyId = useTypes.data.ReadonlyOnly<IUserVO, "id">;
type UserReadonlyIdDisplay = useTypes.data.ToType<UserReadonlyId>;
