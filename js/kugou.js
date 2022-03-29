var more = new Vue({
	el: '#page',
	data: {
		moreListHidden: 'hidden',
		bgs:[],
		hoverFlag:false,
		hoverFlagList:false,
		dotFlag1:true,
		dotFlag2:false,
		dotFlag3:false,
		dotFlag4:false,
		dotFlag5:false,
		jiantouFlag:false,
		jingFlag:false,
		jingFlag1:false,
		jingFlag2:false,
		jingFlag3:false,
		jingFlag4:false,
		remenFlag1:false,
		remenFlag2:false,
		remenFlag3:false,
		huaYuList:[
			{
				songName:"汪苏泷 - 灵猫传",
				time:"03:49"
			},
			{
				songName:"庄心妍 - 男朋友你在哪",
				time:"03:35"
			},
			{
				songName:"张杰 - 跃进人海拥抱你",
				time:"03:39"
			},
			{
				songName:"周深 - 江湖觅知音",
				time:"03:03"
			},
			{
				songName:"花僮 - 你的疼爱我从未拥有过",
				time:"03:45"
			},
			{
				songName:"周深 - 和光同尘",
				time:"04:08"
			},
			{
				songName:"花僮 - 上仙",
				time:"04:11"
			},
			{
				songName:"张杰、刘润潼 - 别把我丢了",
				time:"04:50"
			},//0-8
			{
				songName:"鹏鹏音乐 - 英雄泪",
				time:"03:03"
			},
			{
				songName:"马健涛 - 你是我唯一的执着 (对唱版)",
				time:"03:51"
			},
			{
				songName:"乌兰图雅 - 福满堂",
				time:"03:46"
			},
			{
				songName:"二小姐 - 情难渡",
				time:"03:59"
			},
			{
				songName:"李昕融、谭文芯、何宥希 - 有你就幸福 (纯享版)",
				time:"03:20"
			},
			{
				songName:"刘珂矣 - 枕雪楼",
				time:"03:32"
			},
			{
				songName:"黄静美 - 不负此生不负卿",
				time:"03:32"
			},
			{
				songName:"崔伟立 - 一生爱一次",
				time:"03:31"
			},//8-16
			{
				songName:"胡66 - 保持微笑",
				time:"04:20"
			},
			{
				songName:"王巨星 - 白马过长安",
				time:"04:00"
			},
			{
				songName:"萧忆情Alex - 衔光",
				time:"03:48"
			},
			{
				songName:"阿悄 - 失与得",
				time:"03:36"
			},
			{
				songName:"汪小敏 - 三言两语",
				time:"04:20"
			},
			{
				songName:"秋裤大叔 - 有你才有胜利",
				time:"04:08"
			},
			{
				songName:"菲儿 - 一千一万一亿次想你",
				time:"04:10"
			},
			{
				songName:"杨烁 - 青涩时光",
				time:"03:25"
			},//16-24
		],
		ouMeiList:[
			{
				songName:"VIZE、Alan Walker、Leony!、Edward Artemyev - Space Melody (Edward Artemyev)",
				time:"03:00"
			},
			{
				songName:"Taylor Swift - willow",
				time:"03:34"
			},
			{
				songName:"Ytram、Citadelle、Martin Garrix - Alive",
				time:"02:48"
			},
			{
				songName:"Mariah Carey - Sleigh Ride",
				time:"02:39"
			},
			{
				songName:"Britney Spears - Swimming In The Stars",
				time:"03:21"
			},
			{
				songName:"Mariah Carey、Ariana Grande、Jennifer Hudson - Oh Santa!",
				time:"03:20"
			},
			{
				songName:"Britney Spears - Mood Ring (By Demand) (Wuki Remix)",
				time:"03:06"
			},
			{
				songName:"W&amp;W - Gold",
				time:"02:49"
			},
			{
				songName:"Ummet Ozcan、Charly Lownoise &amp; Mental Theo、orange inc - Wonderful Days",
				time:"02:47"
			},
			{
				songName:"FELIX SANDMAN、Astrid S - RELATIONS",
				time:"02:44"
			},
			{
				songName:"David Guetta、MORTEN、Lanie Gardner - Dreams",
				time:"03:24"
			},
			{
				songName:"K-391、RØRY、Toby Romeo - Aurora (Toby Romeo Remix)",
				time:"04:10"
			},
			{
				songName:"Why Don t We - Lotus Inn",
				time:"03:15"
			},
			{
				songName:"Alexander 23、Jeremy Zucker - Nothing s the Same",
				time:"02:55"
			},
			{
				songName:"Passenger - Remember To Forget",
				time:"03:38"
			},
			{
				songName:"Ashnikko、初音ミク - Daisy 2.0 (Explicit)",
				time:"02:47"
			},
			{
				songName:"Noah Cyrus - All Three (Explicit)",
				time:"03:02"
			},
			{
				songName:"Miley Cyrus、Dua Lipa - Prisoner",
				time:"02:49"
			},
			{
				songName:"Au/Ra - Moon River",
				time:"03:00"
			},
			{
				songName:"Ella Henderson、AJ Mitchell - Blame It On The Mistletoe",
				time:"03:05"
			},
			{
				songName:"Laidback Luke、Ally Brooke - Dance It Off",
				time:"02:41"
			},
			{
				songName:"Le Youth、OCULA、Karra - Home Away From Home",
				time:"04:04"
			},
			{
				songName:"Birdy - Have Yourself A Merry Little Christmas",
				time:"02:08"
			},
			{
				songName:"grandson - Left Behind",
				time:"03:25"
			},
			{
				songName:"LeeHi、Crush - For You",
				time:"03:25"
			},
			{
				songName:"IZ*ONE - Panorama",
				time:"03:42"
			},
		],
		hanYuList:[
			{
				songName:"太妍 - What Do I Call You",
				time:"02:47"
			},
			{
				songName:"SWINGS、LeeHi、Simon Dominic - 악역 (Villain) (Prod. 코드 쿤스트)",
				time:"04:20"
			},
			{
				songName:"金钟国 - 지우고 아플 사랑은..",
				time:"04:47"
			},
			{
				songName:"脸红的思春期(BOL4) - Love Letter【启动了 OST】",
				time:"03:10"
			},
			{
				songName:"GOT7 - LAST PIECE",
				time:"03:42"
			},
			{
				songName:"BoA - Better",
				time:"03:19"
			},
			{
				songName:"aespa (에스파) - Black Mamba",
				time:"02:54"
			},
			{
				songName:"金圣圭 - I m Cold",
				time:"03:49"
			},
			{
				songName:"裕株 - I m in the Mood for Dancing【女神降临 OST】",
				time:"03:30"
			},
			{
				songName:"오승택、Giriboy、BIG Naughty - 내일이 오면 (Tomorrow)",
				time:"04:36"
			},
			{
				songName:"NCT2020 - RESONANCE",
				time:"05:14"
			},
			{
				songName:"请夏、R3hab - Dream of You (with R3HAB)",
				time:"03:12"
			},
			{
				songName:"ENHYPEN - Given-Taken",
				time:"03:03"
			},
			{
				songName:"郑恩地 - 혼잣말 (To Me)【启动了 OST】",
				time:"03:53"
			},
			{
				songName:"ONEWE - 기억 속 한 권의 책 (A book in Memory)",
				time:"03:57"
			},
			{
				songName:"乐童音乐家 - HAPPENING",
				time:"03:44"
			},
			{
				songName:"裴秀智 - My Dear Love【启动了 OST】",
				time:"04:01"
			},
			{
				songName:"JUN. K - 30분은 거절할까 봐(30 Minutes Might Be Too Long)",
				time:"03:22"
			},
			{
				songName:"싱어게인 23호 가수、싱어게인 32호 가수 - 개구장이 (捣蛋鬼)",
				time:"02:59"
			},
			{
				songName:"싱어게인 20호 가수、Darin - 그 또한 내 삶인데 (这也是我的人生)",
				time:"03:58"
			},
			{
				songName:"Kai - Mmmh",
				time:"03:12"
			},
			{
				songName:"GOT7 - Breath (넌 날 숨 쉬게 해)",
				time:"03:07"
			},
		],
		riYuList:[
			{
				songName:"YOASOBI、Ayase - ハルカ",
				time:"04:03"
			},
			{
				songName:"Eve - 心海",
				time:"04:24"
			},
			{
				songName:"LiSA、Uru - 再会 (produced by Ayase)",
				time:"04:02"
			},
			{
				songName:"majiko - 23:59",
				time:"04:39"
			},
			{
				songName:"菅田将暉 - 虹",
				time:"04:18"
			},
			{
				songName:"Reol - Q?【STAND BY ME 哆啦a夢2 OP】",
				time:"03:15"
			},
			{
				songName:"櫻坂46 - Nobody s fault",
				time:"04:29"
			},
			{
				songName:"amazarashi - 世界の解像度",
				time:"04:49"
			},
			{
				songName:"King Gnu - 千両役者",
				time:"03:00"
			},
			{
				songName:"milet - One Touch",
				time:"03:58"
			},
			{
				songName:"w-inds. - Beautiful Now",
				time:"03:22"
			},
			{
				songName:"GARNiDELiA - 宵闇胡蝶",
				time:"03:34"
			},
			{
				songName:"SF9 - My Story, My Song (Japanese Version)",
				time:"03:46"
			},
			{
				songName:"TWICE - Scorpion",
				time:"03:28"
			},
			{
				songName:"ヒトリエ - curved edge",
				time:"03:49"
			},
			{
				songName:"中島美嘉、藤巻亮太 - 真冬のハーモニー",
				time:"04:26"
			},
			{
				songName:"大森靖子 - stolen worID",
				time:"05:49"
			},
			{
				songName:"當山みれい - いやいいや",
				time:"04:31"
			},
			{
				songName:"NiziU - Sweet Bomb!",
				time:"02:55"
			},
			{
				songName:"嵐 - SHOW TIME",
				time:"03:43"
			},
			{
				songName:"milet - Who I Am",
				time:"03:23"
			},
			{
				songName:"中島美嘉、藤巻亮太 - 真冬のハーモニー (隆冬的和音)",
				time:"04:28"
			},
			{
				songName:"JO1 - Shine A Light",
				time:"03:16"
			},
			{
				songName:"Monsta X - Love Killa (Japanese ver.)",
				time:"03:03"
			}
		],
		num:1,
		min:0,
		max:8,
		current:1,
		pageTotal:3,
		remenGeShou:
		[
			[
				{
					imgUrl:'image/4-11.jpg',
					singer:'周杰伦'
				},
				{
					imgUrl:'image/4-12.jpg',
					singer:'薛之谦'
				},
				{
					imgUrl:'image/4-13.jpg',
					singer:'林俊杰'
				},
				{
					imgUrl:'image/4-14.jpg',
					singer:'海来阿木'
				},
				{
					imgUrl:'image/4-15.jpg',
					singer:'刘德华'
				},
				{
					imgUrl:'image/4-16.jpg',
					singer:'邓紫棋'
				},
				{
					imgUrl:'image/4-17.jpg',
					singer:'刘德华'
				},
				{
					imgUrl:'image/4-18.jpg',
					singer:'周杰伦'
				},
				{
					imgUrl:'image/4-19.jpg',
					singer:'小阿枫'
				},
				{
					imgUrl:'image/4-20.jpg',
					singer:'张学友'
				},
				{
					imgUrl:'image/4-21.jpg',
					singer:'陈奕迅'
				},
				{
					imgUrl:'image/4-22.jpg',
					singer:'刀郎'
				},
				{
					imgUrl:'image/4-23.jpg',
					singer:'王琪'
				},
				{
					imgUrl:'image/4-24.jpg',
					singer:'张杰'
				},
				{
					imgUrl:'image/4-25.jpg',
					singer:'王杰'
				},
				{
					imgUrl:'image/4-26.jpg',
					singer:'周深'
				},
			],
			[
				{
					imgUrl:'image/4-27.jpg',
					singer:'Alan Wallker'
				},
				{
					imgUrl:'image/4-28.jpg',
					singer:'Taylor Swift'
				},
				{
					imgUrl:'image/4-29.jpg',
					singer:'Imagine Drsdfdka'
				},
				{
					imgUrl:'image/4-30.jpg',
					singer:'LINKIN PARK'
				},
				{
					imgUrl:'image/4-31.jpg',
					singer:'MichaeL Jadjk'
				},
				{
					imgUrl:'image/4-32.jpg',
					singer:'Marshmello'
				},
				{
					imgUrl:'image/4-33.jpg',
					singer:'the Pussycat Dolls'
				},
				{
					imgUrl:'image/4-34.jpg',
					singer:'Justin Bieber'
				},
				{
					imgUrl:'image/4-35.jpg',
					singer:'Billie Eilish'
				},
				{
					imgUrl:'image/4-36.jpg',
					singer:'Troye Sivan'
				},
				{
					imgUrl:'image/4-32.jpg',
					singer:'Marshmello'
				},
				{
					imgUrl:'image/4-33.jpg',
					singer:'the Pussycat Dolls'
				},
				{
					imgUrl:'image/4-34.jpg',
					singer:'Justin Bieber'
				},
				{
					imgUrl:'image/4-35.jpg',
					singer:'Billie Eilish'
				},
				{
					imgUrl:'image/4-36.jpg',
					singer:'Troye Sivan'
				}
			],
			[
				{
					imgUrl:'image/4-11.jpg',
					singer:'周杰伦'
				},
				{
					imgUrl:'image/4-12.jpg',
					singer:'薛之谦'
				},
				{
					imgUrl:'image/4-13.jpg',
					singer:'林俊杰'
				},
				{
					imgUrl:'image/4-14.jpg',
					singer:'海来阿木'
				},
				{
					imgUrl:'image/4-15.jpg',
					singer:'刘德华'
				},
				{
					imgUrl:'image/4-16.jpg',
					singer:'邓紫棋'
				},
				{
					imgUrl:'image/4-17.jpg',
					singer:'刘德华'
				},
				{
					imgUrl:'image/4-18.jpg',
					singer:'周杰伦'
				},
				{
					imgUrl:'image/4-19.jpg',
					singer:'小阿枫'
				},
				{
					imgUrl:'image/4-20.jpg',
					singer:'张学友'
				},
				{
					imgUrl:'image/4-21.jpg',
					singer:'陈奕迅'
				},
				{
					imgUrl:'image/4-22.jpg',
					singer:'刀郎'
				},
				{
					imgUrl:'image/4-23.jpg',
					singer:'王琪'
				},
				{
					imgUrl:'image/4-24.jpg',
					singer:'张杰'
				},
				{
					imgUrl:'image/4-25.jpg',
					singer:'王杰'
				},
				{
					imgUrl:'image/4-26.jpg',
					singer:'周深'
				},
			],
			[
				{
					imgUrl:'image/4-27.jpg',
					singer:'Alan Wallker'
				},
				{
					imgUrl:'image/4-28.jpg',
					singer:'Taylor Swift'
				},
				{
					imgUrl:'image/4-29.jpg',
					singer:'Imagine Drsdfdka'
				},
				{
					imgUrl:'image/4-30.jpg',
					singer:'LINKIN PARK'
				},
				{
					imgUrl:'image/4-31.jpg',
					singer:'MichaeL Jadjk'
				},
				{
					imgUrl:'image/4-32.jpg',
					singer:'Marshmello'
				},
				{
					imgUrl:'image/4-33.jpg',
					singer:'the Pussycat Dolls'
				},
				{
					imgUrl:'image/4-34.jpg',
					singer:'Justin Bieber'
				},
				{
					imgUrl:'image/4-35.jpg',
					singer:'Billie Eilish'
				},
				{
					imgUrl:'image/4-36.jpg',
					singer:'Troye Sivan'
				},
				{
					imgUrl:'image/4-32.jpg',
					singer:'Marshmello'
				},
				{
					imgUrl:'image/4-33.jpg',
					singer:'the Pussycat Dolls'
				},
				{
					imgUrl:'image/4-34.jpg',
					singer:'Justin Bieber'
				},
				{
					imgUrl:'image/4-35.jpg',
					singer:'Billie Eilish'
				},
				{
					imgUrl:'image/4-36.jpg',
					singer:'Troye Sivan'
				}
			]
		],
		geshouLists:[],
		geshouNum:0,
		geshouNums:0,
		geshouMin:0,
		geshouMax:5,
		youqingLinks:
		[
			{
				href:"javascript:void(0);",
				title:"爱美网"
			},
			{
				href:"javascript:void(0);",
				title:"汽车论坛"
			},
			{
				href:"javascript:void(0);",
				title:"IT之家"
			},
			{
				href:"javascript:void(0);",
				title:"iPhone游戏"
			},
			{
				href:"javascript:void(0);",
				title:"旅游攻略"
			},
			{
				href:"javascript:void(0);",
				title:"华为商城"
			},
			{
				href:"javascript:void(0);",
				title:"365音乐网"
			},
			{
				href:"javascript:void(0);",
				title:"软件下载"
			},
			{
				href:"javascript:void(0);",
				title:"漫漫看漫画"
			},
			{
				href:"javascript:void(0);",
				title:"手机游戏"
			},
			{
				href:"javascript:void(0);",
				title:"5sing原创音乐"
			},
			{
				href:"javascript:void(0);",
				title:"腾讯音乐人"
			},
			{
				href:"javascript:void(0);",
				title:"豌豆荚"
			},
			{
				href:"javascript:void(0);",
				title:"5sing众筹"
			},
			{
				href:"javascript:void(0);",
				title:"智能电视网"
			},
			{
				href:"javascript:void(0);",
				title:"北京快网"
			},
			{
				href:"javascript:void(0);",
				title:"07073网页游戏"
			},
			{
				href:"javascript:void(0);",
				title:"站长之家"
			}
		],
		bottomLink:
		[
				{
					href:"javascript:void(0);",
					title:"关于酷狗"
				},
				{
					href:"javascript:void(0);",
					title:"监督举报"
				},
				{
					href:"javascript:void(0);",
					title:"商务合作"
				},
				{
					href:"javascript:void(0);",
					title:"广告服务"
				},
				{
					href:"javascript:void(0);",
					title:"投诉指引"
				},
				{
					href:"javascript:void(0);",
					title:"隐私政策"
				},
				{
					href:"javascript:void(0);",
					title:"儿童隐私政策"
				},
				{
					href:"javascript:void(0);",
					title:"用户服务协议"
				},
				{
					href:"javascript:void(0);",
					title:"酷狗音乐人"
				},
				{
					href:"javascript:void(0);",
					title:"酷狗直通车"
				},
				{
					href:"javascript:void(0);",
					title:"招聘信息"
				},
				{
					href:"javascript:void(0);",
					title:"客服中心"
				}
			],
		geshou_hover:false
	},
	created(){
		this.changeBg();
		document.getElementById('moreList').style.display='none';
		this.showHuaYu();
		this.geshouList(0);
	},
	methods:{
		hoverHi:function(e){
			hoverP = e.target.children;
			hoverP[2].style.display='none';
		},
		hover:function(e){
			hoverP = e.target.children;
			hoverP[2].style.display='block';
		},
		geshouKid:function(num){
			p=document.getElementById('geshouInform').children;
			for(var i=0;i<3;i++){
				p[i].style.color='rgb(0, 0, 0)';
			}
			p[3].style.color='gray';
			p[num].style.color='rgb(51, 172, 246)';
		},
		// 热门歌手的点点
		geshouDot:function(num){
			p=document.getElementById('geshouDot').children;
			for(var i=0;i<3;i++){
				p[i].style.color='rgb(204,204,204)';
			}
			p[num].style.color='rgb(51, 172, 246)';
		},
		geshouListKid:function(nums){
			this.geshouKid(nums);
			this.geshouNums=nums;
			this.geshouList(0);
		},
		geshouList:function(num){
			this.geshouDot(num);
			this.geshouLists=[];
			this.geshouMin=num*5;
			this.geshouMax=(num+1)*5;
			for(var i=this.geshouMin;i<this.geshouMax;i++){
				this.geshouLists.push(this.remenGeShou[this.geshouNums][i]);
				// console.log(this.geshouLists)
			}
		},
		// 先清除所有属性
		defXinConent:function(){
			this.min=0;
			this.max=8;
			this.current=1;
			document.getElementById("huayu").style.display='none';
			document.getElementById("hanyu").style.display='none';
			document.getElementById("oumei").style.display='none';
			document.getElementById("riyu").style.display='none';
			document.getElementById("huayus").style.color='black';
			document.getElementById("hanyus").style.color='black';
			document.getElementById("oumeis").style.color='black';
			document.getElementById("riyus").style.color='black';
		},
		// 对一个div进行控制（显示华语歌单）
		showHuaYu:function(){
			this.defXinConent();
			document.getElementById("huayu").style.display='block';
			document.getElementById("huayus").style.color='rgb(51, 172, 246)';
		},
		// 对一个div进行控制（显示欧美歌单）
		showOuMei:function(){
			this.defXinConent();
			document.getElementById("oumei").style.display='block';
			document.getElementById("oumeis").style.color='rgb(51, 172, 246)';
		},
		// 对一个div进行控制（显示韩语歌单）
		showHanYu:function(){
			this.defXinConent();
			document.getElementById("hanyu").style.display='block';
			document.getElementById("hanyus").style.color='rgb(51, 172, 246)';
		},
		// 对一个div进行控制（显示日语歌单）
		showRiYu:function(){
			this.defXinConent();
			document.getElementById("riyu").style.display='block';			
			document.getElementById("riyus").style.color='rgb(51, 172, 246)';
		},
		// 新歌翻页上一页
		afterXinContent:function(){
			if(this.min<16){
				this.min+=8;
				this.max+=8;
				this.current++;
			}
		},
		// 新歌翻页下一页
		beforXinContent:function(){
			if(this.min>0){
				this.min-=8;
				this.max-=8;
				this.current--;
			}
		},
		// 控制热门歌单鼠标的hover(悬浮状态)
		remenFlag:function(remenNum){
			if(remenNum==1){
				this.remenFlag1=!this.remenFlag1;
			}
			else if(remenNum==2){
				this.remenFlag2=!this.remenFlag2;
			}
			else if(remenNum==3){
				this.remenFlag3=!this.remenFlag3;
			}
		},
		gedanhover:function(gedanNum){
			if(gedanNum==1){
				this.jingFlag=!this.jingFlag;
			}
			else if(gedanNum==21){
				this.jingFlag1=!this.jingFlag1;
			}
			else if(gedanNum==22){
				this.jingFlag2=!this.jingFlag2;
			}
			else if(gedanNum==23){
				this.jingFlag3=!this.jingFlag3;
			}
			else if(gedanNum==24){
				this.jingFlag4=!this.jingFlag4;
			}
		},
		// 背景的上一页
		beforeBg:function(){
			if(this.num==1){
				this.num=5
			}else{
				this.num=this.num-1;
			}
			if(this.num==1){
				that.showDot5();
			}
			else if(this.num==2){
				that.showDot1();
			}
			else if(this.num==3){
				that.showDot2();
			}
			else if(this.num==4){
				that.showDot3();
			}
			else if(this.num==5){
				that.showDot4();
			}
		},
		// 背景的下一页
		afterBg:function(){
			if(this.num==1){
				this.num=5;
			}else{
				this.num=this.num-1;
			}
			console.log(this.num);
			if(this.num==1){
				that.showDot2();
			}
			else if(this.num==2){
				that.showDot3();
			}
			else if(this.num==3){
				that.showDot4();
			}
			else if(this.num==4){
				that.showDot5();
			}
			else if(this.num==5){
				that.showDot1();
			}
		},
		// 轮播图的箭头显示、隐藏
		jiantouFlagFun:function(){
			this.jiantouFlag=!this.jiantouFlag;
		},
		// 将所有的小圆点都为false
		setFalse:function(){
			this.dotFlag1=false;
			this.dotFlag2=false;
			this.dotFlag3=false;
			this.dotFlag4=false;
			this.dotFlag5=false;
		},
		judge:function(){
			//判断当前的轮播图
			for(var i=0;i<5;i++){
				if(this.dotFlag1||this.dotFlag2||this.dotFlag3){
					if(this.dotFlag1){
						this.num=1;
					}
					else if(this.dotFlag2){
						this.num=2;
					}else{
						this.num=3;
					}
				}else{
					if(this.dotFlag4){
						this.num=4;
					}else{
						this.num=5;
					}
				}
			}
		},
		// 改变背景
		changeBg:function(){
			//判断当前的轮播图
			this.autoPlay();
			this.getBg();
			document.getElementById('slid').style.backgroundImage=this.bgs[0];
		},
		// 轮播图的圆点作用
		showDot1:function(){
			this.num=1;
			this.setFalse();
			this.dotFlag1=true;
			document.getElementById('slid').style.backgroundImage=this.bgs[0];
		},
		showDot2:function(){
			this.num=2;
			this.setFalse();
			this.dotFlag2=true;
			document.getElementById('slid').style.backgroundImage=this.bgs[1];
		},
		showDot3:function(){
			this.num=3;
			this.setFalse();
			this.dotFlag3=true;
			document.getElementById('slid').style.backgroundImage=this.bgs[2];
		},
		showDot4:function(){
			this.num=4;
			this.setFalse();
			this.dotFlag4=true;
			document.getElementById('slid').style.backgroundImage=this.bgs[3];
		},
		showDot5:function(){
			this.num=5;
			this.setFalse();
			this.dotFlag5=true;
			document.getElementById('slid').style.backgroundImage=this.bgs[4];
		},
		// 更多菜单下拉框的显示、隐藏
		showMore:function(){
			this.hoverFlag=true;
			document.getElementById('moreList').style.display='block';
		},
		hiddenMore:function(){
			this.hoverFlag=false;
			document.getElementById('moreList').style.display='none';
		},
		showMoreList:function(){
			document.getElementById('moreList').style.display='block';
			this.hoverFlag=true;
			this.hoverFlagList=true;
		},
		// 获取背景
		getBg:function(){
			for(var i=0;i<8;i++){
				var bg = 'url("image/10'+i+'.jpg")';
				this.bgs.push(bg);
			}
		},
		
		// 自动播放轮播图
		autoPlay:function(){
			that = this;
			timer = setInterval(function(){
				if(that.num==1){
					that.showDot1();
					that.num++;
				}
				else if(that.num==2){
					that.showDot2();
					that.num++;
				}
				else if(that.num==3){
					that.showDot3();
					that.num++;
				}
				else if(that.num==4){
					that.showDot4();
					that.num++;
				}
				else if(that.num==5){
					that.showDot5();
					that.num=1;
				}
			}
			,2000);
		}
	}
})