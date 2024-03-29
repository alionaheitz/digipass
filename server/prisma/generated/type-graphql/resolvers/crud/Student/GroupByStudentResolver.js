"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStudentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByStudentArgs_1 = require("./args/GroupByStudentArgs");
const Student_1 = require("../../../models/Student");
const StudentGroupBy_1 = require("../../outputs/StudentGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStudentResolver = class GroupByStudentResolver {
    async groupByStudent(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).student.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StudentGroupBy_1.StudentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStudentArgs_1.GroupByStudentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStudentResolver.prototype, "groupByStudent", null);
GroupByStudentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Student_1.Student)
], GroupByStudentResolver);
exports.GroupByStudentResolver = GroupByStudentResolver;
