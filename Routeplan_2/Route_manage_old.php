<!DOCTYPE html>
<html lang="en">
<head>
    <title>Routeplan</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="screen" href="css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/grid_12.css">
    <script src="js/jquery-1.7.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/cufon-yui.js"></script>
    <script src="js/Vegur-L_300.font.js"></script>
    <script src="js/Vegur-M_500.font.js"></script>
    <script src="js/Vegur-R_400.font.js"></script>
    <script src="js/cufon-replace.js"></script>
    <script src="js/FF-cash.js"></script>
	<!--[if lt IE 8]>
       <div style=' clear: both; text-align:center; position: relative;'>
         <a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home?ocid=ie6_countdown_bannercode">
           <img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
        </a>
      </div>
    <![endif]-->
    <!--[if lt IE 9]>
   		<script type="text/javascript" src="js/html5.js"></script>
    	<link rel="stylesheet" type="text/css" media="screen" href="css/ie.css">
	<![endif]-->
</head>
<body>
<!--==============================header=================================-->
<header>
  	<div class="main">
      <h1><a href="Route manage.html"><img src="images/newlogo.png " alt=""></a></h1>
      <nav>
          <ul class="menu">
              <li><a href="sys_home.html">主页</a></li>
              <li class="current"><a href="Route_manage.html">线路管理</a></li>
              <li><a href="plans.html">排班计划</a></li>
              <li><a href="Route_view.html">运行状态</a></li>
              <li><a href="Route_report.html">统计报表</a></li>
          </ul>    
      </nav>
    </div> 
</header>   
<script type="text/javascript">
  function change() {
    document.getElementById("map1").src = "images/map__2.jpg ";
  }
</script>
<script type="text/javascript">
  function rechange() {
    document.getElementById("map1").src = "images/map__.jpg";
    document.getElementById("textarea1").value = "路线一：4-8-10-12-15\n路线二：4-9-5-6-7\n路线三：4-1-20";
  }
</script>
<!--==============================content================================-->
<section id="content" class="border subpage-content"><div class="ic"></div>
	<div class="container_12">
      <div class="grid_8">
          <!--img src="images/map.bmp" alt="" class="img-indent-2 img-radius"-->
          <img id="map1" src="images/map__.jpg" width="1110" >
      </div>
      <div class="grid_12">
        <style>
          .big{color:#a83715; font-size:45px; line-height:48px; letter-spacing:-1px;text-align:left;background-color: #57c8ea;}
        </style>
        <textarea name="" id="textarea1" cols="49" rows="3" class="big">
路线一：4-8-10-12-15
路线二：4-9-5-6-7
路线三：4-1-20 </textarea>
        <style>
          .button {
            display: inline-block;
            padding: 15px 25px;
            font-size: 24px;
            cursor: pointer;
            text-align: center;   
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #a83715;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #999;
        }

.button:hover {background-color: #a83715}

.button:active {
  background-color: #a83715;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
        </style>
        <button id = "button1" class="button" onclick="change()">确定</button>
        <button id = "button2" class="button" onclick="rechange()">重置</button>
      </div>
      <div class="clear"></div>
    </div>
</section> 
<!--==============================footer=================================-->
  <footer>
      <p>© Routeplan</p>
  </footer>  
<script>
	Cufon.now();
</script>
</body>
</html>