"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPassResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPassArgs_1 = require("./args/FindFirstPassArgs");
const Pass_1 = require("../../../models/Pass");
const helpers_1 = require("../../../helpers");
let FindFirstPassResolver = class FindFirstPassResolver {
    async findFirstPass(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pass.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pass_1.Pass, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPassArgs_1.FindFirstPassArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPassResolver.prototype, "findFirstPass", null);
FindFirstPassResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pass_1.Pass)
], FindFirstPassResolver);
exports.FindFirstPassResolver = FindFirstPassResolver;