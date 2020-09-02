import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//------------------------
// Service
//------------------------
import { HighlightService } from "./services/highlight/highlight.service";

//------------------------
// Component
//------------------------
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './component/layout/base-layout/base-layout.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { HomeIndexComponent } from './component/pages/homepage/home-index/home-index.component';
import { TableOfContentComponent } from './component/layout/table-of-content/table-of-content.component';

import { LibPrismComponent } from './component/pages/libraryAngular/lib-prism/lib-prism.component';
//Demo
import { PatternComponent } from './component/pages/demo/pattern/pattern.component';
import { DemojapanComponent } from './component/pages/demo/demojapan/demojapan.component';
import { DemoComponent } from './component/pages/demo/demo/demo.component';
import { DemocallComponent } from './component/pages/demo/democall/democall.component';
//Download
import { DlIndexComponent } from './component/pages/download/dl-index/dl-index.component';
//IDE 
import { IdeIndexComponent } from './component/pages/ide/ide-index/ide-index.component';
import { IdeHotkeyVsComponent } from './component/pages/ide/ide-hotkey-vs/ide-hotkey-vs.component';
//pattern program
import { PtIndexComponent } from './component/pages/pattern/pt-index/pt-index.component';

//Java OOP
import { JvIndexComponent } from './component/pages/java/jv-index/jv-index.component';
import { JvOopGetsetComponent } from './component/pages/java/oop/jv-oop-getset/jv-oop-getset.component';
import { JvOopConstrucstorsComponent } from "./component/pages/java/oop/jv-oop-construcstors/jv-oop-construcstors.component";
import { JvOopEncapsulationComponent } from "./component/pages/java/oop/jv-oop-encapsulation/jv-oop-encapsulation.component";
import { JvOopInheritanceComponent } from './component/pages/java/oop/jv-oop-inheritance/jv-oop-inheritance.component';
import { JvOopAbstractClassComponent } from './component/pages/java/oop/jv-oop-abstract-class/jv-oop-abstract-class.component';
import { JvOopPolymorphismComponent } from './component/pages/java/oop/jv-oop-polymorphism/jv-oop-polymorphism.component';
import { JvOopInterfacesComponent } from "./component/pages/java/oop/jv-oop-interfaces/jv-oop-interfaces.component";
import { JvOopOverloadingOverridingComponent } from './component/pages/java/oop/jv-oop-overloading-overriding/jv-oop-overloading-overriding.component';
import { JvOopAnonymousClassComponent } from './component/pages/java/oop/jv-oop-anonymous-class/jv-oop-anonymous-class.component';
import { JvOopInnerClassComponent } from "./component/pages/java/oop/jv-oop-inner-class/jv-oop-inner-class.component";
import { JvOopMethodEqualsComponent } from "./component/pages/java/oop/jv-oop-method-equals/jv-oop-method-equals.component";

import { JvBasicConvertComponent } from './component/pages/java/jv-basic-convert/jv-basic-convert.component';
// Java IPA
import { JvJpaAnotationComponent } from './component/pages/java/jpa/jv-jpa-annotation/jv-jpa-annotation.component';//index
import { JvJpaEntityComponent } from './component/pages/java/jpa/jv-jpa-entity/jv-jpa-entity.component';
import { JvJpaH2ConnectionComponent } from './component/pages/java/jpa/jv-jpa-h2-connection/jv-jpa-h2-connection.component';

// Java Spring
import { SprBeginComponent } from './component/pages/java/spring/spr-begin/spr-begin.component';
import { SprSelectDataHibernateH2Component } from './component/pages/java/spring/spr-select-data-hibernate-h2/spr-select-data-hibernate-h2.component';
import { SprInsertDataHibernateH2Component } from './component/pages/java/spring/spr-insert-data-hibernate-h2/spr-insert-data-hibernate-h2.component';
import { SprUpdateDataHibernateH2Component } from './component/pages/java/spring/spr-update-data-hibernate-h2/spr-update-data-hibernate-h2.component';
import { SprDeleteDataHibernateH2Component } from './component/pages/java/spring/spr-delete-data-hibernate-h2/spr-delete-data-hibernate-h2.component';

//Javascript
import { JsIndexComponent } from './component/pages/javascript/js-index/js-index.component';
import { JsBasicOnOnclickComponent } from './component/pages/javascript/js-basic-on-onclick/js-basic-on-onclick.component';

//Japan
import { JpVocabularyComponent } from './component/pages/japan/jp-vocabulary/jp-vocabulary.component';
import { JapanVocabularyComponent } from './component/layout/japan-vocabulary/japan-vocabulary.component';
import { JpIndexComponent } from './component/pages/japan/jp-index/jp-index.component';

//CSS
import { CssIndexComponent } from './component/pages/css/css-index/css-index.component';
import { CssSpinTextOnMouseHoverComponent } from './component/pages/css/css-spin-text-on-mouse-hover/css-spin-text-on-mouse-hover.component';
import { CssImageOverlayHoverEffectsComponent } from './component/pages/css/css-image-overlay-hover-effects/css-image-overlay-hover-effects.component';
import { CssSkewTextOnHoverComponent } from './component/pages/css/css-skew-text-on-hover/css-skew-text-on-hover.component';
import { Css3dTextOnHoverComponent } from './component/pages/css/css3d-text-on-hover/css3d-text-on-hover.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeIndexComponent,
    LibPrismComponent,
    JvIndexComponent,
    JvOopGetsetComponent,
    JvOopConstrucstorsComponent,
    JvOopEncapsulationComponent,
    JvOopInheritanceComponent,
    JvOopAbstractClassComponent,
    JvOopPolymorphismComponent,
    JvOopInterfacesComponent,
    JvOopOverloadingOverridingComponent,
    JvOopAnonymousClassComponent,
    JvOopInnerClassComponent,
    JvOopMethodEqualsComponent,
    JvBasicConvertComponent,
    DlIndexComponent,
    IdeIndexComponent,
    IdeHotkeyVsComponent,
    PtIndexComponent,
    PatternComponent,
    TableOfContentComponent,
    JvJpaAnotationComponent,
    JvJpaEntityComponent,
    JvJpaH2ConnectionComponent,
    DemojapanComponent,
    JpVocabularyComponent,
    JapanVocabularyComponent,
    DemoComponent,
    JpIndexComponent,
    DemocallComponent,
    JsIndexComponent,
    JsBasicOnOnclickComponent,
    SprBeginComponent,
    SprSelectDataHibernateH2Component,
    SprInsertDataHibernateH2Component,
    SprUpdateDataHibernateH2Component,
    SprDeleteDataHibernateH2Component,
    CssIndexComponent,
    CssSpinTextOnMouseHoverComponent,
    CssImageOverlayHoverEffectsComponent,
    CssSkewTextOnHoverComponent,
    Css3dTextOnHoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HighlightService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
