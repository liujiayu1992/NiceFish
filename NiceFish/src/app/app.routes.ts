import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsComponent } from './charts/charts.component';
import { GaodeMapComponent } from './map/gaode-map/gaode-map.component';
import { UseJqueryComponent } from './use-jquery/use-jquery.component';
import { JsplumbDemoComponent } from './jsplumb-demo/jsplumb-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { AmchartsDemoComponent } from './amcharts-demo/amcharts-demo.component';
import {ChengbysfxComponent} from "./chengbysfx/chengbysfx.component";
import {RanlzbzhzsyfxComponent} from "./ranlzbzhzsyfx/ranlzbzhzsyfx.component";
import {DuibfxComponent} from "./duibfx/duibfx.component";
import {ZhengcxxComponent} from "./zhengcxx/zhengcxx.component";
import {YidyyComponent} from "./yidyy/yidyy.component";
import {ShouhczsComponent} from "./shouhczs/shouhczs.component";
import {RucbdfxComponent} from "./rucbdfx/rucbdfx.component";
import {RucrmzbComponent} from "./rucrmzb/rucrmzb.component";
import {PeimfxComponent} from "./peimfx/peimfx.component";
import {ZonghcxComponent} from "./zonghcx/zonghcx.component";
import {DuibwhComponent} from "./duibwh/duibwh.component";
import {XinwwhComponent} from "./xinwwh/xinwwh.component";
import {QuanxglComponent} from "./quanxgl/quanxgl.component";
import {XitglComponent} from "./xitgl/xitgl.component";
import {BspiComponent} from "./bspi/bspi.component";
import {DianmjgComponent} from "./dianmjg/dianmjg.component";
import {CctdComponent} from "./cctd/cctd.component";
import {ShouyglComponent} from "./shouygl/shouygl.component";
import { RucrlzbComponent } from "./rucrlzb/rucrlzb.component";
import {YanhmtyjComponent} from "./yanhmtyj/yanhmtyj.component";
import {ChanyxComponent} from "./chanyx/chanyx.component";
import {GuojsgComponent} from "./guojsg/guojsg.component";
import {ZonghyjComponent} from "./zonghyj/zonghyj.component";
import {DonglmqhComponent} from "./donglmqh/donglmqh.component";

export const appRoutes=[
	{
		path:'',
		redirectTo:'posts',
		pathMatch:'full'
	},
  {
    path:"amcharts",
    component:AmchartsDemoComponent
  },
  {
    path:"grid",
    component:GridDemoComponent
  },
  //--------------------------------
  {
    path:"charts",
    component:ChartsComponent
  },

  //首页概览
  {
    path:"shouygl",
    component:ShouyglComponent
  },

//燃料指标综合展示与分析
  {
    path:"ranlzbzhzsyfx",
    component:RanlzbzhzsyfxComponent
  },
  //收耗存展示
  {
    path:"shouhczs",
    component:ShouhczsComponent
  },
  //入厂标单分析
  {
    path:"rucbdfx",
    component:RucbdfxComponent
  },
  {
    path:"rucrmzb",
    component:RucrmzbComponent
  },

  //入厂入炉指标
  {
    path:"rucrlzb",
    component:RucrlzbComponent
  },
  //配煤分析
  {
    path:"peimfx",
    component:PeimfxComponent
  },
  //综合查询
  {
    path:"zonghcx",
    component:ZonghcxComponent
  },
  //成本因素分析
  {
    path:"chengbysfx",
    component:ChengbysfxComponent
  },
  //对标分析
  {
    path:"duibfx",
    component:DuibfxComponent
  },
  //bspi
  {
    path:"bspi",
    component:BspiComponent
  },
  //CCTD
  {
    path:"cctd",
    component:CctdComponent
  },
  //全国电煤价格指数
  {
    path:"dianmjg",
    component:DianmjgComponent
  },
  //沿海煤运价
  {
    path:"yanhmtyj",
    component:YanhmtyjComponent
  },
  //全国产运销数据
  {
    path:"chanyx",
    component:ChanyxComponent
  },
  //国际三港指数
  {
    path:"guojsg",
    component:GuojsgComponent
  },
  //波罗的海综合运价
  {
    path:"zonghyj",
    component:ZonghyjComponent,
  },
  //动力煤期货走势
  {
    path:"donglmqh",
    component:DonglmqhComponent
  },
  //政策信息
  {
    path:"zhengcxx",
    component:ZhengcxxComponent
  },
  //系统管理
  {
    path:"xitgl",
    component:XitglComponent
  },
  //对标维护
  {
    path:"duibwh",
    component:DuibwhComponent
  },
  //新闻维护
  {
    path:"xinwwh",
    component:XinwwhComponent
  },
  //权限管理
  {
    path:"quanxgl",
    component:QuanxglComponent
  },
  //移动应用
  {
    path:"yidyy",
    component:YidyyComponent
  },

  //----------------------------------
	{
		path:"echart",
		component:ChartComponent
	},
	{
		path:"map",
		component:GaodeMapComponent
	},
	{
		path:'home',
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'posts',
		loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'post',
		loadChildren:'./post/post.module#PostModule'
	},
	{
		path:'login',
		component:UserLoginComponent
	},
	{
		path:'forgetpwd',
		component:ForgetPwdComponent
	},
	{
		path:'register',
		component:UserRegisterComponent
	},
	{
		path:'user',
		loadChildren:'./user/user.module#UserModule'
	},
	{
		path: 'manage',
		loadChildren:'./manage/manage.module#ManageModule'
	},
	{
		path: 'jquery',
		component:UseJqueryComponent
	},{
		path:'jsplumb',
		component:JsplumbDemoComponent
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];

