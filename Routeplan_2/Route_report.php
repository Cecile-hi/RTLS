<!DOCTYPE html>
<html lang="en">
<head>
    <title>Routeplan</title>
    <meta charset="utf-8">
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
      <h1><a href="index.html"><img src="images/newlogo.png" alt=""></a></h1>
      <nav>
          <ul class="menu">
              <li><a href="sys_home.html">主页</a></li>
              <li><a href="Route_manage.html">线路管理</a></li>
              <li><a href="plans.html">排班计划</a></li>
              <li><a href="Route_view.html">运行状态</a></li>
              <li class="current"><a href="Route_report.html">统计报表</a></li>
          </ul>    
      </nav>
    </div> 
</header>   
<!--==============================content================================-->
<section id="content" class="border subpage-content"><div class="ic"></div>
	<div class="container_12">
      <div class="grid_8">
          <div class="pad-1">
              <h2>运行报表</h2>
              <form id="form" method="post" >
                <fieldset>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                  <label><strong>运行时间:</strong><input type="text" value=""></label>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                 <br>
                  
                  <div class="btns"><a href="#" class="button-2">取消</a><a href="#" class="button-2" onClick="document.getElementById('form').submit()">确定</a></div>
                </fieldset>  
              </form> 
          </div>
      </div>
      <div class="grid_4"> </div>           
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