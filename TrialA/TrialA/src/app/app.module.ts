import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ADMIN
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ProductComponent } from './admin/products/product/product.component';
import { ProductTypeComponent } from './admin/products/product-type/product-type.component';
import { SalesReportComponent } from './admin/reports/sales-report/sales-report.component';
import { BookingReportComponent } from './admin/reports/booking-report/booking-report.component';
import { CustomerReportComponent } from './admin/reports/customer-report/customer-report.component';
import { InventoryReportComponent } from './admin/reports/inventory-report/inventory-report.component';
import { OrdersReportComponent } from './admin/reports/orders-report/orders-report.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ServicePackagesComponent } from './admin/packages/service-packages.component';
import { HairConditionComponent } from './admin/hair-condition/hair-condition/hair-condition.component';
import { HairDensityComponent } from './admin/hair-condition/hair-density/hair-density.component';
import { HairLengthComponent } from './admin/hair-condition/hair-length/hair-length.component';
import { BlogComponent } from './admin/blog/blog.component';
import { UserComponent } from './admin/user/user.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { VoucherComponent } from './admin/voucher/voucher.component';
import { InventoryTypeComponent } from './admin/inventory/inventory-type/inventory-type.component';
import { InventoryItemComponent } from './admin/inventory/inventory-item/inventory-item.component';
import { AllergensComponent } from './admin/hair-condition/allergens/allergens.component';
import { InventoryLevelsComponent } from './admin/inventory/inventory-levels/inventory-levels.component';
import { RouterModule } from '@angular/router';
import { CityComponent } from './admin/locations/city/city.component';
import { SuburbComponent } from './admin/locations/suburb/suburb.component';
import { ProvinceComponent } from './admin/locations/province/province.component';
import { TutorialsComponent } from './admin/tutorials/tutorials.component';
import { CountryComponent } from './admin/locations/country/country.component';
import { HelpComponent } from './admin/help/help.component';
import { DeliveryReportComponent } from './admin/reports/delivery-report/delivery-report.component';
import { ProductReportComponent } from './admin/reports/product-report/product-report.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ReturnReasonComponent } from './admin/returns/return-reason/return-reason.component';


//CLIENT
import { AboutUsComponent } from './client/about-us/about-us.component';
import { ConsultationComponent } from './client/consultation/consultation/consultation.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/account/login/login.component';
import { ProductsComponent } from './client/products/products.component';
import { RegisterComponent } from './client/account/register/register.component';
import { ResetPasswordComponent } from './client/account/reset-password/reset-password.component';
import { SessionsComponent } from './client/ndo-services/sessions/sessions.component';
import { ProfileComponent } from './client/profile/profile/profile/profile.component';
import { ViewProfileComponent } from './client/profile/profile/view-profile/view-profile.component';
import { UpdateProfileComponent } from './client/profile/profile/update-profile/update-profile.component';
import { NewPasswordComponent } from './client/account/new-password/new-password.component';
import { EntryComponent } from './client/blog/entry/entry.component';
import { ServiceFormComponent } from './client/ndo-services/service-form/service-form.component';
import { ConsultationFormComponent } from './client/consultation/consultation-form/consultation-form.component';
import { ServicePaymentComponent } from './client/ndo-services/service-payment/service-payment.component';
import { ConsultationPaymentComponent } from './client/consultation/consultation-payment/consultation-payment.component';
import { PaymentConfirmationComponent } from './client/ndo-services/payment-confirmation/payment-confirmation.component';
import { ConPaymentConfirmationComponent } from './client/consultation/con-payment-confirmation/con-payment-confirmation.component';
import { ServUnsPaymentComponent } from './client/ndo-services/serv-uns-payment/serv-uns-payment.component';
import { ConUnsPaymentComponent } from './client/consultation/con-uns-payment/con-uns-payment.component';
import { AddAddressComponent } from './client/profile/address/add-address/add-address.component';
import { UpdateAddressComponent } from './client/profile/address/update-address/update-address.component';
import { ViewAddressComponent } from './client/profile/address/view-address/view-address.component';
import { BlogEntryComponent } from './client/blog/blog-entry/blog-entry.component';
import { TutorialComponent } from './client/tutorial/tutorial.component';
import { ClientBookingsComponent } from './client/profile/bookings/client-bookings/client-bookings.component';
import { ClientOrdersComponent } from './client/profile/orders/client-orders/client-orders.component';
import { ViewClientOrderComponent } from './client/profile/orders/view-client-order/view-client-order.component';
import { ViewClientBookingComponent } from './client/profile/bookings/view-client-booking/view-client-booking.component';
import { ClientNavComponent } from './client/client-nav/client-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BlogComponent,
    AllergensComponent,
    InventoryLevelsComponent,
    HairLengthComponent,
    VoucherComponent,
    InventoryItemComponent,
    OrdersComponent,
    BookingsComponent,
    InventoryTypeComponent,
    UserComponent,
    HairConditionComponent,
    HairDensityComponent,
    ServicePackagesComponent,
    ProductComponent,
    ProductTypeComponent,
    SalesReportComponent,
    BookingReportComponent,
    CustomerReportComponent,
    InventoryReportComponent,
    OrdersReportComponent,
    CityComponent,
    SuburbComponent,
    ProvinceComponent,
    TutorialsComponent,
    CountryComponent,
    AboutUsComponent,
    ConsultationComponent,
    ContactUsComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    ResetPasswordComponent,
    SessionsComponent,
    ProfileComponent,
    NewPasswordComponent,
    EntryComponent,
    ServiceFormComponent,
    ConsultationFormComponent,
    ServicePaymentComponent,
    ConsultationPaymentComponent,
    PaymentConfirmationComponent,
    ConPaymentConfirmationComponent,
    ServUnsPaymentComponent,
    ConUnsPaymentComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    ViewAddressComponent,
    BlogEntryComponent,
    TutorialComponent,
    ClientBookingsComponent,
    ClientOrdersComponent,
    ViewClientOrderComponent,
    ViewClientBookingComponent,
    AdminNavComponent,
    ClientNavComponent,
    HelpComponent,
    DeliveryReportComponent,
    ProductReportComponent,
    ReturnReasonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule, 
    CommonModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
