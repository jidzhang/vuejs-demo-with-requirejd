define(['fw'], function (FW) {
   var product = {
       /**
        * 查询产品列表
        * @param callback
        */
       getProductList: function (callback) {
           FW.doPost('product', 'productList', null, function (code, data) {
               callback && callback(code, data);
           })
       },
       /**
        * 查询产品详情
        * @param productId
        * @param callback
        */
       getProductDetail: function (productId, callback) {
           if (!productId) {
               callback && callback(100);
               return;
           }
           var param = {id: productId};
           FW.doPost('product', 'productDetail', param, function (code, data) {
               callback && callback(code, data);
           })
       }
   };
   return product;
});