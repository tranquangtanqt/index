import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './component/layout/base-layout/base-layout.component';
import { HomeIndexComponent } from './component/pages/homepage/home-index/home-index.component';
//Demo
import { PatternComponent } from './component/pages/demo/pattern/pattern.component';
import { LibPrismComponent } from './component/pages/libraryAngular/lib-prism/lib-prism.component';
//IDE
import { IdeIndexComponent } from './component/pages/ide/ide-index/ide-index.component';
import { IdeHotkeyVsComponent } from './component/pages/ide/ide-hotkey-vs/ide-hotkey-vs.component';
//pattern program
import { PtIndexComponent } from './component/pages/pattern/pt-index/pt-index.component';

//Java
import { JvIndexComponent } from './component/pages/java/jv-index/jv-index.component';
import { JvOopGetsetComponent } from './component/pages/java/jv-oop-getset/jv-oop-getset.component';
import { JvOopConstrucstorsComponent } from './component/pages/java/jv-oop-construcstors/jv-oop-construcstors.component';
import { JvOopEncapsulationComponent } from './component/pages/java/jv-oop-encapsulation/jv-oop-encapsulation.component';
import { JvOopInheritanceComponent } from './component/pages/java/jv-oop-inheritance/jv-oop-inheritance.component';
import { JvOopAbstractClassComponent } from './component/pages/java/jv-oop-abstract-class/jv-oop-abstract-class.component';
import { JvOopPolymorphismComponent } from './component/pages/java/jv-oop-polymorphism/jv-oop-polymorphism.component';
import { JvOopInterfacesComponent } from './component/pages/java/jv-oop-interfaces/jv-oop-interfaces.component';
import { JvOopOverloadingOverridingComponent } from './component/pages/java/jv-oop-overloading-overriding/jv-oop-overloading-overriding.component';
import { JvOopAnonymousClassComponent } from './component/pages/java/jv-oop-anonymous-class/jv-oop-anonymous-class.component';
import { JvOopInnerClassComponent } from './component/pages/java/jv-oop-inner-class/jv-oop-inner-class.component';
import { JvOopMethodEqualsComponent } from './component/pages/java/jv-oop-method-equals/jv-oop-method-equals.component';
import { JvBasicConvertComponent } from './component/pages/java/jv-basic-convert/jv-basic-convert.component';
import { JvJpaAnotationComponent } from './component/pages/java/jv-jpa-anotation/jv-jpa-anotation.component';

//Download
import { DlIndexComponent } from './component/pages/download/dl-index/dl-index.component';

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
			{ path: 'java/jpa-anotation', component: JvJpaAnotationComponent },

			//Download
			{path: 'download', component: DlIndexComponent},
			//IDE 
			{path: 'ide', component: IdeIndexComponent},
			{path: 'ide/hotkey-vs', component: IdeHotkeyVsComponent},
			
			//pattern program
			{path: 'pattern', component: PtIndexComponent},
			
			//libraryAngular
			{path: 'prism', component: LibPrismComponent},
			
			//demo
			{path: 'demo-pattern', component: PatternComponent},
		]
	},
	// {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
