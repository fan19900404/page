interface Option {
    total: number;
    render(data: any[]): null;
    data: any[];
}
declare class Page {
    total: number;
    upBtnState: boolean;
    downBtnState: boolean;
    data: any[];
    pageNum: number;
    render: any;
    constructor(obj: Option);
    setPageNum(state: string): void;
    next(data: any): any;
    prev(data: any): any;
}
