var _Page = (function () {
    function _Page(obj) {
        this.total = obj.total || 1;
        this.render =
            obj.render ||
                function () {
                    return null;
                };
        this.upBtnState = false;
        this.downBtnState = false;
        this.data = obj.data || [];
        this.pageNum = 1;
        if (this.total > 1) {
            this.downBtnState = true;
        }
        this.render(this);
    }
    _Page.prototype.setPageNum = function (state) {
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
        this.render(this);
    };
    _Page.prototype.next = function (data) {
        if (!this.downBtnState) {
            return null;
        }
        this.data = data || [];
        this.setPageNum("next");
    };
    _Page.prototype.prev = function (data) {
        if (!this.upBtnState) {
            return null;
        }
        this.data = data || [];
        this.setPageNum("prev");
    };
    _Page.prototype.reset = function (_a) {
        var total = _a.total, data = _a.data, render = _a.render, pageNum = _a.pageNum;
        this.total = total || 1;
        this.data = data || [];
        this.render =
            render ||
                function () {
                    return null;
                };
        this.pageNum = pageNum || 1;
        this.upBtnState = this.pageNum > 1;
        this.downBtnState = this.pageNum < this.total;
        this.render(this);
    };
    return _Page;
}());
window.Page = _Page;
//# sourceMappingURL=page.js.map