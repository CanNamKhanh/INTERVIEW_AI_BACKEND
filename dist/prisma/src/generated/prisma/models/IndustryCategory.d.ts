import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model IndustryCategory
 *
 */
export type IndustryCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$IndustryCategoryPayload>;
export type AggregateIndustryCategory = {
    _count: IndustryCategoryCountAggregateOutputType | null;
    _min: IndustryCategoryMinAggregateOutputType | null;
    _max: IndustryCategoryMaxAggregateOutputType | null;
};
export type IndustryCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
};
export type IndustryCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
};
export type IndustryCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    description: number;
    _all: number;
};
export type IndustryCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
};
export type IndustryCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
};
export type IndustryCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    _all?: true;
};
export type IndustryCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryCategory to aggregate.
     */
    where?: Prisma.IndustryCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IndustryCategories to fetch.
     */
    orderBy?: Prisma.IndustryCategoryOrderByWithRelationInput | Prisma.IndustryCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.IndustryCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IndustryCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IndustryCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned IndustryCategories
    **/
    _count?: true | IndustryCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: IndustryCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: IndustryCategoryMaxAggregateInputType;
};
export type GetIndustryCategoryAggregateType<T extends IndustryCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateIndustryCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIndustryCategory[P]> : Prisma.GetScalarType<T[P], AggregateIndustryCategory[P]>;
};
export type IndustryCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndustryCategoryWhereInput;
    orderBy?: Prisma.IndustryCategoryOrderByWithAggregationInput | Prisma.IndustryCategoryOrderByWithAggregationInput[];
    by: Prisma.IndustryCategoryScalarFieldEnum[] | Prisma.IndustryCategoryScalarFieldEnum;
    having?: Prisma.IndustryCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IndustryCategoryCountAggregateInputType | true;
    _min?: IndustryCategoryMinAggregateInputType;
    _max?: IndustryCategoryMaxAggregateInputType;
};
export type IndustryCategoryGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    _count: IndustryCategoryCountAggregateOutputType | null;
    _min: IndustryCategoryMinAggregateOutputType | null;
    _max: IndustryCategoryMaxAggregateOutputType | null;
};
export type GetIndustryCategoryGroupByPayload<T extends IndustryCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IndustryCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IndustryCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IndustryCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IndustryCategoryGroupByOutputType[P]>;
}>>;
export type IndustryCategoryWhereInput = {
    AND?: Prisma.IndustryCategoryWhereInput | Prisma.IndustryCategoryWhereInput[];
    OR?: Prisma.IndustryCategoryWhereInput[];
    NOT?: Prisma.IndustryCategoryWhereInput | Prisma.IndustryCategoryWhereInput[];
    id?: Prisma.StringFilter<"IndustryCategory"> | string;
    name?: Prisma.StringFilter<"IndustryCategory"> | string;
    slug?: Prisma.StringFilter<"IndustryCategory"> | string;
    description?: Prisma.StringNullableFilter<"IndustryCategory"> | string | null;
    interviews?: Prisma.InterviewListRelationFilter;
};
export type IndustryCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    interviews?: Prisma.InterviewOrderByRelationAggregateInput;
    _relevance?: Prisma.IndustryCategoryOrderByRelevanceInput;
};
export type IndustryCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.IndustryCategoryWhereInput | Prisma.IndustryCategoryWhereInput[];
    OR?: Prisma.IndustryCategoryWhereInput[];
    NOT?: Prisma.IndustryCategoryWhereInput | Prisma.IndustryCategoryWhereInput[];
    description?: Prisma.StringNullableFilter<"IndustryCategory"> | string | null;
    interviews?: Prisma.InterviewListRelationFilter;
}, "id" | "name" | "slug">;
export type IndustryCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.IndustryCategoryCountOrderByAggregateInput;
    _max?: Prisma.IndustryCategoryMaxOrderByAggregateInput;
    _min?: Prisma.IndustryCategoryMinOrderByAggregateInput;
};
export type IndustryCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.IndustryCategoryScalarWhereWithAggregatesInput | Prisma.IndustryCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.IndustryCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IndustryCategoryScalarWhereWithAggregatesInput | Prisma.IndustryCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"IndustryCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"IndustryCategory"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"IndustryCategory"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"IndustryCategory"> | string | null;
};
export type IndustryCategoryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    interviews?: Prisma.InterviewCreateNestedManyWithoutCategoryInput;
};
export type IndustryCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutCategoryInput;
};
export type IndustryCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interviews?: Prisma.InterviewUpdateManyWithoutCategoryNestedInput;
};
export type IndustryCategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type IndustryCategoryCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
};
export type IndustryCategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type IndustryCategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type IndustryCategoryOrderByRelevanceInput = {
    fields: Prisma.IndustryCategoryOrderByRelevanceFieldEnum | Prisma.IndustryCategoryOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type IndustryCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type IndustryCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type IndustryCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type IndustryCategoryNullableScalarRelationFilter = {
    is?: Prisma.IndustryCategoryWhereInput | null;
    isNot?: Prisma.IndustryCategoryWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IndustryCategoryCreateNestedOneWithoutInterviewsInput = {
    create?: Prisma.XOR<Prisma.IndustryCategoryCreateWithoutInterviewsInput, Prisma.IndustryCategoryUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.IndustryCategoryCreateOrConnectWithoutInterviewsInput;
    connect?: Prisma.IndustryCategoryWhereUniqueInput;
};
export type IndustryCategoryUpdateOneWithoutInterviewsNestedInput = {
    create?: Prisma.XOR<Prisma.IndustryCategoryCreateWithoutInterviewsInput, Prisma.IndustryCategoryUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.IndustryCategoryCreateOrConnectWithoutInterviewsInput;
    upsert?: Prisma.IndustryCategoryUpsertWithoutInterviewsInput;
    disconnect?: Prisma.IndustryCategoryWhereInput | boolean;
    delete?: Prisma.IndustryCategoryWhereInput | boolean;
    connect?: Prisma.IndustryCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IndustryCategoryUpdateToOneWithWhereWithoutInterviewsInput, Prisma.IndustryCategoryUpdateWithoutInterviewsInput>, Prisma.IndustryCategoryUncheckedUpdateWithoutInterviewsInput>;
};
export type IndustryCategoryCreateWithoutInterviewsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
};
export type IndustryCategoryUncheckedCreateWithoutInterviewsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
};
export type IndustryCategoryCreateOrConnectWithoutInterviewsInput = {
    where: Prisma.IndustryCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndustryCategoryCreateWithoutInterviewsInput, Prisma.IndustryCategoryUncheckedCreateWithoutInterviewsInput>;
};
export type IndustryCategoryUpsertWithoutInterviewsInput = {
    update: Prisma.XOR<Prisma.IndustryCategoryUpdateWithoutInterviewsInput, Prisma.IndustryCategoryUncheckedUpdateWithoutInterviewsInput>;
    create: Prisma.XOR<Prisma.IndustryCategoryCreateWithoutInterviewsInput, Prisma.IndustryCategoryUncheckedCreateWithoutInterviewsInput>;
    where?: Prisma.IndustryCategoryWhereInput;
};
export type IndustryCategoryUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: Prisma.IndustryCategoryWhereInput;
    data: Prisma.XOR<Prisma.IndustryCategoryUpdateWithoutInterviewsInput, Prisma.IndustryCategoryUncheckedUpdateWithoutInterviewsInput>;
};
export type IndustryCategoryUpdateWithoutInterviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type IndustryCategoryUncheckedUpdateWithoutInterviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type IndustryCategoryCountOutputType
 */
export type IndustryCategoryCountOutputType = {
    interviews: number;
};
export type IndustryCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviews?: boolean | IndustryCategoryCountOutputTypeCountInterviewsArgs;
};
/**
 * IndustryCategoryCountOutputType without action
 */
export type IndustryCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategoryCountOutputType
     */
    select?: Prisma.IndustryCategoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * IndustryCategoryCountOutputType without action
 */
export type IndustryCategoryCountOutputTypeCountInterviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
};
export type IndustryCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    interviews?: boolean | Prisma.IndustryCategory$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.IndustryCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["industryCategory"]>;
export type IndustryCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
};
export type IndustryCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "description", ExtArgs["result"]["industryCategory"]>;
export type IndustryCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interviews?: boolean | Prisma.IndustryCategory$interviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.IndustryCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $IndustryCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IndustryCategory";
    objects: {
        interviews: Prisma.$InterviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
    }, ExtArgs["result"]["industryCategory"]>;
    composites: {};
};
export type IndustryCategoryGetPayload<S extends boolean | null | undefined | IndustryCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload, S>;
export type IndustryCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IndustryCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IndustryCategoryCountAggregateInputType | true;
};
export interface IndustryCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IndustryCategory'];
        meta: {
            name: 'IndustryCategory';
        };
    };
    /**
     * Find zero or one IndustryCategory that matches the filter.
     * @param {IndustryCategoryFindUniqueArgs} args - Arguments to find a IndustryCategory
     * @example
     * // Get one IndustryCategory
     * const industryCategory = await prisma.industryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, IndustryCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one IndustryCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryCategoryFindUniqueOrThrowArgs} args - Arguments to find a IndustryCategory
     * @example
     * // Get one IndustryCategory
     * const industryCategory = await prisma.industryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IndustryCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first IndustryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryFindFirstArgs} args - Arguments to find a IndustryCategory
     * @example
     * // Get one IndustryCategory
     * const industryCategory = await prisma.industryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, IndustryCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first IndustryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryFindFirstOrThrowArgs} args - Arguments to find a IndustryCategory
     * @example
     * // Get one IndustryCategory
     * const industryCategory = await prisma.industryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IndustryCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more IndustryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryCategories
     * const industryCategories = await prisma.industryCategory.findMany()
     *
     * // Get first 10 IndustryCategories
     * const industryCategories = await prisma.industryCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const industryCategoryWithIdOnly = await prisma.industryCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IndustryCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, IndustryCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a IndustryCategory.
     * @param {IndustryCategoryCreateArgs} args - Arguments to create a IndustryCategory.
     * @example
     * // Create one IndustryCategory
     * const IndustryCategory = await prisma.industryCategory.create({
     *   data: {
     *     // ... data to create a IndustryCategory
     *   }
     * })
     *
     */
    create<T extends IndustryCategoryCreateArgs>(args: Prisma.SelectSubset<T, IndustryCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many IndustryCategories.
     * @param {IndustryCategoryCreateManyArgs} args - Arguments to create many IndustryCategories.
     * @example
     * // Create many IndustryCategories
     * const industryCategory = await prisma.industryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IndustryCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, IndustryCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a IndustryCategory.
     * @param {IndustryCategoryDeleteArgs} args - Arguments to delete one IndustryCategory.
     * @example
     * // Delete one IndustryCategory
     * const IndustryCategory = await prisma.industryCategory.delete({
     *   where: {
     *     // ... filter to delete one IndustryCategory
     *   }
     * })
     *
     */
    delete<T extends IndustryCategoryDeleteArgs>(args: Prisma.SelectSubset<T, IndustryCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one IndustryCategory.
     * @param {IndustryCategoryUpdateArgs} args - Arguments to update one IndustryCategory.
     * @example
     * // Update one IndustryCategory
     * const industryCategory = await prisma.industryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IndustryCategoryUpdateArgs>(args: Prisma.SelectSubset<T, IndustryCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more IndustryCategories.
     * @param {IndustryCategoryDeleteManyArgs} args - Arguments to filter IndustryCategories to delete.
     * @example
     * // Delete a few IndustryCategories
     * const { count } = await prisma.industryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IndustryCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, IndustryCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more IndustryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryCategories
     * const industryCategory = await prisma.industryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IndustryCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, IndustryCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one IndustryCategory.
     * @param {IndustryCategoryUpsertArgs} args - Arguments to update or create a IndustryCategory.
     * @example
     * // Update or create a IndustryCategory
     * const industryCategory = await prisma.industryCategory.upsert({
     *   create: {
     *     // ... data to create a IndustryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryCategory we want to update
     *   }
     * })
     */
    upsert<T extends IndustryCategoryUpsertArgs>(args: Prisma.SelectSubset<T, IndustryCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__IndustryCategoryClient<runtime.Types.Result.GetResult<Prisma.$IndustryCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of IndustryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryCountArgs} args - Arguments to filter IndustryCategories to count.
     * @example
     * // Count the number of IndustryCategories
     * const count = await prisma.industryCategory.count({
     *   where: {
     *     // ... the filter for the IndustryCategories we want to count
     *   }
     * })
    **/
    count<T extends IndustryCategoryCountArgs>(args?: Prisma.Subset<T, IndustryCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IndustryCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a IndustryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryCategoryAggregateArgs>(args: Prisma.Subset<T, IndustryCategoryAggregateArgs>): Prisma.PrismaPromise<GetIndustryCategoryAggregateType<T>>;
    /**
     * Group by IndustryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends IndustryCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IndustryCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: IndustryCategoryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IndustryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the IndustryCategory model
     */
    readonly fields: IndustryCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for IndustryCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__IndustryCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    interviews<T extends Prisma.IndustryCategory$interviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IndustryCategory$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the IndustryCategory model
 */
export interface IndustryCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"IndustryCategory", 'String'>;
    readonly name: Prisma.FieldRef<"IndustryCategory", 'String'>;
    readonly slug: Prisma.FieldRef<"IndustryCategory", 'String'>;
    readonly description: Prisma.FieldRef<"IndustryCategory", 'String'>;
}
/**
 * IndustryCategory findUnique
 */
export type IndustryCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which IndustryCategory to fetch.
     */
    where: Prisma.IndustryCategoryWhereUniqueInput;
};
/**
 * IndustryCategory findUniqueOrThrow
 */
export type IndustryCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which IndustryCategory to fetch.
     */
    where: Prisma.IndustryCategoryWhereUniqueInput;
};
/**
 * IndustryCategory findFirst
 */
export type IndustryCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which IndustryCategory to fetch.
     */
    where?: Prisma.IndustryCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IndustryCategories to fetch.
     */
    orderBy?: Prisma.IndustryCategoryOrderByWithRelationInput | Prisma.IndustryCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IndustryCategories.
     */
    cursor?: Prisma.IndustryCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IndustryCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IndustryCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IndustryCategories.
     */
    distinct?: Prisma.IndustryCategoryScalarFieldEnum | Prisma.IndustryCategoryScalarFieldEnum[];
};
/**
 * IndustryCategory findFirstOrThrow
 */
export type IndustryCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which IndustryCategory to fetch.
     */
    where?: Prisma.IndustryCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IndustryCategories to fetch.
     */
    orderBy?: Prisma.IndustryCategoryOrderByWithRelationInput | Prisma.IndustryCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IndustryCategories.
     */
    cursor?: Prisma.IndustryCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IndustryCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IndustryCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IndustryCategories.
     */
    distinct?: Prisma.IndustryCategoryScalarFieldEnum | Prisma.IndustryCategoryScalarFieldEnum[];
};
/**
 * IndustryCategory findMany
 */
export type IndustryCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which IndustryCategories to fetch.
     */
    where?: Prisma.IndustryCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IndustryCategories to fetch.
     */
    orderBy?: Prisma.IndustryCategoryOrderByWithRelationInput | Prisma.IndustryCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing IndustryCategories.
     */
    cursor?: Prisma.IndustryCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IndustryCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IndustryCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IndustryCategories.
     */
    distinct?: Prisma.IndustryCategoryScalarFieldEnum | Prisma.IndustryCategoryScalarFieldEnum[];
};
/**
 * IndustryCategory create
 */
export type IndustryCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a IndustryCategory.
     */
    data: Prisma.XOR<Prisma.IndustryCategoryCreateInput, Prisma.IndustryCategoryUncheckedCreateInput>;
};
/**
 * IndustryCategory createMany
 */
export type IndustryCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryCategories.
     */
    data: Prisma.IndustryCategoryCreateManyInput | Prisma.IndustryCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * IndustryCategory update
 */
export type IndustryCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a IndustryCategory.
     */
    data: Prisma.XOR<Prisma.IndustryCategoryUpdateInput, Prisma.IndustryCategoryUncheckedUpdateInput>;
    /**
     * Choose, which IndustryCategory to update.
     */
    where: Prisma.IndustryCategoryWhereUniqueInput;
};
/**
 * IndustryCategory updateMany
 */
export type IndustryCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryCategories.
     */
    data: Prisma.XOR<Prisma.IndustryCategoryUpdateManyMutationInput, Prisma.IndustryCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which IndustryCategories to update
     */
    where?: Prisma.IndustryCategoryWhereInput;
    /**
     * Limit how many IndustryCategories to update.
     */
    limit?: number;
};
/**
 * IndustryCategory upsert
 */
export type IndustryCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the IndustryCategory to update in case it exists.
     */
    where: Prisma.IndustryCategoryWhereUniqueInput;
    /**
     * In case the IndustryCategory found by the `where` argument doesn't exist, create a new IndustryCategory with this data.
     */
    create: Prisma.XOR<Prisma.IndustryCategoryCreateInput, Prisma.IndustryCategoryUncheckedCreateInput>;
    /**
     * In case the IndustryCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.IndustryCategoryUpdateInput, Prisma.IndustryCategoryUncheckedUpdateInput>;
};
/**
 * IndustryCategory delete
 */
export type IndustryCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
    /**
     * Filter which IndustryCategory to delete.
     */
    where: Prisma.IndustryCategoryWhereUniqueInput;
};
/**
 * IndustryCategory deleteMany
 */
export type IndustryCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryCategories to delete
     */
    where?: Prisma.IndustryCategoryWhereInput;
    /**
     * Limit how many IndustryCategories to delete.
     */
    limit?: number;
};
/**
 * IndustryCategory.interviews
 */
export type IndustryCategory$interviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interview
     */
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewScalarFieldEnum | Prisma.InterviewScalarFieldEnum[];
};
/**
 * IndustryCategory without action
 */
export type IndustryCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCategory
     */
    select?: Prisma.IndustryCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IndustryCategory
     */
    omit?: Prisma.IndustryCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IndustryCategoryInclude<ExtArgs> | null;
};
//# sourceMappingURL=IndustryCategory.d.ts.map