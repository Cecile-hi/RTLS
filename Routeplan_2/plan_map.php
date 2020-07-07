<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>百度地图 API 制作路书</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.3, user-scalable=no">
        <meta name="description" content="百度地图 API 制作路书">
        <meta name="keywords" content="百度 API">
        <meta name="author" content="wg">
        <style>
            html,body,#map{
                height: 100%;
                width: 100%;
                margin: 0;
            }
        </style>
        <script src="http://api.map.baidu.com/api?v=1.4"></script>
        <script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&amp;ak=bB8H5rgknsMqiKIDV0ALeuocIbXd6Uro&amp;services=&amp;t=20171004185957"></script>
        <script src="http://api.map.baidu.com/library/LuShu/1.2/src/LuShu_min.js"></script>
    <body>
        <div id="map"></div>        
        <script>
            var bmap = document.getElementById('map');
            var map = new BMap.Map("map");
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var point = new BMap.Point(114.068126,22.654661);
             var points0 = [new BMap.Point(114.067861,22.656933), new BMap.Point(114.0684,22.651997), new BMap.Point(114.07061,22.652014)];
             var points1 = [new BMap.Point(114.067861,22.656933), new BMap.Point(114.064411,22.656866), new BMap.Point(114.065274,22.65193)];
             var points2 = [new BMap.Point(114.067861,22.656933), new BMap.Point(114.070735,22.656783), new BMap.Point(114.073682,22.656049)];
			 var points3 = [new BMap.Point(114.064533,22.656033), new BMap.Point(114.065215,22.652064)];
			 var points4 = [new BMap.Point(114.065125,22.652597), new BMap.Point(114.064371,22.656883), new BMap.Point(114.06791,22.656967)];
 var points5 = [new BMap.Point(114.068359,22.653064), new BMap.Point(114.068413,22.651997), new BMap.Point(114.070641,22.651964)];
 var points6 = [new BMap.Point(114.069653,22.651964), new BMap.Point(114.068431,22.651997), new BMap.Point(114.06791,22.656983)];
 var points7 = [new BMap.Point(114.072599,22.656316), new BMap.Point(114.070731,22.656866), new BMap.Point(114.06791,22.656933)];


			
			

            var points = points0.concat(points1).concat(points2);
            //用站点画出路线，参数：站点、线路颜色、线路宽度、透明度
           var polyline0 = new BMap.Polyline(points0, { strokeColor: "#FFD613", strokeWeight: 6, strokeOpacity: 0.8 });
             map.addOverlay(polyline0); //绘制路线
             var polyline1 = new BMap.Polyline(points1, { strokeColor: "#0b7f92", strokeWeight: 6, strokeOpacity: 0.8 });
             map.addOverlay(polyline1); //��ӹ켣����ͼ
             var polyline2 = new BMap.Polyline(points2, { strokeColor: "#171616", strokeWeight: 6, strokeOpacity: 0.8 });
             map.addOverlay(polyline2); //��ӹ켣����ͼ
            //添加轨迹到地图            

            /*var lushu = new BMapLib.LuShu(map, points0, {
            defaultContent: '一',
			   landmarkPois: [
			   ],
                speed: 100, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), 
                autoView: false,
                enableRotation: true, 
            });
            var lushu1 = new BMapLib.LuShu(map, points1, {
            defaultContent: '二',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });
            var lushu2 = new BMapLib.LuShu(map, points2, {
            defaultContent: '三',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });

			var lushu3 = new BMapLib.LuShu(map, points3, {
            defaultContent: '四',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });
			var lushu4 = new BMapLib.LuShu(map, points4, {
            defaultContent: '五',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });
			var lushu5 = new BMapLib.LuShu(map, points5, {
            defaultContent: '六',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });
			var lushu6 = new BMapLib.LuShu(map, points6, {
            defaultContent: '四',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });
			var lushu7 = new BMapLib.LuShu(map, points7, {
            defaultContent: '七',
			   landmarkPois: [
			   ],
                speed: 50, //速度，单位米每秒
                icon: new BMap.Icon('3.png', new BMap.Size(68, 70), { anchor: new BMap.Size(24, 34) }), //声明高铁标注
                autoView: false,
                enableRotation: true,
            });
			
            map.centerAndZoom(point, 18); //设置中心点和级别（级别是1-20）数字越大越是放大

            lushu.start();
            lushu1.start();
            lushu2.start();
			lushu3.start();
			lushu4.start();
            lushu5.start();
            lushu6.start();
			lushu7.start();*/
			map.centerAndZoom(point, 18); //设置中心点和级别（级别是1-20）数字越大越是放大
			
			var point4 = new BMap.Point(114.067861,22.656933);
// 创建点坐标
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point4);
map.addOverlay(marker);
  
  var opts = {
	  position : point4,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("4", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);  
	marker.enableDragging(); 
			
	var point8 = new BMap.Point(114.066082,22.656917);
// 创建点坐标
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point8);
map.addOverlay(marker);
  
  var opts = {
	  position : point8,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("8", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);   		
		marker.enableDragging(); 
			
	var point10 = new BMap.Point(114.064357,22.6569);
// 创建点坐标
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point10);
map.addOverlay(marker);
  
  var opts = {
	  position : point10,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("10", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);   				
		marker.enableDragging(); 		
			
var point12 = new BMap.Point(114.064645,22.655082);
// 创建点坐标12
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point12);
map.addOverlay(marker);
marker.addEventListener("click", function(){ //点击marker显示label
        	
window.location.href="route1.html";
        });
			
	
			
			
  
  var opts = {
	  position : point12,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("12", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);   				
		marker.enableDragging(); 
			
	var point15 = new BMap.Point(114.065274,22.65193);
// 创建点坐标15
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point15);
map.addOverlay(marker);
  
  var opts = {
	  position : point15,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("15", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);  
		marker.enableDragging(); 
			
var point9 = new BMap.Point(114.068022,22.655716);
// 创建点坐标9
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point9);
map.addOverlay(marker);
  
  var opts = {
	  position : point9,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("9", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label); 
		marker.enableDragging(); 		
			
			
			var point5 = new BMap.Point(114.068202,22.654082);
// 创建点坐标5
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point5);
map.addOverlay(marker);
  
  var opts = {
	  position : point5,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("5", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);   
		marker.enableDragging(); 		
			
			
			var point6 = new BMap.Point(114.0684,22.65203);
// 创建点坐标6
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point6);
map.addOverlay(marker);
  
  var opts = {
	  position : point6,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("6", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);  
		marker.enableDragging(); 		
			var point7 = new BMap.Point(114.07061,22.65203);
// 创建点坐标7
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point7);
map.addOverlay(marker);
  
  var opts = {
	  position : point7,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("7", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label); 
		marker.enableDragging(); 		
			
			var point1 = new BMap.Point(114.070699,22.656833);
// 创建点坐标1
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point1);
map.addOverlay(marker);
  
  var opts = {
	  position : point1,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("1", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black',
		fontSize : '12px',
		height : '20px',
		lineHeight : '20px',
		fontFamily: '微软雅黑'
	});
	map.addOverlay(label);   
		marker.enableDragging(); 		
			
	var point20 = new BMap.Point(114.073628,22.655949);
// 创建点坐标20
//map.centerAndZoom(point, 18);
// 初始化地图， 设置中心点坐标和地图级别
var marker = new BMap.Marker(point20);
map.addOverlay(marker);
			 
 

  var opts = {
	  position : point20,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("20", opts);  // 创建文本标注对象
	label.setStyle({
		color : 'black', 
		fontSize : '12px', 
		height : '20px',
		lineHeight : '20px', 
		fontFamily: '微软雅黑' 
	}); 
	map.addOverlay(label);  
			
	marker.enableDragging();    		
	

        </script>


    </body>
</html>