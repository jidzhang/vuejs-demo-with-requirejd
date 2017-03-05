define(['vue','servicegadget/product/product'], function (Vue, Product) {
    var app = new Vue({
        el: '#app',
        data: {
            productDetail: {
                productName: '产品AA',
                icon: '',
                postTime: '2017-03-01',
                content:'<p>line1</p><p>line2</p>'
            }
        },
        mounted: function () {
            var _this = this;
            _this.productDetail = {};
            var productId = getQueryString('id');
            if (productId) {
                Product.getProductDetail(productId, function (code, data) {
                    if (code === 0 && data) {
                        _this.productDetail = data.productDetail;
                    } else {
                        alert('查询失败');
                    }
                });
            } else {
                alert('缺少url参数id');
            }

            function getQueryString(name) {
                var p = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                var m = window.location.search.substr(1).match(p);
                return m!=null ? m[2] : null;
            }
        }
    });
    return app;
});