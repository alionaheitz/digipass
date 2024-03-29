"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassCreateManyStudentInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PassCreateManyStudentInput_1 = require("../inputs/PassCreateManyStudentInput");
let PassCreateManyStudentInputEnvelope = class PassCreateManyStudentInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PassCreateManyStudentInput_1.PassCreateManyStudentInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PassCreateManyStudentInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PassCreateManyStudentInputEnvelope.prototype, "skipDuplicates", void 0);
PassCreateManyStudentInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PassCreateManyStudentInputEnvelope", {
        isAbstract: true
    })
], PassCreateManyStudentInputEnvelope);
exports.PassCreateManyStudentInputEnvelope = PassCreateManyStudentInputEnvelope;
