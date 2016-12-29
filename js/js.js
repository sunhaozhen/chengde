
//给nav附加id
document.getElementsByClassName('mui-tab-item')[0].setAttribute('id','nav0');
document.getElementsByClassName('mui-tab-item')[1].setAttribute('id','nav1');
document.getElementsByClassName('mui-tab-item')[2].setAttribute('id','nav2');
document.getElementsByClassName('mui-tab-item')[3].setAttribute('id','nav3');
document.getElementsByClassName('mui-tab-item')[4].setAttribute('id','nav4');
//nav跳转
mui('nav').on('tap','#nav0',function(){
	var id=this.getAttribute("id");

	mui.openWindow({

		url:'诚德国际物业.html'
	})
})
mui('nav').on('tap','#nav1',function(){
	var id=this.getAttribute("id");
	mui.openWindow({

		url:'选择缴费类型.html'
	})
})
mui('nav').on('tap','#nav2',function(){
	var id=this.getAttribute("id");
	mui.openWindow({

		url:'报修内容.html'
	})
})
mui('nav').on('tap','#nav3',function(){
	var id=this.getAttribute("id");
	mui.openWindow({

		url:'服务.html'
	})
})
mui('nav').on('tap','#nav4',function(){
	var id=this.getAttribute("id");
	mui.openWindow({

		url:'我的.html',
	
	})
})


/*

mui('nav').on('tap','a',function(){document.location.href=this.href;});
*/
//我的
mui('body').on('tap','#myinfo',function(){
	mui.openWindow({

		url:'我的个人信息.html',
		
	})
})
mui('body').on('tap','#mypayment',function(){
	mui.openWindow({

		url:'缴费记录.html',
		
	})
})
mui('body').on('tap','#myrepair',function(){
	mui.openWindow({

		url:'我的报修记录.html',
		
	})
})
mui('body').on('tap','#mycomplain',function(){
	mui.openWindow({

		url:'我的投诉记录.html',
		
	})
})
//我的个人信息
mui('body').on('tap','#myinfoedit',function(){
	mui.openWindow({

		url:'我的个人信息编辑.html',
		
	})
})
mui('body').on('tap','#myinfosubmit',function(){
	mui.openWindow({

		url:'我的个人信息.html',
		
	})
})

//投诉记录
mui('.tsjl').on('tap','.jl-right',function(){
	mui.openWindow({

		url:'投诉详情.html',
		
	})
})
//投诉详情
mui('body').on('tap','#txts',function(){
	mui.openWindow({

		url:'提醒成功.html',
		
	})
})
//报修
mui('.bxjl').on('tap','.jl-right',function(){
	mui.openWindow({

		url:'报修单详情.html',
		
	})
})
mui('body').on('tap','#bxtx',function(){
	mui.openWindow({

		url:'提醒成功.html',
		
	})
})

//缴费记录
mui('.jfjl').on('tap','.mui-card',function(){
	mui.openWindow({

		url:'缴费明细.html',
		
	})
})

//查看缴费记录
mui('body').on('tap','.ckjfjl',function(){
	mui.openWindow({

		url:'缴费记录.html',
		
	})
})
//缴费成功
mui('body').on('tap','#submitjf',function(){
	mui.openWindow({

		url:'缴费成功.html',
		
	})
})
//返回首页
mui('body').on('tap','#home',function(){
	mui.openWindow({

		url:'诚德国际物业.html',
		
	})
})
//报修内容
mui('body').on('tap','#submitbx',function(){
	mui.openWindow({

		url:'提交成功.html',
		
	})
})
//投诉内容提交
mui('body').on('tap','#submitts',function(){
	mui.openWindow({

		url:'投诉成功.html',
		
	})
})
//查询报修
mui('body').on('tap','#cxbx',function(){
	mui.openWindow({

		url:'我的报修记录.html',
		
	})
})
//待评价
mui('body').on('tap','#mark',function(){
	mui.openWindow({

		url:'报修单评价.html',
		
	})
})
//评价提交
mui('body').on('tap','#submitmark',function(){
	mui.openWindow({

		url:'评价成功.html',
		
	})
})
//选择缴费
mui('.xzjf').on('tap','.mui-table-view-cell',function(){
	mui.openWindow({
		url:'缴费明细.html',
		
	})
})
//投诉按钮
mui('body').on('tap','.tsbtn',function(){
	mui.openWindow({

		url:'投诉内容提交.html',
		
	})
})
//查询投诉记录
mui('body').on('tap','#cxtsjlbtn',function(){
	mui.openWindow({

		url:'我的投诉记录.html',
		
	})
})
//首页
mui('body').on('tap','.bxbtn',function(){
	mui.openWindow({

		url:'报修内容.html',
		
	})
})
mui('body').on('tap','.jfbtn',function(){
	mui.openWindow({

		url:'选择缴费类型.html',
		
	})
})
//绑定房源btn
mui('body').on('tap','.fybdbtn',function(){
	mui.openWindow({

		url:'房源绑定.html',
		
	})
})
mui('body').on('tap','.submitfybd',function(){
	mui.openWindow({

		url:'绑定成功.html',
		
	})
})