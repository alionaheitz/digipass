"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTeacherResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTeacherArgs_1 = require("./args/AggregateTeacherArgs");
const Teacher_1 = require("../../../models/Teacher");
const AggregateTeacher_1 = require("../../outputs/AggregateTeacher");
const helpers_1 = require("../../../helpers");
let AggregateTeacherResolver = class AggregateTeacherResolver {
    async aggregateTeacher(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).teacher.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTeacher_1.AggregateTeacher, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTeacherArgs_1.AggregateTeacherArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTeacherResolver.prototype, "aggregateTeacher", null);
AggregateTeacherResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Teacher_1.Teacher)
], AggregateTeacherResolver);
exports.AggregateTeacherResolver = AggregateTeacherResolver;
