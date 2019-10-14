var user = {
    // login方法用来管理用户登录接口的操作方式
    login: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.callback
        })
    },

    // logout方法管理用户退出接口的操作方式
    logout: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: options.callback
        })
    },

    // getInfo方法用来管理用户的简单信息获取接口的操作方式
    getInfo: function(options) {

        $.ajax({
            url: USER_INFO,
            success: options.callback
        })
    },


    // getAllInfo方法用来管理用户的详细信息接口的操作方式
    getAllInfo: function(options) {
        $.ajax({
            url: USER_INFO_GET,
            success: options.callback
        })
    },


    // edit方法用来管理用户的编辑接口的操作方式
    edit: function(options) {
        $.ajax({
            type: 'post',
            url: USER_INFO_EDIT,
            data: options.data, // 获取options中的数据
            contentType: false,
            processData: false,
            success: options.callback // 获取options中的回调函数
        });
    }


}