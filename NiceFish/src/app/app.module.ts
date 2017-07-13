import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { SharedModule  } from  './shared/shared.module';
import { AppComponent } from './app.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserRegisterService } from './user/user-register/user-register.service';
import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { EqualValidator } from './user/user-register/directives/equal-validator.directive';
import { GridComponent } from './grid-demo/grid/grid.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsComponent } from './charts/charts.component';
import { EChartOptionDirective1 } from './chart/echart-option.directive';
import { UseJqueryComponent } from './use-jquery/use-jquery.component';
import { GaodeMapComponent } from './map/gaode-map/gaode-map.component';
import { AmapComponent } from './map/gaode-map/amap/amap.component';
import { JsplumbDemoComponent } from './jsplumb-demo/jsplumb-demo.component';
import {appRoutes} from './app.routes';
import { AmchartsDemoComponent } from './amcharts-demo/amcharts-demo.component';
import { AmchartComponent } from './amcharts-demo/amchart/amchart.component';
import {ChengbysfxComponent} from "./chengbysfx/chengbysfx.component";
import {ShouyglComponent} from "./shouygl/shouygl.component";
import {RanlzbzhzsyfxComponent} from "./ranlzbzhzsyfx/ranlzbzhzsyfx.component";
import {DuibfxComponent} from "./duibfx/duibfx.component";
import {ZhengcxxComponent} from "./zhengcxx/zhengcxx.component";
import { YidyyComponent } from './yidyy/yidyy.component';
import {ShouhczsComponent} from "./shouhczs/shouhczs.component";
import {RucbdfxComponent} from "./rucbdfx/rucbdfx.component";
import {RucrmzbComponent} from "./rucrmzb/rucrmzb.component";
import {PeimfxComponent} from "./peimfx/peimfx.component";
import {ZonghcxComponent} from "./zonghcx/zonghcx.component";
import {QuanxglComponent} from "./quanxgl/quanxgl.component";
import {XinwwhComponent} from "./xinwwh/xinwwh.component";
import {DuibwhComponent} from "./duibwh/duibwh.component";
import {XitglComponent} from "./xitgl/xitgl.component";
import {BspiComponent} from "./bspi/bspi.component";
import {CctdComponent} from "./cctd/cctd.component";
import {DianmjgComponent} from "./dianmjg/dianmjg.component";
import {BootstrapTableComponent} from "./bootstrap-table/bootstrap-table.component";
import { RucrlzbComponent } from "./rucrlzb/rucrlzb.component";
import {YanhmtyjComponent} from "./yanhmtyj/yanhmtyj.component";
import {ChanyxComponent} from "./chanyx/chanyx.component";
import {GuojsgComponent} from "./guojsg/guojsg.component";
import {ZonghyjComponent} from "./zonghyj/zonghyj.component";
import {DonglmqhComponent} from "./donglmqh/donglmqh.component";
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    YidyyComponent,
    QuanxglComponent,
    XinwwhComponent,
    DuibwhComponent,
    XitglComponent,
    ZhengcxxComponent,
    BspiComponent,               //bspi
    CctdComponent,               //cctd
    DianmjgComponent,            //电煤价格
    YanhmtyjComponent,          //沿海煤运价
    ChanyxComponent,            //全国产运销
    GuojsgComponent,            //国际三港指数
    ZonghyjComponent,           //综合运价
    DonglmqhComponent,          //动力煤期货
    DuibfxComponent,
    ZonghcxComponent,
    PeimfxComponent,
    RucrlzbComponent,
    RucbdfxComponent,
    RucrmzbComponent,
    ShouhczsComponent,
    RanlzbzhzsyfxComponent,
    ShouyglComponent,
    ChengbysfxComponent,
    AppComponent,
    ForgetPwdComponent,
    UserRegisterComponent,
    EqualValidator,
    EChartOptionDirective1,
    ChartComponent,
    ChartsComponent,
    UseJqueryComponent,
    AmapComponent,
    GaodeMapComponent,
    JsplumbDemoComponent,
    GridDemoComponent,
    GridComponent,
    AmchartsDemoComponent,
    AmchartComponent,
    YidyyComponent,
    BootstrapTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    SharedModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserLoginService,
    UserRegisterService,
    ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
