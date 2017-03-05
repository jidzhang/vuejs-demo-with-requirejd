define(['vue', 'servicegadget/product/product'], function (Vue, Product) {
   var app = new Vue({
       el: '#app',
       data: {
           picBase: '../assets/',
            productList: [{
                productName: '',
                icon: '',
                isShow:true
            }]
       },
       mounted: function () {
           var _this = this;
           Product.getProductList(function (code, data) {
              if (code === 0 && data) {
                _this.productList = data.productList;
              } else {
                  alert('查询失败');
              }
           });
       },
       methods: {
           picUrl: function (icon) {
               if (icon && icon !== '') {
                   return this.picBase + icon;
               }
               return '';
           }
       }
   });
   return app;
});