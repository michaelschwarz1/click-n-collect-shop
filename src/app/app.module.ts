import { environment } from './../environments/environment.prod';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from './components/header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CartSummaryTableComponent } from './components/cart-summary-table/cart-summary-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { v4 as uuidv4 } from 'uuid';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire';
import { NzSelectModule } from 'ng-zorro-antd/select';
registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartPageComponent,
    ProductsPageComponent,
    ProductListComponentComponent,
    ProductListItemComponent,
    HeaderComponent,
    CartSummaryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NzCardModule,
    NzGridModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzBadgeModule,
    NzSelectModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
