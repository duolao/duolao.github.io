;(function($,window){
    $.extend({
        addCookie: function (key,value,day,path,domain){
            //1.获取默认保存的路径
            var index = window.location.pathname.lastIndexOf("/")
            var currenPath = window.location.pathname.slice(0,index);
            path = path || currenPath;
            //2.处理默认保存路径
            domain = domain || document.domain;
            //3.处理默认的过期时间
            if(!day){
                document.cookie = key+"="+value+";path="+path+";domain="+domain+";"
            }else{
                var date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie =  key+"="+value+"expires="+date.toGMTString()+";path="+path+";domain="+domain+";";
            }
           
        },
        getCookie: function (key){
            var res = document.cookie.split(";");
        for(var i=0;i<res.length;i++){
            var temp =res[i].split("=");
            if(temp[0].trim()===key){
                return temp[1];
            }
        }
        },
        delCookie:function (key,path){
            addCookie(key, getCookie(key),-1,path);
        }
    });
})($, window);