export class TypingEnum {
  static names: Array<string>;
  static values: Array<number>;
  private static enumMembers: Array<TypingEnum>;

  static by_value(value: number): TypingEnum | undefined {
    const index = this.values.indexOf(value);
    if (index >= 0) {
      return this.enumMembers[index];
    }
    return undefined;
  }

  static by_name(name: string): TypingEnum | undefined {
    const index = this.names.indexOf(name);
    if (index >= 0) {
      return this.enumMembers[index];
    }
    return undefined;
  }

  static finish() {
    const values: Array<number> = [];
    const names: Array<string> = [];
    const enumMembers: Array<TypingEnum> = [];

    for (const [key, object] of Object.entries(this)) {
      values.push(object.value);
      names.push(key);
      object.name = key;
      enumMembers.push(object);
    }
    this.names = names;
    this.values = values;
    this.enumMembers = enumMembers;
  }

  static [Symbol.iterator]() {
    return this.enumMembers[Symbol.iterator]();
  }

  readonly name!: string;
  readonly value: number;
  readonly description: string;

  constructor(value: number, description: string) {
    this.value = value;
    this.description = description;
  }

  toString() {
    return this.constructor.name + "." + this.name;
  }
}
