import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './component/layout/base-layout/base-layout.component';
import { HomeIndexComponent } from './component/pages/homepage/home-index/home-index.component';
//Demo
import { PatternComponent } from './component/pages/demo/pattern/pattern.component';
import { LibPrismComponent } from './component/pages/libraryAngular/lib-prism/lib-prism.component';
import { DemojapanComponent } from './component/pages/demo/demojapan/demojapan.component';
import { DemoComponent } from './component/pages/demo/demo/demo.component';
import { DemocallComponent } from './component/pages/demo/democall/democall.component';

//IDE
import { IdeIndexComponent } from './component/pages/ide/ide-index/ide-index.component';
import { IdeHotkeyVsComponent } from './component/pages/ide/ide-hotkey-vs/ide-hotkey-vs.component';
//pattern program
import { PtIndexComponent } from './component/pages/pattern/pt-index/pt-index.component';

//Java OOP
import { JvIndexComponent } from './component/pages/java/jv-index/jv-index.component';
import { JvOopGetsetComponent } from './component/pages/java/oop/jv-oop-getset/jv-oop-getset.component';
import { JvOopConstrucstorsComponent } from './component/pages/java/oop/jv-oop-construcstors/jv-oop-construcstors.component';
import { JvOopEncapsulationComponent } from './component/pages/java/oop/jv-oop-encapsulation/jv-oop-encapsulation.component';
import { JvOopInheritanceComponent } from './component/pages/java/oop/jv-oop-inheritance/jv-oop-inheritance.component';
import { JvOopAbstractClassComponent } from './component/pages/java/oop/jv-oop-abstract-class/jv-oop-abstract-class.component';
import { JvOopPolymorphismComponent } from './component/pages/java/oop/jv-oop-polymorphism/jv-oop-polymorphism.component';
import { JvOopInterfacesComponent } from './component/pages/java/oop/jv-oop-interfaces/jv-oop-interfaces.component';
import { JvOopOverloadingOverridingComponent } from './component/pages/java/oop/jv-oop-overloading-overriding/jv-oop-overloading-overriding.component';
import { JvOopAnonymousClassComponent } from './component/pages/java/oop/jv-oop-anonymous-class/jv-oop-anonymous-class.component';
import { JvOopInnerClassComponent } from './component/pages/java/oop/jv-oop-inner-class/jv-oop-inner-class.component';
import { JvOopMethodEqualsComponent } from './component/pages/java/oop/jv-oop-method-equals/jv-oop-method-equals.component';
import { JvBasicConvertComponent } from './component/pages/java/jv-basic-convert/jv-basic-convert.component';
//Java JPA
import { JvJpaAnotationComponent } from './component/pages/java/jpa/jv-jpa-annotation/jv-jpa-annotation.component'; //index
import { JvJpaEntityComponent } from './component/pages/java/jpa/jv-jpa-entity/jv-jpa-entity.component';
import { JvJpaH2ConnectionComponent } from './component/pages/java/jpa/jv-jpa-h2-connection/jv-jpa-h2-connection.component'; 

//Java Spring
import { SprBeginComponent } from './component/pages/java/spring/spr-begin/spr-begin.component';
import { SprSelectDataHibernateH2Component } from './component/pages/java/spring/spr-select-data-hibernate-h2/spr-select-data-hibernate-h2.component';
import { SprInsertDataHibernateH2Component } from './component/pages/java/spring/spr-insert-data-hibernate-h2/spr-insert-data-hibernate-h2.component';
import { SprUpdateDataHibernateH2Component } from './component/pages/java/spring/spr-update-data-hibernate-h2/spr-update-data-hibernate-h2.component';
import { SprDeleteDataHibernateH2Component } from './component/pages/java/spring/spr-delete-data-hibernate-h2/spr-delete-data-hibernate-h2.component';

//Javascript
import { JsIndexComponent } from './component/pages/javascript/js-index/js-index.component';
import { JsBasicOnOnclickComponent } from './component/pages/javascript/js-basic-on-onclick/js-basic-on-onclick.component';
import { JsArrayComponent } from './component/pages/javascript/js-array/js-array.component';

import { JsAngularNgrxComponent } from './component/pages/javascript/js-angular-ngrx/js-angular-ngrx.component';

//Download
import { DlIndexComponent } from './component/pages/download/dl-index/dl-index.component';

// Japan
import { JpVocabularyComponent } from './component/pages/japan/jp-vocabulary/jp-vocabulary.component';
import { JpIndexComponent } from './component/pages/japan/jp-index/jp-index.component';

//CSharp
import { CsIndexComponent } from './component/pages/csharp/cs-index/cs-index.component';
import { CsBasicDelegateComponent } from './component/pages/csharp/cs-basic-delegate/cs-basic-delegate.component';


//CSS
import { CssIndexComponent } from './component/pages/css/css-index/css-index.component';
import { CssSpinTextOnMouseHoverComponent } from './component/pages/css/css-spin-text-on-mouse-hover/css-spin-text-on-mouse-hover.component';
import { CssImageOverlayHoverEffectsComponent } from './component/pages/css/css-image-overlay-hover-effects/css-image-overlay-hover-effects.component';
import { CssSkewTextOnHoverComponent } from './component/pages/css/css-skew-text-on-hover/css-skew-text-on-hover.component';
import { Css3dTextOnHoverComponent } from './component/pages/css/css3d-text-on-hover/css3d-text-on-hover.component';
import { CssImageHoverEffects1Component } from './component/pages/css/css-image-hover-effects1/css-image-hover-effects1.component';


const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [
			//homepage
			{ path: '', component: HomeIndexComponent },
			//Java
			{ path: 'java', component: JvIndexComponent },
			{ path: 'java/oop-getset', component: JvOopGetsetComponent },
			{ path: 'java/oop-construcstor', component: JvOopConstrucstorsComponent },
			{ path: 'java/oop-encapsulation', component: JvOopEncapsulationComponent },
			{ path: 'java/oop-inheritance', component: JvOopInheritanceComponent },
			{ path: 'java/oop-abstract-class', component: JvOopAbstractClassComponent },
			{ path: 'java/oop-polymorphism', component: JvOopPolymorphismComponent },
			{ path: 'java/oop-interfaces', component: JvOopInterfacesComponent },
			{ path: 'java/oop-overloading-overriding', component: JvOopOverloadingOverridingComponent },
			{ path: 'java/oop-anonymous-class', component: JvOopAnonymousClassComponent },
			{ path: 'java/oop-inner-class', component: JvOopInnerClassComponent },
			{ path: 'java/oop-method-equals', component: JvOopMethodEqualsComponent },
			{ path: 'java/basic-convert', component: JvBasicConvertComponent },
			//Java JPA
			{ path: 'java/jpa-anotation', component: JvJpaAnotationComponent },
			{ path: 'java/jpa-anotation/entity', component: JvJpaEntityComponent },
			{ path: 'java/jpa-h2-connection', component: JvJpaH2ConnectionComponent },
			//Spring
			{ path: 'java/spring-begin', component: SprBeginComponent },
			{ path: 'java/spring-select-data-hibernate-h2-database', component: SprSelectDataHibernateH2Component },
			{ path: 'java/spring-insert-data-hibernate-h2-database', component: SprInsertDataHibernateH2Component },
			{ path: 'java/spring-update-data-hibernate-h2-database', component: SprUpdateDataHibernateH2Component },
			{ path: 'java/spring-delete-data-hibernate-h2-database', component: SprDeleteDataHibernateH2Component },

			//Javascript
			{ path: 'javascript', component: JsIndexComponent },
			{ path: 'javascript/basic-click-and-on-click', component: JsBasicOnOnclickComponent },
			{ path: 'javascript/array', component: JsArrayComponent },
			{ path: 'javascript/angular-ngrx', component: JsAngularNgrxComponent },

			//CSharp
			{ path: 'csharp', component: CsIndexComponent },
			{ path: 'csharp/cs-basic-delegate', component: CsBasicDelegateComponent },

			//CSS
			{ path: 'css', component: CssIndexComponent },
			{ path: 'css/20170115-spin-text-on-mouse-hover', component: CssSpinTextOnMouseHoverComponent },
			{ path: 'css/20170121-css-image-overlay-hover-effects', component: CssImageOverlayHoverEffectsComponent },
			{ path: 'css/20170121-skew-text-on-hover', component: CssSkewTextOnHoverComponent },
			{ path: 'css/20170121-3d-text-on-hover', component: Css3dTextOnHoverComponent },
			{ path: 'css/20170122-css-image-hover-effects', component: CssImageHoverEffects1Component },

			//Download
			{path: 'download', component: DlIndexComponent},
			//IDE 
			{path: 'ide', component: IdeIndexComponent},
			{path: 'ide/hotkey-vs', component: IdeHotkeyVsComponent},
			
			//pattern program
			{path: 'pattern', component: PtIndexComponent},
			
			//libraryAngular
			{path: 'prism', component: LibPrismComponent},
			//Japan
			{path: 'japan', component: JpIndexComponent},
			{path: 'japan/vocabulary/:unitNumber', component: JpVocabularyComponent},
			
			//demo
			{path: 'demo-pattern', component: PatternComponent},
			{path: 'demo-japan', component: DemojapanComponent},
			
			{path: 'demo/call', component: DemocallComponent},

			{path: 'demo/demo', component: DemoComponent},
			{path: 'demo/demo/:id', component: DemoComponent}

		]
	},
	// {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
