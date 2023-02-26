import { Router } from "express";

export function summary(router: Router) {

  const routemap = new Map<string, string[]>();
  router.stack.forEach(r => {
    if (r.route && r.route.path) {
      const method = Object.keys(r.route.methods)[0].toUpperCase();
      const path: string = r.route.path;
      routemap.set(path, [...(routemap.get(path) ?? []), method]);
    }
  });

  return routemap
}


