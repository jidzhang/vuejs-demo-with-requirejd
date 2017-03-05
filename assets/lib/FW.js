define(['jquery'], function($) {
      var FW = {
          isString: function (str) {
              return (typeof str==='string') && str.constructor == String;
          },
          toJson: function (str) {
              var result = str;
              try {
                  if (this.isString(str)) {
                      result = eval('(' + str + ')');
                  }
              } catch (e) {
                  result = JSON.parse(str);
              }
              return result;
          },
          //封装Ajax方法
          doPost: function(packageName, serviceName, param, callback) {
              //TODO: 这里需要改
              // var url = "http://127.0.0.1:9099/product/productList.action";
              // var url = "/product/productList.action";
			  var url = '/vuejs-demo/simulate/' + packageName + '/' + serviceName + '.action';
			  //这是需要跟后端约定参数
			  var data = {
				  'packageName': packageName,
				  'serviceName': serviceName,
				  'param': param
			  };
              var _this = this;
              if (!callback) {
                  var result = null;
                  $.ajax({
                      url: url,
                      data: data,
                      async: false,
                      success: function (data) {
                          //接收到json数据
                          if (data) {
                              data = _this.toJson(data);
                              if (data && (typeof data.statusCode !== 'undefined')) {
                                  //把statusCode单独提取出来
                                  result = {code: data.statusCode, data: data};
                              }
                          } else {
                              result = {code: 999};
                          }
                      },
                      error: function () {
                          result = {code: 999};
                      }
                  });
              } else {
                  $.ajax({
                      url: url,
                      type: "post",
                      data: data,
                      success: function (data) {
                          if (data) {
                              data = _this.toJson(data);
                              if (data && (typeof data.statusCode !== 'undefined')) {
                                  callback(data.statusCode, data);
                              }
                          } else {
                              callback(999);
                          }
                      },
                      error: function () {
                          callback(999);
                      }
                  });
              }
          }
      };
    return FW;
});
