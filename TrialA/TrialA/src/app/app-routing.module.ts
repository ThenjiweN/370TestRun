import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* ADMIN ROUTES */
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
import { CityComponent } from './admin/locations/city/city.component';
import { SuburbComponent } from './admin/locations/suburb/suburb.component';
import { ProvinceComponent } from './admin/locations/province/province.component';
import { TutorialsComponent } from './admin/tutorials/tutorials.component';
import { CountryComponent } from './admin/locations/country/country.component';
import { HelpComponent } from './admin/help/help.component';
import { DeliveryReportComponent } from './admin/reports/delivery-report/delivery-report.component';
import { ProductReportComponent } from './admin/reports/product-report/product-report.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';


/* CLIENT ROUTES */
import { AboutUsComponent } from './client/about-us/about-us.component';
import { ConsultationComponent } from './client/consultation/consultation/consultation.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/account/login/login.component';
import { ProductsComponent } from './client/products/products.component';
import { RegisterComponent } from './client/account/register/register.component';
import { ResetPasswordComponent } from './client/account/reset-password/reset-password.component';
import { SessionsComponent } from './client/ndo-services/sessions/sessions.component';
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
import { ProfileComponent } from './client/profile/profile/profile/profile.component';
import { ViewProfileComponent } from './client/profile/profile/view-profile/view-profile.component';
import { UpdateProfileComponent } from './client/profile/profile/update-profile/update-profile.component';
import { AddAddressComponent } from './client/profile/address/add-address/add-address.component';
import { UpdateAddressComponent } from './client/profile/address/update-address/update-address.component';
import { ViewAddressComponent } from './client/profile/address/view-address/view-address.component';
import { BlogEntryComponent } from './client/blog/blog-entry/blog-entry.component';
import { TutorialComponent } from './client/tutorial/tutorial.component';
import { ClientBookingsComponent } from './client/profile/bookings/client-bookings/client-bookings.component';
import { ClientOrdersComponent } from './client/profile/orders/client-orders/client-orders.component';
import { ViewClientOrderComponent } from './client/profile/orders/view-client-order/view-client-order.component';
import { ViewClientBookingComponent } from './client/profile/bookings/view-client-booking/view-client-booking.component';
import { ReturnReasonComponent } from './admin/returns/return-reason/return-reason.component';


const routes: Routes = [
/*   ADMIN PATHS */
    {path: 'dashboard', /* canActivate : [RouteGuardService], */  component: DashboardComponent},
    {path: 'sales-report', /* canActivate : [RouteGuardService], */ component: SalesReportComponent},
    {path: 'booking-report', /* canActivate : [RouteGuardService], */ component: BookingReportComponent},
    {path: 'delivery-report', /* canActivate : [RouteGuardService], */ component: DeliveryReportComponent},
    {path: 'customer-report', /* canActivate : [RouteGuardService], */ component: CustomerReportComponent},
    {path: 'inventory-report', /* canActivate : [RouteGuardService], */ component: InventoryReportComponent},
    {path: 'product-report', /* canActivate : [RouteGuardService], */ component: ProductReportComponent},
    {path: 'orders-report', /* canActivate : [RouteGuardService], */ component: OrdersReportComponent},
    {path: 'inventory-levels', /* canActivate : [RouteGuardService], */ component: InventoryLevelsComponent},
    {path: 'help', /* canActivate : [RouteGuardService], */  component: HelpComponent},
    {path: 'admin', /* canActivate : [RouteGuardService], */  component: AdminNavComponent},
    {path: 'product', /* canActivate : [RouteGuardService], */component: ProductComponent},
    {path: 'hair-condition', /* canActivate : [RouteGuardService], */component: HairConditionComponent},
    {path: 'product-type', /* canActivate : [RouteGuardService], */component: ProductTypeComponent},
    {path: 'service-packages', /* canActivate : [RouteGuardService], */component: ServicePackagesComponent},
    {path: 'city', /* canActivate : [RouteGuardService], */component: CityComponent},
    {path: 'suburb', /* canActivate : [RouteGuardService], */component: SuburbComponent},
    {path: 'tutorials', /* canActivate : [RouteGuardService], */component: TutorialsComponent},
    {path: 'province', /* canActivate : [RouteGuardService], */component: ProvinceComponent},
    {path: 'hair-density', /* canActivate : [RouteGuardService], */component: HairDensityComponent},
    {path: 'hair-length', /* canActivate : [RouteGuardService], */component: HairLengthComponent},
    {path: 'blog',/* canActivate : [RouteGuardService], */component: BlogComponent},
    {path: 'user', /* canActivate : [RouteGuardService], */component: UserComponent},
    {path: 'voucher', /* canActivate : [RouteGuardService], */component: VoucherComponent},
    {path: 'inventory-type', /* canActivate : [RouteGuardService], */component: InventoryTypeComponent},
    {path: 'inventory-item', /* canActivate : [RouteGuardService], */component: InventoryItemComponent},
    {path: 'allergens', /* canActivate : [RouteGuardService], */component: AllergensComponent},
    {path: 'country', /* canActivate : [RouteGuardService], */component: CountryComponent},
    {path: 'bookings', /* canActivate : [RouteGuardService], */component: BookingsComponent},
    {path: 'orders', /* canActivate : [RouteGuardService], */component: OrdersComponent},
    {path: 'return-reason', /* canActivate : [RouteGuardService], */component: ReturnReasonComponent},



/* CLIENT PATHS */
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog-entry', component: BlogEntryComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'sessions', component: SessionsComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'consultation', component: ConsultationComponent},
    {path: 'new-password', component: NewPasswordComponent},
    {path: 'entry', component: EntryComponent},
    {path: 'service-form', component: ServiceFormComponent},
    {path: 'consultation-form', component: ConsultationFormComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'service-payment', component: ServicePaymentComponent},
    {path: 'consultation-payment', component: ConsultationPaymentComponent},
    {path: 'payment-confirmation', component: PaymentConfirmationComponent},
    {path: 'con-payment-confirmation', component: ConPaymentConfirmationComponent},
    {path: 'serv-uns-payment', component: ServUnsPaymentComponent},
    {path: 'con-uns-payment', component: ConUnsPaymentComponent},
    {path: 'view-profile', component: ViewProfileComponent},
    {path: 'update-profile', component: UpdateProfileComponent},
    {path: 'client-orders', component: ClientOrdersComponent},
    {path: 'client-bookings', component: ClientBookingsComponent},
    {path: 'add-address', component: AddAddressComponent},
    {path: 'update-address', component: UpdateAddressComponent},
    {path: 'view-address', component: ViewAddressComponent},
    {path: 'tutorial', component: TutorialComponent},
    {path: 'view-client-booking', component: ViewClientBookingComponent},
    {path: 'view-client-order', component: ViewClientOrderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
