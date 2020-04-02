import { navigateTo } from "../lib/routing";

export function error(message: string): never {
  throw new Error(message);
}

export function navigateOnError(url = "/"): never {
  return navigateTo(url) as never;
}
