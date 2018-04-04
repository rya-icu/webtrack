# webtrack
简单的打点统计js
电商类站点统计参数举例：


|  统计项目 |  变量名|  标点位置|  说明|  类型|   |
| --- | --- | --- | --- | --- | --- |
|utrace | __utrace|    cookie  |用户的唯一识别号|    长整型| MD5(第一次访问时间 + 远端ip + 浏览器识别码）|
|utime| __utime | |           打标时间戳|   长整型| 到毫秒|
|referrer|ref|  |   来源网址        
|url|||         当前打标网址      
|title|||           网页标题        
|agent|||           浏览器版本       
|opsystem|||            操作系统        
|screenrate|  sh||      分辨率 高度      
|screenrate|    sw||      宽度      
|colordepth|  cd||      屏幕色度        
|ip|||          ip地址        
|domain|||          域名      
|account|||         业务号     
|tag|||         动作标记        
|lang|||            语言      
|ad-src|||      url 广告投放id http://xxxx:&ad-src=          
|ecom|||    tdno    url 订单号     


