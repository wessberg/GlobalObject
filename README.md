# GlobalObject [![NPM version][npm-image]][npm-url]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-url]

[dev-dependencies-url]: https://david-dm.org/wessberg/typedetector?type=dev

[dev-dependencies-image]: https://david-dm.org/hub.com/wessberg/globalobject/dev-status.svg
[![deps][deps-image]][deps-url]

[deps-url]: https://david-dm.org/wessberg/typedetector

[deps-image]: https://david-dm.org/hub.com/wessberg/globalobject/status.svg
[![License-mit][license-mit-image]][license-mit-url]

[license-mit-url]: https://opensource.org/licenses/MIT

[license-mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg
> A package that shims and returns a reference to the global object, depending on the current execution environment.

## Installation
Simply do: `npm install @wessberg/globalobject`.

## Usage - in code

```typescript
import {GlobalObject, GlobalObjectIdentifier} from "@wessberg/globalobect";
// GlobalObject refers to 'self', 'global' or 'window'.
// GlobalObjectIdentifier is the name of the identifier.
```

## Changelog

<a name="1.0.7"></a>
## 1.0.7 (2017-07-19)

* 1.0.7 ([c9a80af](https://github.com/wessberg/globalobject/commit/c9a80af))
* Bumped version ([35450e9](https://github.com/wessberg/globalobject/commit/35450e9))



<a name="1.0.6"></a>
## 1.0.6 (2017-07-19)

* - Migrated to common ts-config configuration. ([7750b56](https://github.com/wessberg/globalobject/commit/7750b56))
* 1.0.6 ([a90e4fc](https://github.com/wessberg/globalobject/commit/a90e4fc))
* Update .gitignore ([12262a6](https://github.com/wessberg/globalobject/commit/12262a6))
* Update package.json ([db4d697](https://github.com/wessberg/globalobject/commit/db4d697))



<a name="1.0.5"></a>
## 1.0.5 (2017-05-31)

* 1.0.5 ([73a0d6b](https://github.com/wessberg/globalobject/commit/73a0d6b))
* Added a new exported property: 'shimGlobalObjectStringified' which is a stringified shim that can be ([396aed5](https://github.com/wessberg/globalobject/commit/396aed5))



<a name="1.0.4"></a>
## 1.0.4 (2017-05-31)

* 1.0.4 ([0098610](https://github.com/wessberg/globalobject/commit/0098610))
* Added a new function that this module exports: . Calling this from anywhere will shim the window, se ([29ae227](https://github.com/wessberg/globalobject/commit/29ae227))



<a name="1.0.3"></a>
## 1.0.3 (2017-05-18)

* 1.0.3 ([fd0ef1a](https://github.com/wessberg/globalobject/commit/fd0ef1a))
* Other global objects will now be shimmed so that window, self, root or global always refers to the a ([da5a2c9](https://github.com/wessberg/globalobject/commit/da5a2c9))



<a name="1.0.2"></a>
## 1.0.2 (2017-05-06)

* 1.0.2 ([bd0d25a](https://github.com/wessberg/globalobject/commit/bd0d25a))
* Added a  which is the string name of the global object. ([65b1dc0](https://github.com/wessberg/globalobject/commit/65b1dc0))



<a name="1.0.1"></a>
## 1.0.1 (2017-04-24)

* 1.0.1 ([4171316](https://github.com/wessberg/globalobject/commit/4171316))
* First commit ([37aaf16](https://github.com/wessberg/globalobject/commit/37aaf16))
* Fixed the package name in the README ([4ad722a](https://github.com/wessberg/globalobject/commit/4ad722a))
* Fixed version ([cacbdd0](https://github.com/wessberg/globalobject/commit/cacbdd0))




## 1.0.6 (2017-07-19)

* - Migrated to common ts-config configuration. ([7750b56](https://github.com/wessberg/globalobject/commit/7750b56))
* 1.0.6 ([a90e4fc](https://github.com/wessberg/globalobject/commit/a90e4fc))



<a name="1.0.5"></a>
## 1.0.5 (2017-05-31)

* 1.0.5 ([73a0d6b](https://github.com/wessberg/globalobject/commit/73a0d6b))
* Added a new exported property: 'shimGlobalObjectStringified' which is a stringified shim that can be ([396aed5](https://github.com/wessberg/globalobject/commit/396aed5))



<a name="1.0.4"></a>
## 1.0.4 (2017-05-31)

* 1.0.4 ([0098610](https://github.com/wessberg/globalobject/commit/0098610))
* Added a new function that this module exports: . Calling this from anywhere will shim the window, se ([29ae227](https://github.com/wessberg/globalobject/commit/29ae227))



<a name="1.0.3"></a>
## 1.0.3 (2017-05-18)

* 1.0.3 ([fd0ef1a](https://github.com/wessberg/globalobject/commit/fd0ef1a))
* Other global objects will now be shimmed so that window, self, root or global always refers to the a ([da5a2c9](https://github.com/wessberg/globalobject/commit/da5a2c9))



<a name="1.0.2"></a>
## 1.0.2 (2017-05-06)

* 1.0.2 ([bd0d25a](https://github.com/wessberg/globalobject/commit/bd0d25a))
* Added a  which is the string name of the global object. ([65b1dc0](https://github.com/wessberg/globalobject/commit/65b1dc0))



<a name="1.0.1"></a>
## 1.0.1 (2017-04-24)

* 1.0.1 ([4171316](https://github.com/wessberg/globalobject/commit/4171316))
* First commit ([37aaf16](https://github.com/wessberg/globalobject/commit/37aaf16))
* Fixed the package name in the README ([4ad722a](https://github.com/wessberg/globalobject/commit/4ad722a))
* Fixed version ([cacbdd0](https://github.com/wessberg/globalobject/commit/cacbdd0))




