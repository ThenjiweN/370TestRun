import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* ADMIN ROUTES */
import { ProductComponent } from './admin/products/product/product/product.component';
import { CreateProductComponent } from './admin/products/product/create-product/create-product.component';
import { UpdateProductComponent } from './admin/products/product/update-product/update-product.component';
import { ViewProductComponent } from './admin/products/product/view-product/view-product.component';
import { ProductTypeComponent } from './admin/products/product-type/product-type/product-type.component';
import { UpdateProductTypeComponent } from './admin/products/product-type/update-product-type/update-product-type.component';
import { ViewProductTypeComponent } from './admin/products/product-type/view-product-type/view-product-type.component';
import { CreateProductTypeComponent } from './admin/products/product-type/create-product-type/create-product-type.component';
import { CreateBlogComponent } from './admin/blog/create-blog/create-blog.component';
import { ViewBlogComponent } from './admin/blog/view-blog/view-blog.component';
import { UpdateBlogComponent } from './admin/blog/update-blog/update-blog.component';
import { CreateHairConditionComponent } from './admin/hair-condition/hair-condition/create-hair-condition/create-hair-condition.component';
import { ViewHairConditionComponent } from './admin/hair-condition/hair-condition/view-hair-condition/view-hair-condition.component';
import { UpdateHairConditionComponent } from './admin/hair-condition/hair-condition/update-hair-condition/update-hair-condition.component';
import { CreateHairDensityComponent } from './admin/hair-condition/hair-density/create-hair-density/create-hair-density.component';
import { UpdateHairDensityComponent } from './admin/hair-condition/hair-density/update-hair-density/update-hair-density.component';
import { ViewHairDensityComponent } from './admin/hair-condition/hair-density/view-hair-density/view-hair-density.component';
import { CreateHairLengthComponent } from './admin/hair-condition/hair-length/create-hair-length/create-hair-length.component';
import { ViewHairLengthComponent } from './admin/hair-condition/hair-length/view-hair-length/view-hair-length.component';
import { UpdateHairLengthComponent } from './admin/hair-condition/hair-length/update-hair-length/update-hair-length.component';
import { CreateInventoryItemComponent } from './admin/inventory/inventory-item/create-inventory-item/create-inventory-item.component';
import { ViewInventoryItemComponent } from './admin/inventory/inventory-item/view-inventory-item/view-inventory-item.component';
import { UpdateInventoryItemComponent } from './admin/inventory/inventory-item/update-inventory-item/update-inventory-item.component';
import { CreateInventoryTypeComponent } from './admin/inventory/inventory-type/create-inventory-type/create-inventory-type.component';
import { ViewInventoryTypeComponent } from './admin/inventory/inventory-type/view-inventory-type/view-inventory-type.component';
import { UpdateInventoryTypeComponent } from './admin/inventory/inventory-type/update-inventory-type/update-inventory-type.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { ViewUserComponent } from './admin/user/view-user/view-user.component';
import { UpdateUserComponent } from './admin/user/update-user/update-user.component';
import { CreateServicePackageComponent } from './admin/packages/service-packages/create-service-package/create-service-package.component';
import { UpdateServicePackageComponent } from './admin/packages/service-packages/update-service-package/update-service-package.component';
import { ViewServicePackageComponent } from './admin/packages/service-packages/view-service-package/view-service-package.component';
import { CreateVoucherComponent } from './admin/voucher/create-voucher/create-voucher.component';
import { ViewVoucherComponent } from './admin/voucher/view-voucher/view-voucher.component';
import { SalesReportComponent } from './admin/reports/sales-report/sales-report.component';
import { BookingReportComponent } from './admin/reports/booking-report/booking-report.component';
import { CustomerReportComponent } from './admin/reports/customer-report/customer-report.component';
import { InventoryReportComponent } from './admin/reports/inventory-report/inventory-report.component';
import { OrdersReportComponent } from './admin/reports/orders-report/orders-report.component';
import { CreateAllergenComponent } from './admin/hair-condition/allergens/create-allergen/create-allergen.component';
import { UpdateAllergenComponent } from './admin/hair-condition/allergens/update-allergen/update-allergen.component';
import { ViewAllergenComponent } from './admin/hair-condition/allergens/view-allergen/view-allergen.component';
import { ViewBookingComponent } from './admin/bookings/view-booking/view-booking.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ServicePackagesComponent } from './admin/packages/service-packages/service-packages/service-packages.component';
import { HairConditionComponent } from './admin/hair-condition/hair-condition/hair-condition/hair-condition.component';
import { HairDensityComponent } from './admin/hair-condition/hair-density/hair-density/hair-density.component';
import { HairLengthComponent } from './admin/hair-condition/hair-length/hair-length/hair-length.component';
import { BlogComponent } from './admin/blog/blog/blog.component';
import { UserComponent } from './admin/user/user/user.component';
import { OrdersComponent } from './admin/orders/orders/orders.component';
import { BookingsComponent } from './admin/bookings/bookings/bookings.component';
import { VoucherComponent } from './admin/voucher/voucher/voucher.component';
import { InventoryTypeComponent } from './admin/inventory/inventory-type/inventory-type/inventory-type.component';
import { InventoryItemComponent } from './admin/inventory/inventory-item/inventory-item/inventory-item.component';
import { AllergensComponent } from './admin/hair-condition/allergens/allergen/allergens.component';
import { InventoryLevelsComponent } from './admin/inventory/inventory-levels/inventory-levels.component';
import { ViewOrderComponent } from './admin/orders/view-order/view-order.component';
import { CityComponent } from './admin/locations/city/city/city.component';
import { CreateCityComponent } from './admin/locations/city/create-city/create-city.component';
import { UpdateCityComponent } from './admin/locations/city/update-city/update-city.component';
import { ViewCityComponent } from './admin/locations/city/view-city/view-city.component';
import { SuburbComponent } from './admin/locations/suburb/suburb/suburb.component';
import { ViewSuburbComponent } from './admin/locations/suburb/view-suburb/view-suburb.component';
import { UpdateSuburbComponent } from './admin/locations/suburb/update-suburb/update-suburb.component';
import { CreateSuburbComponent } from './admin/locations/suburb/create-suburb/create-suburb.component';
import { ProvinceComponent } from './admin/locations/province/province/province.component';
import { ViewProvinceComponent } from './admin/locations/province/view-province/view-province.component';
import { CreateProvinceComponent } from './admin/locations/province/create-province/create-province.component';
import { UpdateProvinceComponent } from './admin/locations/province/update-province/update-province.component';
import { TutorialsComponent } from './admin/tutorials/tutorials/tutorials.component';
import { CreateTutorialsComponent } from './admin/tutorials/create-tutorials/create-tutorials.component';
import { UpdateTutorialsComponent } from './admin/tutorials/update-tutorials/update-tutorials.component';
import { ViewTutorialsComponent } from './admin/tutorials/view-tutorials/view-tutorials.component';
import { CreateCountryComponent } from './admin/locations/country/create-country/create-country.component';
import { UpdateCountryComponent } from './admin/locations/country/update-country/update-country.component';
import { ViewCountryComponent } from './admin/locations/country/view-country/view-country.component';
import { CountryComponent } from './admin/locations/country/country/country.component';
import { RouteGuardService } from './route-guard.service';
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

  {path: 'product',
  /* canActivate : [RouteGuardService], */
  children:[
    {path: '', component: ProductComponent},
    {path: 'create-product', component: CreateProductComponent},
    {path: 'view-product', component: ViewProductComponent},
    {path: 'update-product', component: UpdateProductComponent},    
  ]}, 

  {path: 'hair-condition',
  /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: HairConditionComponent},
      {path: 'view-hair-condition/:id', component: ViewHairConditionComponent},
      {path: 'update-hair-condition/:id', component: UpdateHairConditionComponent},
      {path: 'create-hair-condition', component: CreateHairConditionComponent},
  ]
  },

  {path: 'product-type',
  /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: ProductTypeComponent},
      {path: 'create-product-type', component: CreateProductTypeComponent},
      {path: 'view-product-type', component: ViewProductTypeComponent},
      {path: 'update-product-type', component: UpdateProductTypeComponent},

    ]},

    {path: 'service-packages',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: ServicePackagesComponent},
      {path: 'create-service-package', component: CreateServicePackageComponent},
      {path: 'update-service-package', component: UpdateServicePackageComponent},
      {path: 'view-service-package', component: ViewServicePackageComponent},
    ]},

    {path: 'city',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: CityComponent},
      {path: 'create-city', component: CreateCityComponent},
      {path: 'update-city', component: UpdateCityComponent},
      {path: 'view-city', component: ViewCityComponent},
    ]},

    {path: 'suburb',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: SuburbComponent},
      {path: 'create-suburb', component: CreateSuburbComponent},
      {path: 'update-suburb', component: UpdateSuburbComponent},
      {path: 'view-suburb', component: ViewSuburbComponent},
    ]},

    {path: 'tutorials',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: TutorialsComponent},
      {path: 'create-tutorials', component: CreateTutorialsComponent},
      {path: 'update-tutorials', component: UpdateTutorialsComponent},
      {path: 'view-tutorials', component: ViewTutorialsComponent},
    ]},

    {path: 'province',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: ProvinceComponent},
      {path: 'create-province', component: CreateProvinceComponent},
      {path: 'update-province', component: UpdateProvinceComponent},
      {path: 'view-province', component: ViewProvinceComponent},
    ]},

    {path: 'hair-density',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: HairDensityComponent},
      {path: 'create-hair-density', component: CreateHairDensityComponent},
      {path: 'update-hair-density', component: UpdateHairDensityComponent},
      {path: 'view-hair-density', component: ViewHairDensityComponent},
    ]},

    {path: 'hair-length',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: HairLengthComponent},
      {path: 'create-hair-length', component: CreateHairLengthComponent},
      {path: 'view-hair-length', component: ViewHairLengthComponent},
      {path: 'update-hair-length', component: UpdateHairLengthComponent},
    ]},

    {path: 'blog',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: BlogComponent},
      {path: 'create-blog', component: CreateBlogComponent},
      {path: 'view-blog', component: ViewBlogComponent},
      {path: 'update-blog', component: UpdateBlogComponent},
    ]},


    {path: 'user',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: UserComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'view-user', component: ViewUserComponent},
      {path: 'update-user', component: UpdateUserComponent},
    ]},


    {path: 'voucher',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: VoucherComponent},
      {path: 'create-voucher', component: CreateVoucherComponent},
      {path: 'view-voucher', component: ViewVoucherComponent},
    ]},

    {path: 'inventory-type',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: InventoryTypeComponent},
      {path: 'create-inventory-type', component: CreateInventoryTypeComponent},
      {path: 'view-inventory-type', component: ViewInventoryTypeComponent},
      {path: 'update-inventory-type', component: UpdateInventoryTypeComponent},
    ]},

    {path: 'inventory-item',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: InventoryItemComponent},
      {path: 'create-inventory-item', component: CreateInventoryItemComponent},
      {path: 'view-inventory-item', component: ViewInventoryItemComponent},
      {path: 'update-inventory-item', component: UpdateInventoryItemComponent},
    ]},

    {path: 'allergens',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: AllergensComponent},
      {path: 'create-allergen', component: CreateAllergenComponent},
      {path: 'update-allergen', component: UpdateAllergenComponent},
      {path: 'view-allergen', component: ViewAllergenComponent}, 
    ]},

    {path: 'country',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: CountryComponent},
      {path: 'create-country', component: CreateCountryComponent},
      {path: 'update-country', component: UpdateCountryComponent},
      {path: 'view-country', component: ViewCountryComponent}, 
    ]},

    {path: 'bookings',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: BookingsComponent},
      {path: 'view-booking', component: ViewBookingComponent},
    ]},

    {path: 'orders',
    /* canActivate : [RouteGuardService], */
    children:[
      {path: '', component: OrdersComponent},
      {path: 'view-order', component: ViewOrderComponent}, 
    ]},

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
