/**
 * @property {number} total 总页数
 * @property {function} render 渲染页面方法
 * @property {array} data 初始化时需要渲染的数据
 */
interface Option {
  total: number;
  render(data:any[]):null;
  data:any[];
}
/**
 * 翻页插件
 *
 * @class Page
 * @property {number} total 总页数
 * @property {number} single 单页的数据条数
 * @property {boolean} upBtnState 上一页按钮的状态
 * @property {boolean} downBtnState 下一页按钮的状态
 */
class Page {
  total: number;
  upBtnState: boolean;
  downBtnState: boolean;
  data: any[];
  pageNum: number;
  render:any;
  constructor(obj: Option) {
    this.total = obj.total || 1;
    this.render = obj.render || function(){return null};
    this.upBtnState = false;
    this.downBtnState = false;
    this.data = obj.data || [];
    this.pageNum = 1;

    if (this.total > 1) {
      this.downBtnState = true;
    }

    this.render(this.data,this.upBtnState,this.downBtnState);
  }

  setPageNum(state: string) {
    switch (state) {
      case "next":
        this.pageNum += 1;
        break;
      case "prev":
        this.pageNum -= 1;
        break;
      default:
        break;
    }
    this.upBtnState = this.pageNum > 1;
    this.downBtnState = this.pageNum < this.total;
    this.render(this.data,this.upBtnState,this.downBtnState);
  }

  /**
   * 下一页的方法
   *
   * @returns
   * @memberof Page
   */
  next(data) {
    if (!this.downBtnState) {
      return null;
    }
    this.data = data || [];
    this.setPageNum("next");
  }
  /**
   * 上一页的方法
   *
   * @returns
   * @memberof Page
   */
  prev(data) {
    if (!this.upBtnState) {
      return null;
    }
    this.data = data || [];
    this.setPageNum("prev");
  }
}

(<any>window).Page = Page;
