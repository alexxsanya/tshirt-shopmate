import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './pages/home/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CbuttonComponent } from './components/cbutton/cbutton.component';
import { FilterComponent } from './components/filter/filter.component';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule,
  NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION
} from 'ngx-ui-loader';
import { FooterComponent } from './components/footer/footer.component';
import { SingleItemComponent } from './pages/single-item/single-item.component';
import { BarRatingModule } from 'ngx-bar-rating';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, Actions } from '@ngrx/effects';

import { productsReducer } from 'src/app/pages/home/products/state/products.reducer';
import { ProductsEffects } from 'src/app/pages/home/products/state/products.effects';

import { productReducer } from 'src/app/pages/single-item/state/product.reducer';
import { ProductEffects } from 'src/app/pages/single-item/state/product.effects';

import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginEffects } from './components/login/state/login.effects';
import { userReducer } from './components/login/state/login.reducers';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#f62f5e',
  fgsColor:'#f62f5e',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.threeStrings,
  fgsType: SPINNER.threeStrings,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 3,
  pbColor: "#f62f5e",
  overlayColor: "rgba(0,0,0,0.7)",
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    ProductComponent,
    CbuttonComponent,
    FilterComponent,
    FooterComponent,
    SingleItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), // import NgxUiLoaderModule
    NgxUiLoaderRouterModule, // import NgxUiLoaderRouterModule. By default, it will show foreground loader.
    // If you need to show background spinner, do as follow:
    // NgxUiLoaderRouterModule.forRoot({ showForeground: false })
    BarRatingModule,
    StoreModule.forRoot({products: productsReducer, product: productReducer, user: userReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProductsEffects, ProductEffects, LoginEffects]),
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [Actions, EffectsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
