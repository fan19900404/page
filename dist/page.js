var Page = (function () {
    function Page(obj) {
        this.total = obj.total || 1;
        this.render = obj.render || function () { return null; };
        this.upBtnState = false;
        this.downBtnState = false;
        this.data = obj.data || [];
        this.pageNum = 1;
        if (this.total > 1) {
            this.downBtnState = true;
        }
        this.render(this.data, this.upBtnState, this.downBtnState);
    }
    Page.prototype.setPageNum = function (state) {
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
        this.render(this.data, this.upBtnState, this.downBtnState);
    };
    Page.prototype.next = function (data) {
        if (!this.downBtnState) {
            return null;
        }
        this.data = data || [];
        this.setPageNum("next");
    };
    Page.prototype.prev = function (data) {
        if (!this.upBtnState) {
            return null;
        }
        this.data = data || [];
        this.setPageNum("prev");
    };
    return Page;
}());
window.Page = Page;
//# sourceMappingURL=page.js.map