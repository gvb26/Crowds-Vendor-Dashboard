'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crowds-vendor-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c57061ae7bf1e1a707c8ad84965e591d"' : 'data-target="#xs-components-links-module-AppModule-c57061ae7bf1e1a707c8ad84965e591d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c57061ae7bf1e1a707c8ad84965e591d"' :
                                            'id="xs-components-links-module-AppModule-c57061ae7bf1e1a707c8ad84965e591d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-6dcfacecb6db8993660bb51be78ee319"' : 'data-target="#xs-components-links-module-DashboardModule-6dcfacecb6db8993660bb51be78ee319"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-6dcfacecb6db8993660bb51be78ee319"' :
                                            'id="xs-components-links-module-DashboardModule-6dcfacecb6db8993660bb51be78ee319"' }>
                                            <li class="link">
                                                <a href="components/AgeDemographicsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgeDemographicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrowdSizeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrowdSizeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurrentCrowdSizeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CurrentCrowdSizeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DealButtonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DealButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DealDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DealDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FootTrafficComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FootTrafficComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenderDemographicsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenderDemographicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlidePanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SlidePanelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DealsModule.html" data-type="entity-link">DealsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DealsModule-4e9af608218adc963312bbabf8cc2f64"' : 'data-target="#xs-components-links-module-DealsModule-4e9af608218adc963312bbabf8cc2f64"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DealsModule-4e9af608218adc963312bbabf8cc2f64"' :
                                            'id="xs-components-links-module-DealsModule-4e9af608218adc963312bbabf8cc2f64"' }>
                                            <li class="link">
                                                <a href="components/DealDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DealDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewDealComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewDealComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocationModule.html" data-type="entity-link">LocationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' : 'data-target="#xs-components-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' :
                                            'id="xs-components-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' }>
                                            <li class="link">
                                                <a href="components/LocationEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationScreenComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationScreenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationTabComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' : 'data-target="#xs-injectables-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' :
                                        'id="xs-injectables-links-module-LocationModule-10d9905d54097f73c8733332f110574c"' }>
                                        <li class="link">
                                            <a href="injectables/LocationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d97a9e7b62d4d127aae6c650047a0406"' : 'data-target="#xs-components-links-module-SharedModule-d97a9e7b62d4d127aae6c650047a0406"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d97a9e7b62d4d127aae6c650047a0406"' :
                                            'id="xs-components-links-module-SharedModule-d97a9e7b62d4d127aae6c650047a0406"' }>
                                            <li class="link">
                                                <a href="components/CrowdsButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrowdsButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrowdsHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrowdsHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrowdsNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrowdsNavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupModule.html" data-type="entity-link">SignupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' : 'data-target="#xs-components-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' :
                                            'id="xs-components-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' }>
                                            <li class="link">
                                                <a href="components/ConfirmSignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmSignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CredentialsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CredentialsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CuisineTypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CuisineTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationTypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaxCapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaxCapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResendCodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResendCodeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' : 'data-target="#xs-injectables-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' :
                                        'id="xs-injectables-links-module-SignupModule-dda12eb37c954e68825474efe40e0c96"' }>
                                        <li class="link">
                                            <a href="injectables/SignupService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SignupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupRoutingModule.html" data-type="entity-link">SignupRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/APIService.html" data-type="entity-link">APIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DealService.html" data-type="entity-link">DealService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationService.html" data-type="entity-link">LocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignoutService.html" data-type="entity-link">SignoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignupService.html" data-type="entity-link">SignupService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cuisine.html" data-type="entity-link">Cuisine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hour.html" data-type="entity-link">Hour</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locations.html" data-type="entity-link">Locations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationType.html" data-type="entity-link">LocationType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vendor.html" data-type="entity-link">Vendor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vendor-1.html" data-type="entity-link">Vendor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});