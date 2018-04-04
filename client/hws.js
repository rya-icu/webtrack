(function () {

    r = window['_hw_analytics_obj'];
    ob = window[r];

    passedParams = ob.q ||[];
    passedtime = ob.l || 1 * new Date();
    var _localparam = {};
    var _valid_actname = ['pageview','click','addcart','removecart'];


        // 判断函数是否存在。
        var isExitsFunction = function (funcName) {
            try {
                if (typeof(eval(funcName)) == "function") {
                    return true;
                }
            } catch(e) {}
            return false;
        };

        // 判断可发送的有效指令；
        var isValidActname = function  (name) {
            var i = _valid_actname.length; 
            while(i--){
                if(_valid_actname[i].toLowerCase() == name.toLowerCase() ) 
                    return true;
            }
            return false;
        }

        /*
        * create 每页调用后js后进行初始化；设置必备的几个参数，
        *  account 打点对应的账号。
        *  isauto 暂时无用。 
        */
        var create = function(act,account,isauto = false){

           _localparam['account'] = account;
           _localparam['auto'] = isauto;    // 是否自动发送内容；

        }


        /*
        * send 向统计服务器发送打点参数；
        * act 事件类型，目前服务端不限制act的种类，根据需要进行配置；
        * name 
        */
        var send = function(act, name, tags){

                if (!isValidActname(name)) {return false;};

                var params = {};
                //Document对象数据
                if(document) {
                    params.domain = document.domain || '';
                    params.url = document.URL || '';
                    params.title = document.title || '';
                    params.ref = document.referrer || '';
                }  
                //Window对象数据
                if(window && window.screen) {
                    params.sh = window.screen.height || 0;
                    params.sw = window.screen.width || 0;
                    params.cd = window.screen.colorDepth || 0;
                }  
                //navigator对象数据
                if(navigator) {
                    params.lang = navigator.language || '';
                }  

                params.account = _localparam.account;
        
                params.tag = tags || '';
                params.t = 1 * new Date();

                //拼接参数串
                var args = '';
                for(var i in params) {
                    if(args != '') {
                        args += '&';
                    }  
                    args += i + '=' + encodeURIComponent(params[i]);
                }  
                
                //通过Image对象请求后端脚本
                var img = new Image(1, 1);
                img.src = 'http://419girl.com/p.gif?' + args;

        }


        /*
        *  trade 对交易流程的特定动作进行打标；
        *  hwa('trade','open','trader_no'); 打开一个订单
        *  hwa('trade','close','trader_no‘)；关闭订单；
        *  hwa('trade','addcart','product_no'); 将商品放入购物车；
        *  hwa（‘trade','send'); 发送信息;
        */
        var trade = function(act, name, value){

            console.log(act);

        }
       



    /*
      设置函数调用分发；
    */
    window[r] =  function(){ 
        if (arguments.length >=2 && isExitsFunction(arguments[0])) {
            eval(arguments[0]).apply(this, arguments);
        };

    };


    // 处理预设定的调用参数；
    
    window[r].l = passedtime;
    ob = window[r];
    for(var i in passedParams){ 
       ob.apply(this,passedParams[i]);
    }


})();


