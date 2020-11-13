"use strict";
// import { FsUri } from '../../types';
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitOriginType = exports.IGitArgsService = void 0;
exports.IGitArgsService = Symbol.for('IGitArgsService');
var GitOriginType;
(function (GitOriginType) {
    GitOriginType[GitOriginType["any"] = 1] = "any";
    GitOriginType[GitOriginType["github"] = 2] = "github";
    GitOriginType[GitOriginType["bitbucket"] = 3] = "bitbucket";
    GitOriginType[GitOriginType["tfs"] = 4] = "tfs";
    GitOriginType[GitOriginType["vsts"] = 5] = "vsts";
})(GitOriginType = exports.GitOriginType || (exports.GitOriginType = {}));
//# sourceMappingURL=types.js.map