import { ValueTransformer } from "../../../../src";


export class BooleanTransformer implements ValueTransformer {
  public from(value?: number | null): boolean | undefined {
    if (isNullOrUndefined(value)) {
      return;
    }
    return value ? true : false;
  }

  public to(value?: boolean | null): number | undefined {
    if (isNullOrUndefined(value)) {
      return;
    }
    return value ? 1 : 0;
  }
}

function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
  return typeof obj === "undefined" || obj === null;
}
