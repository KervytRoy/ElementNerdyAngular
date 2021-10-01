

export interface PostResponseI {
    data: Data[];
    meta: Meta;
}

 interface Data {
    id:          number;
    userId:      number;
    date:        Date;
    description: string;
    image:       string;
}

 interface Meta {
    currentPage:     number;
    totalPages:      number;
    pageSize:        number;
    totalCount:      number;
    hasPreviousPage: boolean;
    hasNextPage:     boolean;
    nextPageUrl:     string;
    previousPageUrl: string;
}
