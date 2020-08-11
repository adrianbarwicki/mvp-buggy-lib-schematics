"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");

/**
 * Generates a new sda plugin lib
 * */
function default_1(schema) {
    return (host, context) => {
        const normalizedSchema = Object.assign(Object.assign({}, schema), { name: schema.libName, style: "scss", tags: `scope:app, type:type`, npmScope: "example" });
      
        const rule = schematics_1.chain([
            schematics_1.externalSchematic("@nrwl/schematics", "lib", normalizedSchema),
        ]);
        return rule(host, context);
    };
}

exports.default = default_1;
//# sourceMappingURL=index.js.map