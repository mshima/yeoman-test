# Changelog

## [12.0.0](https://github.com/mshima/yeoman-test/compare/v11.4.0...v12.0.0) (2026-04-30)


### ⚠ BREAKING CHANGES

* bump node required to v20 ([#267](https://github.com/mshima/yeoman-test/issues/267))

### Features

* accept async createEnv ([57438dd](https://github.com/mshima/yeoman-test/commit/57438dd5c70041fe23d291d5aae45d5102c21bb0))
* accept new enviroment/generator betas ([#261](https://github.com/mshima/yeoman-test/issues/261)) ([0946680](https://github.com/mshima/yeoman-test/commit/0946680c05b3aba9628f41d9b17ba6b21a38abb9))
* add defaultGenerator and runDefault helpers ([#297](https://github.com/mshima/yeoman-test/issues/297)) ([36bd48d](https://github.com/mshima/yeoman-test/commit/36bd48df778c51518d840506ea4416977856ff13))
* add support to @yeoman/adapter v4 ([#278](https://github.com/mshima/yeoman-test/issues/278)) ([a641abf](https://github.com/mshima/yeoman-test/commit/a641abf4dceaf5a82443e7433adc8e9b0fd5c7f8))
* add support to register a dependency with path and namespace and use passed namespace to register a generator path ([36ef3d7](https://github.com/mshima/yeoman-test/commit/36ef3d7914b2e63ab9cd95fff0a2047dabdb68ee))
* add support to resolve relative generators by setting importMeta ([#299](https://github.com/mshima/yeoman-test/issues/299)) ([f86f0e5](https://github.com/mshima/yeoman-test/commit/f86f0e56257a65f8ee38d63d73ffbba8382fa868))
* add type to createHelpers options ([#296](https://github.com/mshima/yeoman-test/issues/296)) ([65769dd](https://github.com/mshima/yeoman-test/commit/65769dddf84c35a48c92b0658a65d60b66162b29))
* add typedResult ([#294](https://github.com/mshima/yeoman-test/issues/294)) ([7b9746c](https://github.com/mshima/yeoman-test/commit/7b9746c0415efbc0ec467d7db5ac664dcc63c14e))
* allow loading using require() ([#258](https://github.com/mshima/yeoman-test/issues/258)) ([294e016](https://github.com/mshima/yeoman-test/commit/294e016411fd4336f0a7817aec7ad357d13a6be3))
* change Generator and helpers to protected. ([#275](https://github.com/mshima/yeoman-test/issues/275)) ([10b5b68](https://github.com/mshima/yeoman-test/commit/10b5b68379b291849fc5f9db4d6add242f6885ae))
* merge Object files and implement withYoRcConfig ([#166](https://github.com/mshima/yeoman-test/issues/166)) ([ccc6c12](https://github.com/mshima/yeoman-test/commit/ccc6c12c3c0c671f820606c7b09bc81c36f842d5))
* **RunContext:** toPromise resolve targetDirectory instead of nothing ([#9](https://github.com/mshima/yeoman-test/issues/9)) ([6be1e06](https://github.com/mshima/yeoman-test/commit/6be1e06a706ce94c9a8370def6674b3a13b9db3e))


### Bug Fixes

* 21 objectContent with null value ([c7b1663](https://github.com/mshima/yeoman-test/commit/c7b16630ee4afdaa8f96510e6f0badba1163717e))
* 42 - broken yeoman-generator interface ([ee3ca75](https://github.com/mshima/yeoman-test/commit/ee3ca75123415a588d709e6cb48c0a60e9fcfd00))
* add main field to package.json to fix jest support ([aefa79c](https://github.com/mshima/yeoman-test/commit/aefa79ca2103af3c36f078ac06cd942358550979))
* adjusts to tests cleanup ([#229](https://github.com/mshima/yeoman-test/issues/229)) ([779d203](https://github.com/mshima/yeoman-test/commit/779d203133db6d824054766ffe2f0a3bf0a192d3))
* change exports from import to default to allow require() ([67f129b](https://github.com/mshima/yeoman-test/commit/67f129be0f182db44a43f06286fb8e7530fcb347))
* enable some tsconfig options ([#302](https://github.com/mshima/yeoman-test/issues/302)) ([5393d08](https://github.com/mshima/yeoman-test/commit/5393d0820a85d17897d16e13955486753158fb66))
* improve createDummyGenerator type ([#276](https://github.com/mshima/yeoman-test/issues/276)) ([22abdd7](https://github.com/mshima/yeoman-test/commit/22abdd7f620224022f2992db34de51e809de90d7))
* npm audit fix ([dd585d1](https://github.com/mshima/yeoman-test/commit/dd585d19f2c8bf852a17aff96a86c8a7e7ab1185))
* return mock result ([b7c3429](https://github.com/mshima/yeoman-test/commit/b7c342969469ddaab136f35cf164034d7d98f4f1))
* try to use yeoman-environment and yeoman-generator types ([#301](https://github.com/mshima/yeoman-test/issues/301)) ([27015c2](https://github.com/mshima/yeoman-test/commit/27015c28396f29b0eb4609252d6c87d65eba686f))


### Miscellaneous Chores

* bump node required to v20 ([#267](https://github.com/mshima/yeoman-test/issues/267)) ([781db08](https://github.com/mshima/yeoman-test/commit/781db08c649cc857b964dc721df09e062ed0abca))

## [11.4.0](https://github.com/yeoman/yeoman-test/compare/v11.3.1...v11.4.0) (2026-04-30)

### Features

- add defaultGenerator and runDefault helpers ([#297](https://github.com/yeoman/yeoman-test/issues/297)) ([36bd48d](https://github.com/yeoman/yeoman-test/commit/36bd48df778c51518d840506ea4416977856ff13))
- add support to resolve relative generators by setting importMeta ([#299](https://github.com/yeoman/yeoman-test/issues/299)) ([f86f0e5](https://github.com/yeoman/yeoman-test/commit/f86f0e56257a65f8ee38d63d73ffbba8382fa868))
- add type to createHelpers options ([#296](https://github.com/yeoman/yeoman-test/issues/296)) ([65769dd](https://github.com/yeoman/yeoman-test/commit/65769dddf84c35a48c92b0658a65d60b66162b29))
- add typedResult ([#294](https://github.com/yeoman/yeoman-test/issues/294)) ([7b9746c](https://github.com/yeoman/yeoman-test/commit/7b9746c0415efbc0ec467d7db5ac664dcc63c14e))
