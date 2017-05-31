# GlobalObject [![NPM version][npm-image]][npm-url]
> A package that shims and returns a reference to the global object, depending on the current execution environment.

## Installation
Simply do: `npm install @wessberg/globalobject`.

## Usage - in code

```typescript
import {GlobalObject, GlobalObjectIdentifier} from "@wessberg/globalobect";
// GlobalObject refers to 'self', 'global' or 'window'.
// GlobalObjectIdentifier is the name of the identifier.
```

## Changelog:

**v1.0.5**:

- Added a new exported property: `shimGlobalObjectStringified` which is a stringified shim that can be added in top of a bundle.

**v1.0.4**:

- Added a new function that this module exports: `shimGlobalObject`. Calling this from anywhere will shim the "window", "self", "root" and "global" properties on the global object.

**v1.0.3**:

- Other global objects will now be shimmed so that "window", "self", "root" or "global" always refers to the actual global object, no matter the context.

**v1.0.2**:

- Added a `GlobalObjectIdentifier` which is the string name of the global object.

**v1.0**:

- First release.

[npm-url]: https://npmjs.org/package/@wessberg/globalobject
[npm-image]: https://badge.fury.io/js/@wessberg/globalobject.svg