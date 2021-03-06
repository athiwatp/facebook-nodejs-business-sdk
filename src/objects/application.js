/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import OpenGraphObject from './open-graph-object';
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import Business from './business';
import Group from './group';
import CustomAudience from './custom-audience';
import AdAccount from './ad-account';
import User from './user';
import DACheck from './da-check';
import DirectDeal from './direct-deal';
import Event from './event';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import ExternalEventSourcePixelHelperDebuggingInfo from './external-event-source-pixel-helper-debugging-info';
import ExternalEventSourceDebugging from './external-event-source-debugging';

/**
 * Application
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Application extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      an_ad_space_limit: 'an_ad_space_limit',
      an_platforms: 'an_platforms',
      android_key_hash: 'android_key_hash',
      android_sdk_error_categories: 'android_sdk_error_categories',
      app_domains: 'app_domains',
      app_events_feature_bitmask: 'app_events_feature_bitmask',
      app_events_session_timeout: 'app_events_session_timeout',
      app_install_tracked: 'app_install_tracked',
      app_name: 'app_name',
      app_signals_binding_ios: 'app_signals_binding_ios',
      app_type: 'app_type',
      auth_dialog_data_help_url: 'auth_dialog_data_help_url',
      auth_dialog_headline: 'auth_dialog_headline',
      auth_dialog_perms_explanation: 'auth_dialog_perms_explanation',
      auth_referral_default_activity_privacy: 'auth_referral_default_activity_privacy',
      auth_referral_enabled: 'auth_referral_enabled',
      auth_referral_extended_perms: 'auth_referral_extended_perms',
      auth_referral_friend_perms: 'auth_referral_friend_perms',
      auth_referral_response_type: 'auth_referral_response_type',
      auth_referral_user_perms: 'auth_referral_user_perms',
      auto_event_mapping_android: 'auto_event_mapping_android',
      auto_event_mapping_ios: 'auto_event_mapping_ios',
      auto_event_setup_enabled: 'auto_event_setup_enabled',
      business: 'business',
      canvas_fluid_height: 'canvas_fluid_height',
      canvas_fluid_width: 'canvas_fluid_width',
      canvas_url: 'canvas_url',
      category: 'category',
      client_config: 'client_config',
      company: 'company',
      configured_ios_sso: 'configured_ios_sso',
      contact_email: 'contact_email',
      context: 'context',
      created_time: 'created_time',
      creator_uid: 'creator_uid',
      daily_active_users: 'daily_active_users',
      daily_active_users_rank: 'daily_active_users_rank',
      deauth_callback_url: 'deauth_callback_url',
      default_share_mode: 'default_share_mode',
      description: 'description',
      financial_id: 'financial_id',
      gdpv4_chrome_custom_tabs_enabled: 'gdpv4_chrome_custom_tabs_enabled',
      gdpv4_enabled: 'gdpv4_enabled',
      gdpv4_nux_content: 'gdpv4_nux_content',
      gdpv4_nux_enabled: 'gdpv4_nux_enabled',
      has_messenger_product: 'has_messenger_product',
      hosting_url: 'hosting_url',
      icon_url: 'icon_url',
      id: 'id',
      ios_bundle_id: 'ios_bundle_id',
      ios_sdk_dialog_flows: 'ios_sdk_dialog_flows',
      ios_sdk_error_categories: 'ios_sdk_error_categories',
      ios_sfvc_attr: 'ios_sfvc_attr',
      ios_supports_native_proxy_auth_flow: 'ios_supports_native_proxy_auth_flow',
      ios_supports_system_auth: 'ios_supports_system_auth',
      ipad_app_store_id: 'ipad_app_store_id',
      iphone_app_store_id: 'iphone_app_store_id',
      is_viewer_admin: 'is_viewer_admin',
      latest_sdk_version: 'latest_sdk_version',
      link: 'link',
      logging_token: 'logging_token',
      login_secret: 'login_secret',
      logo_url: 'logo_url',
      migrations: 'migrations',
      mobile_profile_section_url: 'mobile_profile_section_url',
      mobile_web_url: 'mobile_web_url',
      monthly_active_users: 'monthly_active_users',
      monthly_active_users_rank: 'monthly_active_users_rank',
      name: 'name',
      namespace: 'namespace',
      object_store_urls: 'object_store_urls',
      page_tab_default_name: 'page_tab_default_name',
      page_tab_url: 'page_tab_url',
      photo_url: 'photo_url',
      privacy_policy_url: 'privacy_policy_url',
      profile_section_url: 'profile_section_url',
      property_id: 'property_id',
      real_time_mode_devices: 'real_time_mode_devices',
      restrictions: 'restrictions',
      sdk_update_message: 'sdk_update_message',
      seamless_login: 'seamless_login',
      secure_canvas_url: 'secure_canvas_url',
      secure_page_tab_url: 'secure_page_tab_url',
      server_ip_whitelist: 'server_ip_whitelist',
      smart_login_bookmark_icon_url: 'smart_login_bookmark_icon_url',
      smart_login_menu_icon_url: 'smart_login_menu_icon_url',
      social_discovery: 'social_discovery',
      subcategory: 'subcategory',
      supported_platforms: 'supported_platforms',
      supports_apprequests_fast_app_switch: 'supports_apprequests_fast_app_switch',
      supports_attribution: 'supports_attribution',
      supports_implicit_sdk_logging: 'supports_implicit_sdk_logging',
      suppress_native_ios_gdp: 'suppress_native_ios_gdp',
      terms_of_service_url: 'terms_of_service_url',
      url_scheme_suffix: 'url_scheme_suffix',
      user_support_email: 'user_support_email',
      user_support_url: 'user_support_url',
      website_url: 'website_url',
      weekly_active_users: 'weekly_active_users'
    });
  }

  static get SupportedPlatforms (): Object {
    return Object.freeze({
      web: 'WEB',
      canvas: 'CANVAS',
      mobile_web: 'MOBILE_WEB',
      iphone: 'IPHONE',
      ipad: 'IPAD',
      android: 'ANDROID',
      windows: 'WINDOWS',
      amazon: 'AMAZON',
      supplementary_images: 'SUPPLEMENTARY_IMAGES',
      gameroom: 'GAMEROOM',
      instant_game: 'INSTANT_GAME'
    });
  }
  static get AnPlatforms (): Object {
    return Object.freeze({
      ios: 'IOS',
      android: 'ANDROID',
      mobile_web: 'MOBILE_WEB',
      desktop: 'DESKTOP',
      instant_articles: 'INSTANT_ARTICLES',
      unknown: 'UNKNOWN'
    });
  }
  static get AggregationPeriod (): Object {
    return Object.freeze({
      hour: 'HOUR',
      day: 'DAY',
      total: 'TOTAL'
    });
  }
  static get Breakdowns (): Object {
    return Object.freeze({
      age: 'AGE',
      app: 'APP',
      country: 'COUNTRY',
      delivery_method: 'DELIVERY_METHOD',
      display_format: 'DISPLAY_FORMAT',
      deal: 'DEAL',
      deal_ad: 'DEAL_AD',
      deal_page: 'DEAL_PAGE',
      gender: 'GENDER',
      placement: 'PLACEMENT',
      platform: 'PLATFORM',
      property: 'PROPERTY',
      clicked_view_tag: 'CLICKED_VIEW_TAG',
      fail_reason: 'FAIL_REASON'
    });
  }
  static get Metrics (): Object {
    return Object.freeze({
      fb_ad_network_bidding_request: 'FB_AD_NETWORK_BIDDING_REQUEST',
      fb_ad_network_bidding_response: 'FB_AD_NETWORK_BIDDING_RESPONSE',
      fb_ad_network_bidding_bid_rate: 'FB_AD_NETWORK_BIDDING_BID_RATE',
      fb_ad_network_bidding_win_rate: 'FB_AD_NETWORK_BIDDING_WIN_RATE',
      fb_ad_network_request: 'FB_AD_NETWORK_REQUEST',
      fb_ad_network_filled_request: 'FB_AD_NETWORK_FILLED_REQUEST',
      fb_ad_network_fill_rate: 'FB_AD_NETWORK_FILL_RATE',
      fb_ad_network_imp: 'FB_AD_NETWORK_IMP',
      fb_ad_network_show_rate: 'FB_AD_NETWORK_SHOW_RATE',
      fb_ad_network_click: 'FB_AD_NETWORK_CLICK',
      fb_ad_network_ctr: 'FB_AD_NETWORK_CTR',
      fb_ad_network_bidding_revenue: 'FB_AD_NETWORK_BIDDING_REVENUE',
      fb_ad_network_revenue: 'FB_AD_NETWORK_REVENUE',
      fb_ad_network_cpm: 'FB_AD_NETWORK_CPM',
      fb_ad_network_video_guarantee_revenue: 'FB_AD_NETWORK_VIDEO_GUARANTEE_REVENUE',
      fb_ad_network_video_view: 'FB_AD_NETWORK_VIDEO_VIEW',
      fb_ad_network_video_view_rate: 'FB_AD_NETWORK_VIDEO_VIEW_RATE',
      fb_ad_network_video_mrc: 'FB_AD_NETWORK_VIDEO_MRC',
      fb_ad_network_video_mrc_rate: 'FB_AD_NETWORK_VIDEO_MRC_RATE',
      fb_ad_network_win_rate: 'FB_AD_NETWORK_WIN_RATE',
      fb_ad_network_direct_total_revenue: 'FB_AD_NETWORK_DIRECT_TOTAL_REVENUE',
      fb_ad_network_direct_publisher_bill: 'FB_AD_NETWORK_DIRECT_PUBLISHER_BILL',
      fb_ad_network_fast_click_rate: 'FB_AD_NETWORK_FAST_CLICK_RATE',
      fb_ad_network_fast_return_rate: 'FB_AD_NETWORK_FAST_RETURN_RATE',
      fb_ad_network_click_value_score: 'FB_AD_NETWORK_CLICK_VALUE_SCORE',
      fb_ad_network_fast_click_numerator: 'FB_AD_NETWORK_FAST_CLICK_NUMERATOR',
      fb_ad_network_fast_click_denominator: 'FB_AD_NETWORK_FAST_CLICK_DENOMINATOR',
      fb_ad_network_fast_return_numerator: 'FB_AD_NETWORK_FAST_RETURN_NUMERATOR',
      fb_ad_network_fast_return_denominator: 'FB_AD_NETWORK_FAST_RETURN_DENOMINATOR',
      fb_ad_network_click_value_score_numerator: 'FB_AD_NETWORK_CLICK_VALUE_SCORE_NUMERATOR',
      fb_ad_network_click_value_score_denominator: 'FB_AD_NETWORK_CLICK_VALUE_SCORE_DENOMINATOR',
      fb_ad_network_no_fill: 'FB_AD_NETWORK_NO_FILL',
      fb_ad_network_no_bid: 'FB_AD_NETWORK_NO_BID'
    });
  }
  static get OrderingColumn (): Object {
    return Object.freeze({
      time: 'TIME',
      value: 'VALUE',
      metric: 'METRIC'
    });
  }
  static get OrderingType (): Object {
    return Object.freeze({
      ascending: 'ASCENDING',
      descending: 'DESCENDING'
    });
  }
  static get Platform (): Object {
    return Object.freeze({
      android: 'ANDROID',
      ios: 'IOS'
    });
  }
  static get RequestType (): Object {
    return Object.freeze({
      app_indexing: 'APP_INDEXING',
      plugin: 'PLUGIN',
      button_sampling: 'BUTTON_SAMPLING'
    });
  }
  static get MutationMethod (): Object {
    return Object.freeze({
      replace: 'REPLACE',
      add: 'ADD',
      delete: 'DELETE'
    });
  }
  static get ScoreType (): Object {
    return Object.freeze({
      custom: 'CUSTOM',
      numeric: 'NUMERIC',
      time: 'TIME'
    });
  }
  static get SortOrder (): Object {
    return Object.freeze({
      higher_is_better: 'HIGHER_IS_BETTER',
      lower_is_better: 'LOWER_IS_BETTER'
    });
  }
  static get Role (): Object {
    return Object.freeze({
      administrators: 'administrators',
      developers: 'developers',
      testers: 'testers',
      insights_users: 'insights users'
    });
  }

  createLocalServiceBookingTest (fields, params): AbstractObject {
    return this.createEdge(
      '/LocalServiceBookingTest',
      fields,
      params

    );
  }

  deleteAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/accounts',
      params
    );
  }

  getAccounts (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/accounts'
    );
  }

  createAccount (fields, params): AbstractObject {
    return this.createEdge(
      '/accounts',
      fields,
      params

    );
  }

  getAchievements (fields, params, fetchFirstPage = true): OpenGraphObject {
    return this.getEdge(
      OpenGraphObject,
      fields,
      params,
      fetchFirstPage,
      '/achievements'
    );
  }

  createActivity (fields, params): AbstractObject {
    return this.createEdge(
      '/activities',
      fields,
      params

    );
  }

  getAdNetworkAnalytics (fields, params, fetchFirstPage = true): AdNetworkAnalyticsSyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields, params): Application {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      Application
    );
  }

  getAdNetworkAnalyticsResults (fields, params, fetchFirstPage = true): AdNetworkAnalyticsAsyncQueryResult {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
    );
  }

  getAdsAppInsights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ads_app_insights'
    );
  }

  getAdsAppInsightsDimensions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ads_app_insights_dimensions'
    );
  }

  getAgencies (fields, params, fetchFirstPage = true): Business {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  getAndroidDialogConfigs (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/android_dialog_configs'
    );
  }

  getAppEventTypes (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/app_event_types'
    );
  }

  createAppIndexing (fields, params): Application {
    return this.createEdge(
      '/app_indexing',
      fields,
      params,
      Application
    );
  }

  createAppIndexingSession (fields, params): Application {
    return this.createEdge(
      '/app_indexing_session',
      fields,
      params,
      Application
    );
  }

  getAppInsights (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/app_insights'
    );
  }

  getAppInstalledGroups (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/app_installed_groups'
    );
  }

  createAppLinkHost (fields, params): AbstractObject {
    return this.createEdge(
      '/app_link_hosts',
      fields,
      params

    );
  }

  createAppPushDeviceToken (fields, params): Application {
    return this.createEdge(
      '/app_push_device_token',
      fields,
      params,
      Application
    );
  }

  getAppAssets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/appassets'
    );
  }

  createAsset (fields, params): Application {
    return this.createEdge(
      '/assets',
      fields,
      params,
      Application
    );
  }

  getAudiences (fields, params, fetchFirstPage = true): CustomAudience {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
    );
  }

  deleteAuthorizedAdAccounts (params): AbstractObject {
    return super.deleteEdge(
      '/authorized_adaccounts',
      params
    );
  }

  getAuthorizedAdAccounts (fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/authorized_adaccounts'
    );
  }

  createAuthorizedAdAccount (fields, params): Application {
    return this.createEdge(
      '/authorized_adaccounts',
      fields,
      params,
      Application
    );
  }

  deleteBanned (params): AbstractObject {
    return super.deleteEdge(
      '/banned',
      params
    );
  }

  getBanned (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/banned'
    );
  }

  createBanned (fields, params): User {
    return this.createEdge(
      '/banned',
      fields,
      params,
      User
    );
  }

  getButtonAutoDetectionDeviceSelection (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/button_auto_detection_device_selection'
    );
  }

  createButtonIndexing (fields, params): Application {
    return this.createEdge(
      '/button_indexing',
      fields,
      params,
      Application
    );
  }

  createCodelessEventBinding (fields, params): Application {
    return this.createEdge(
      '/codeless_event_bindings',
      fields,
      params,
      Application
    );
  }

  createCodelessEventMapping (fields, params): Application {
    return this.createEdge(
      '/codeless_event_mappings',
      fields,
      params,
      Application
    );
  }

  getConnections (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/connections'
    );
  }

  getCustomAudienceThirdPartyId (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/custom_audience_third_party_id'
    );
  }

  getDaChecks (fields, params, fetchFirstPage = true): DACheck {
    return this.getEdge(
      DACheck,
      fields,
      params,
      fetchFirstPage,
      '/da_checks'
    );
  }

  getDirectDeals (fields, params, fetchFirstPage = true): DirectDeal {
    return this.getEdge(
      DirectDeal,
      fields,
      params,
      fetchFirstPage,
      '/direct_deals'
    );
  }

  getEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getFoodDrinkOrders (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/food_drink_orders'
    );
  }

  createFoodDrinkOrder (fields, params): AbstractObject {
    return this.createEdge(
      '/food_drink_orders',
      fields,
      params

    );
  }

  getFullAppIndexingInfos (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/full_app_indexing_infos'
    );
  }

  createFullAppIndexingInfo (fields, params): AbstractObject {
    return this.createEdge(
      '/full_app_indexing_infos',
      fields,
      params

    );
  }

  getInsightsEventLabels (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/insights_event_labels'
    );
  }

  getIosDialogConfigs (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ios_dialog_configs'
    );
  }

  createLeaderboardsCreate (fields, params): Application {
    return this.createEdge(
      '/leaderboards_create',
      fields,
      params,
      Application
    );
  }

  createLeaderboardsDeleteEntry (fields, params): Application {
    return this.createEdge(
      '/leaderboards_delete_entry',
      fields,
      params,
      Application
    );
  }

  createLeaderboardsReset (fields, params): Application {
    return this.createEdge(
      '/leaderboards_reset',
      fields,
      params,
      Application
    );
  }

  createLeaderboardsSetScore (fields, params): Application {
    return this.createEdge(
      '/leaderboards_set_score',
      fields,
      params,
      Application
    );
  }

  getLocalServiceBookingConfig (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/local_service_booking_config'
    );
  }

  createLocalServiceBookingConfig (fields, params): AbstractObject {
    return this.createEdge(
      '/local_service_booking_config',
      fields,
      params

    );
  }

  createMachine (fields, params): AbstractObject {
    return this.createEdge(
      '/machines',
      fields,
      params

    );
  }

  createMmpAuditing (fields, params): AbstractObject {
    return this.createEdge(
      '/mmp_auditing',
      fields,
      params

    );
  }

  getMobileSdkGk (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/mobile_sdk_gk'
    );
  }

  getMoodsForApplication (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/moods_for_application'
    );
  }

  getObjectTypes (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/object_types'
    );
  }

  getObjects (fields, params, fetchFirstPage = true): OpenGraphObject {
    return this.getEdge(
      OpenGraphObject,
      fields,
      params,
      fetchFirstPage,
      '/objects'
    );
  }

  createObject (fields, params): OpenGraphObject {
    return this.createEdge(
      '/objects',
      fields,
      params,
      OpenGraphObject
    );
  }

  createOccludesPopup (fields, params): AbstractObject {
    return this.createEdge(
      '/occludespopups',
      fields,
      params

    );
  }

  getOzoneRelease (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ozone_release'
    );
  }

  createOzoneRelease (fields, params): AbstractObject {
    return this.createEdge(
      '/ozone_release',
      fields,
      params

    );
  }

  deletePaymentCurrencies (params): AbstractObject {
    return super.deleteEdge(
      '/payment_currencies',
      params
    );
  }

  createPaymentCurrency (fields, params): Application {
    return this.createEdge(
      '/payment_currencies',
      fields,
      params,
      Application
    );
  }

  deletePaymentsTestUsers (params): AbstractObject {
    return super.deleteEdge(
      '/payments_test_users',
      params
    );
  }

  getPaymentsTestUsers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/payments_test_users'
    );
  }

  createPaymentsTestUser (fields, params): Application {
    return this.createEdge(
      '/payments_test_users',
      fields,
      params,
      Application
    );
  }

  getPermissions (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
    );
  }

  createPhoto (fields, params): Photo {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getPixelHelperDebuggingInfo (fields, params, fetchFirstPage = true): ExternalEventSourcePixelHelperDebuggingInfo {
    return this.getEdge(
      ExternalEventSourcePixelHelperDebuggingInfo,
      fields,
      params,
      fetchFirstPage,
      '/pixel_helper_debugging_info'
    );
  }

  getProducts (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  getPurchases (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/purchases'
    );
  }

  getRecentDebuggings (fields, params, fetchFirstPage = true): ExternalEventSourceDebugging {
    return this.getEdge(
      ExternalEventSourceDebugging,
      fields,
      params,
      fetchFirstPage,
      '/recent_debuggings'
    );
  }

  deleteRoles (params): AbstractObject {
    return super.deleteEdge(
      '/roles',
      params
    );
  }

  getRoles (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  createRole (fields, params): Application {
    return this.createEdge(
      '/roles',
      fields,
      params,
      Application
    );
  }

  createStagingResource (fields, params): Application {
    return this.createEdge(
      '/stagingresources',
      fields,
      params,
      Application
    );
  }

  getSubscribedDomains (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_domains'
    );
  }

  createSubscribedDomain (fields, params): Application {
    return this.createEdge(
      '/subscribed_domains',
      fields,
      params,
      Application
    );
  }

  getSubscribedDomainsPhishing (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_domains_phishing'
    );
  }

  createSubscribedDomainsPhishing (fields, params): Application {
    return this.createEdge(
      '/subscribed_domains_phishing',
      fields,
      params,
      Application
    );
  }

  deleteSubscriptions (params): AbstractObject {
    return super.deleteEdge(
      '/subscriptions',
      params
    );
  }

  createSubscription (fields, params): AbstractObject {
    return this.createEdge(
      '/subscriptions',
      fields,
      params

    );
  }

  createSubscriptionsSample (fields, params): Application {
    return this.createEdge(
      '/subscriptions_sample',
      fields,
      params,
      Application
    );
  }

  createUpload (fields, params): AbstractObject {
    return this.createEdge(
      '/uploads',
      fields,
      params

    );
  }

  createUserProperty (fields, params): AbstractObject {
    return this.createEdge(
      '/user_properties',
      fields,
      params

    );
  }

  get (fields, params): Application {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Application {
    return super.update(
      params
    );
  }
}
