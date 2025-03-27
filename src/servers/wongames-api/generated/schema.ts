// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    JSON: any,
    DateTime: any,
    Date: any,
    Long: any,
    String: string,
    Int: number,
    ID: string,
    Boolean: boolean,
    Float: number,
    I18NLocaleCode: any,
}

export interface Pagination {
    total: Scalars['Int']
    page: Scalars['Int']
    pageSize: Scalars['Int']
    pageCount: Scalars['Int']
    __typename: 'Pagination'
}

export interface DeleteMutationResponse {
    documentId: Scalars['ID']
    __typename: 'DeleteMutationResponse'
}

export type PublicationStatus = 'DRAFT' | 'PUBLISHED'

export interface ComponentPageSection {
    id: Scalars['ID']
    title: (Scalars['String'] | null)
    highlight: (ComponentPageHighlight | null)
    __typename: 'ComponentPageSection'
}

export type ENUM_COMPONENTPAGERIBBON_COLOR = 'primary' | 'secondary'

export type ENUM_COMPONENTPAGERIBBON_SIZE = 'small' | 'normal'

export interface ComponentPageRibbon {
    id: Scalars['ID']
    text: (Scalars['String'] | null)
    color: (ENUM_COMPONENTPAGERIBBON_COLOR | null)
    size: (ENUM_COMPONENTPAGERIBBON_SIZE | null)
    __typename: 'ComponentPageRibbon'
}

export interface ComponentPagePopularGames {
    id: Scalars['ID']
    title: (Scalars['String'] | null)
    highlight: (ComponentPageHighlight | null)
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    __typename: 'ComponentPagePopularGames'
}

export type ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT = 'right' | 'left'

export interface ComponentPageHighlight {
    id: Scalars['ID']
    title: Scalars['String']
    subtitle: Scalars['String']
    background: UploadFile
    floatImage: (UploadFile | null)
    buttonLabel: Scalars['String']
    buttonLink: Scalars['String']
    alignment: (ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null)
    __typename: 'ComponentPageHighlight'
}

export interface ComponentPageButton {
    id: Scalars['ID']
    label: Scalars['String']
    link: Scalars['String']
    __typename: 'ComponentPageButton'
}

export interface UploadFile {
    documentId: Scalars['ID']
    name: Scalars['String']
    alternativeText: (Scalars['String'] | null)
    caption: (Scalars['String'] | null)
    width: (Scalars['Int'] | null)
    height: (Scalars['Int'] | null)
    formats: (Scalars['JSON'] | null)
    hash: Scalars['String']
    ext: (Scalars['String'] | null)
    mime: Scalars['String']
    size: Scalars['Float']
    url: Scalars['String']
    previewUrl: (Scalars['String'] | null)
    provider: Scalars['String']
    provider_metadata: (Scalars['JSON'] | null)
    related: ((GenericMorph | null)[] | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'UploadFile'
}

export interface UploadFileEntityResponseCollection {
    nodes: UploadFile[]
    pageInfo: Pagination
    __typename: 'UploadFileEntityResponseCollection'
}

export interface UploadFileRelationResponseCollection {
    nodes: UploadFile[]
    __typename: 'UploadFileRelationResponseCollection'
}

export interface I18NLocale {
    documentId: Scalars['ID']
    name: (Scalars['String'] | null)
    code: (Scalars['String'] | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'I18NLocale'
}

export interface I18NLocaleEntityResponseCollection {
    nodes: I18NLocale[]
    pageInfo: Pagination
    __typename: 'I18NLocaleEntityResponseCollection'
}

export interface ReviewWorkflowsWorkflow {
    documentId: Scalars['ID']
    name: Scalars['String']
    stages_connection: (ReviewWorkflowsWorkflowStageRelationResponseCollection | null)
    stages: (ReviewWorkflowsWorkflowStage | null)[]
    stageRequiredToPublish: (ReviewWorkflowsWorkflowStage | null)
    contentTypes: Scalars['JSON']
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'ReviewWorkflowsWorkflow'
}

export interface ReviewWorkflowsWorkflowEntityResponseCollection {
    nodes: ReviewWorkflowsWorkflow[]
    pageInfo: Pagination
    __typename: 'ReviewWorkflowsWorkflowEntityResponseCollection'
}

export interface ReviewWorkflowsWorkflowStage {
    documentId: Scalars['ID']
    name: (Scalars['String'] | null)
    color: (Scalars['String'] | null)
    workflow: (ReviewWorkflowsWorkflow | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'ReviewWorkflowsWorkflowStage'
}

export interface ReviewWorkflowsWorkflowStageEntityResponseCollection {
    nodes: ReviewWorkflowsWorkflowStage[]
    pageInfo: Pagination
    __typename: 'ReviewWorkflowsWorkflowStageEntityResponseCollection'
}

export interface ReviewWorkflowsWorkflowStageRelationResponseCollection {
    nodes: ReviewWorkflowsWorkflowStage[]
    __typename: 'ReviewWorkflowsWorkflowStageRelationResponseCollection'
}

export interface UsersPermissionsPermission {
    documentId: Scalars['ID']
    action: Scalars['String']
    role: (UsersPermissionsRole | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'UsersPermissionsPermission'
}

export interface UsersPermissionsPermissionRelationResponseCollection {
    nodes: UsersPermissionsPermission[]
    __typename: 'UsersPermissionsPermissionRelationResponseCollection'
}

export interface UsersPermissionsRole {
    documentId: Scalars['ID']
    name: Scalars['String']
    description: (Scalars['String'] | null)
    type: (Scalars['String'] | null)
    permissions_connection: (UsersPermissionsPermissionRelationResponseCollection | null)
    permissions: (UsersPermissionsPermission | null)[]
    users_connection: (UsersPermissionsUserRelationResponseCollection | null)
    users: (UsersPermissionsUser | null)[]
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'UsersPermissionsRole'
}

export interface UsersPermissionsRoleEntityResponseCollection {
    nodes: UsersPermissionsRole[]
    pageInfo: Pagination
    __typename: 'UsersPermissionsRoleEntityResponseCollection'
}

export interface UsersPermissionsUser {
    documentId: Scalars['ID']
    username: Scalars['String']
    email: Scalars['String']
    provider: (Scalars['String'] | null)
    confirmed: (Scalars['Boolean'] | null)
    blocked: (Scalars['Boolean'] | null)
    role: (UsersPermissionsRole | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'UsersPermissionsUser'
}

export interface UsersPermissionsUserEntityResponse {
    data: (UsersPermissionsUser | null)
    __typename: 'UsersPermissionsUserEntityResponse'
}

export interface UsersPermissionsUserEntityResponseCollection {
    nodes: UsersPermissionsUser[]
    pageInfo: Pagination
    __typename: 'UsersPermissionsUserEntityResponseCollection'
}

export interface UsersPermissionsUserRelationResponseCollection {
    nodes: UsersPermissionsUser[]
    __typename: 'UsersPermissionsUserRelationResponseCollection'
}

export interface Banner {
    documentId: Scalars['ID']
    image: UploadFile
    title: Scalars['String']
    subtitle: Scalars['String']
    button: (ComponentPageButton | null)
    ribbon: (ComponentPageRibbon | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Banner'
}

export interface BannerEntityResponseCollection {
    nodes: Banner[]
    pageInfo: Pagination
    __typename: 'BannerEntityResponseCollection'
}

export interface Category {
    documentId: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Category'
}

export interface CategoryEntityResponseCollection {
    nodes: Category[]
    pageInfo: Pagination
    __typename: 'CategoryEntityResponseCollection'
}

export interface CategoryRelationResponseCollection {
    nodes: Category[]
    __typename: 'CategoryRelationResponseCollection'
}

export interface Developer {
    documentId: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Developer'
}

export interface DeveloperEntityResponseCollection {
    nodes: Developer[]
    pageInfo: Pagination
    __typename: 'DeveloperEntityResponseCollection'
}

export interface DeveloperRelationResponseCollection {
    nodes: Developer[]
    __typename: 'DeveloperRelationResponseCollection'
}

export type ENUM_GAME_RATING = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export interface Game {
    documentId: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    short_description: Scalars['String']
    description: (Scalars['String'] | null)
    price: Scalars['Float']
    release_date: (Scalars['Date'] | null)
    rating: (ENUM_GAME_RATING | null)
    cover: (UploadFile | null)
    gallery_connection: (UploadFileRelationResponseCollection | null)
    gallery: (UploadFile | null)[]
    categories_connection: (CategoryRelationResponseCollection | null)
    categories: (Category | null)[]
    developers_connection: (DeveloperRelationResponseCollection | null)
    developers: (Developer | null)[]
    platforms_connection: (PlatformRelationResponseCollection | null)
    platforms: (Platform | null)[]
    publisher: (Publisher | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    locale: (Scalars['String'] | null)
    localizations_connection: (GameRelationResponseCollection | null)
    localizations: (Game | null)[]
    __typename: 'Game'
}

export interface GameEntityResponseCollection {
    nodes: Game[]
    pageInfo: Pagination
    __typename: 'GameEntityResponseCollection'
}

export interface GameRelationResponseCollection {
    nodes: Game[]
    __typename: 'GameRelationResponseCollection'
}

export interface Home {
    documentId: Scalars['ID']
    newGames: (ComponentPageSection | null)
    upcomingGames: (ComponentPageSection | null)
    freeGames: (ComponentPageSection | null)
    popularGames: (ComponentPagePopularGames | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Home'
}

export interface Order {
    documentId: Scalars['ID']
    user: (UsersPermissionsUser | null)
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    amount_in_cents: Scalars['Long']
    payment_intent_id: (Scalars['String'] | null)
    card_brand: (Scalars['String'] | null)
    card_last4: (Scalars['String'] | null)
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Order'
}

export interface OrderEntityResponseCollection {
    nodes: Order[]
    pageInfo: Pagination
    __typename: 'OrderEntityResponseCollection'
}

export interface Platform {
    documentId: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Platform'
}

export interface PlatformEntityResponseCollection {
    nodes: Platform[]
    pageInfo: Pagination
    __typename: 'PlatformEntityResponseCollection'
}

export interface PlatformRelationResponseCollection {
    nodes: Platform[]
    __typename: 'PlatformRelationResponseCollection'
}

export interface Publisher {
    documentId: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Publisher'
}

export interface PublisherEntityResponseCollection {
    nodes: Publisher[]
    pageInfo: Pagination
    __typename: 'PublisherEntityResponseCollection'
}

export interface Recommended {
    documentId: Scalars['ID']
    section: ComponentPagePopularGames
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Recommended'
}

export interface Wishlist {
    documentId: Scalars['ID']
    user: (UsersPermissionsUser | null)
    games_connection: (GameRelationResponseCollection | null)
    games: (Game | null)[]
    createdAt: (Scalars['DateTime'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    publishedAt: (Scalars['DateTime'] | null)
    __typename: 'Wishlist'
}

export interface WishlistEntityResponse {
    data: (Wishlist | null)
    __typename: 'WishlistEntityResponse'
}

export interface WishlistEntityResponseCollection {
    nodes: Wishlist[]
    pageInfo: Pagination
    __typename: 'WishlistEntityResponseCollection'
}

export type GenericMorph = (ComponentPageSection | ComponentPageRibbon | ComponentPagePopularGames | ComponentPageHighlight | ComponentPageButton | UploadFile | I18NLocale | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Banner | Category | Developer | Game | Home | Order | Platform | Publisher | Recommended | Wishlist) & { __isUnion?: true }

export interface UsersPermissionsMe {
    id: Scalars['ID']
    documentId: Scalars['ID']
    username: Scalars['String']
    email: (Scalars['String'] | null)
    confirmed: (Scalars['Boolean'] | null)
    blocked: (Scalars['Boolean'] | null)
    role: (UsersPermissionsMeRole | null)
    __typename: 'UsersPermissionsMe'
}

export interface UsersPermissionsMeRole {
    id: Scalars['ID']
    name: Scalars['String']
    description: (Scalars['String'] | null)
    type: (Scalars['String'] | null)
    __typename: 'UsersPermissionsMeRole'
}

export interface UsersPermissionsPasswordPayload {
    ok: Scalars['Boolean']
    __typename: 'UsersPermissionsPasswordPayload'
}

export interface UsersPermissionsLoginPayload {
    jwt: (Scalars['String'] | null)
    user: UsersPermissionsMe
    __typename: 'UsersPermissionsLoginPayload'
}

export interface UsersPermissionsCreateRolePayload {
    ok: Scalars['Boolean']
    __typename: 'UsersPermissionsCreateRolePayload'
}

export interface UsersPermissionsUpdateRolePayload {
    ok: Scalars['Boolean']
    __typename: 'UsersPermissionsUpdateRolePayload'
}

export interface UsersPermissionsDeleteRolePayload {
    ok: Scalars['Boolean']
    __typename: 'UsersPermissionsDeleteRolePayload'
}

export interface Query {
    uploadFile: (UploadFile | null)
    uploadFiles_connection: (UploadFileEntityResponseCollection | null)
    uploadFiles: (UploadFile | null)[]
    i18NLocale: (I18NLocale | null)
    i18NLocales_connection: (I18NLocaleEntityResponseCollection | null)
    i18NLocales: (I18NLocale | null)[]
    reviewWorkflowsWorkflow: (ReviewWorkflowsWorkflow | null)
    reviewWorkflowsWorkflows_connection: (ReviewWorkflowsWorkflowEntityResponseCollection | null)
    reviewWorkflowsWorkflows: (ReviewWorkflowsWorkflow | null)[]
    reviewWorkflowsWorkflowStage: (ReviewWorkflowsWorkflowStage | null)
    reviewWorkflowsWorkflowStages_connection: (ReviewWorkflowsWorkflowStageEntityResponseCollection | null)
    reviewWorkflowsWorkflowStages: (ReviewWorkflowsWorkflowStage | null)[]
    usersPermissionsRole: (UsersPermissionsRole | null)
    usersPermissionsRoles_connection: (UsersPermissionsRoleEntityResponseCollection | null)
    usersPermissionsRoles: (UsersPermissionsRole | null)[]
    usersPermissionsUser: (UsersPermissionsUser | null)
    usersPermissionsUsers_connection: (UsersPermissionsUserEntityResponseCollection | null)
    usersPermissionsUsers: (UsersPermissionsUser | null)[]
    banner: (Banner | null)
    banners_connection: (BannerEntityResponseCollection | null)
    banners: (Banner | null)[]
    category: (Category | null)
    categories_connection: (CategoryEntityResponseCollection | null)
    categories: (Category | null)[]
    developer: (Developer | null)
    developers_connection: (DeveloperEntityResponseCollection | null)
    developers: (Developer | null)[]
    game: (Game | null)
    games_connection: (GameEntityResponseCollection | null)
    games: (Game | null)[]
    home: (Home | null)
    order: (Order | null)
    orders_connection: (OrderEntityResponseCollection | null)
    orders: (Order | null)[]
    platform: (Platform | null)
    platforms_connection: (PlatformEntityResponseCollection | null)
    platforms: (Platform | null)[]
    publisher: (Publisher | null)
    publishers_connection: (PublisherEntityResponseCollection | null)
    publishers: (Publisher | null)[]
    recommended: (Recommended | null)
    wishlist: (Wishlist | null)
    wishlists_connection: (WishlistEntityResponseCollection | null)
    wishlists: (Wishlist | null)[]
    me: (UsersPermissionsMe | null)
    myOrders: (OrderEntityResponseCollection | null)
    __typename: 'Query'
}

export interface Mutation {
    createReviewWorkflowsWorkflow: (ReviewWorkflowsWorkflow | null)
    updateReviewWorkflowsWorkflow: (ReviewWorkflowsWorkflow | null)
    deleteReviewWorkflowsWorkflow: (DeleteMutationResponse | null)
    createReviewWorkflowsWorkflowStage: (ReviewWorkflowsWorkflowStage | null)
    updateReviewWorkflowsWorkflowStage: (ReviewWorkflowsWorkflowStage | null)
    deleteReviewWorkflowsWorkflowStage: (DeleteMutationResponse | null)
    createBanner: (Banner | null)
    updateBanner: (Banner | null)
    deleteBanner: (DeleteMutationResponse | null)
    createCategory: (Category | null)
    updateCategory: (Category | null)
    deleteCategory: (DeleteMutationResponse | null)
    createDeveloper: (Developer | null)
    updateDeveloper: (Developer | null)
    deleteDeveloper: (DeleteMutationResponse | null)
    createGame: (Game | null)
    updateGame: (Game | null)
    deleteGame: (DeleteMutationResponse | null)
    updateHome: (Home | null)
    deleteHome: (DeleteMutationResponse | null)
    createOrder: (Order | null)
    updateOrder: (Order | null)
    deleteOrder: (DeleteMutationResponse | null)
    createPlatform: (Platform | null)
    updatePlatform: (Platform | null)
    deletePlatform: (DeleteMutationResponse | null)
    createPublisher: (Publisher | null)
    updatePublisher: (Publisher | null)
    deletePublisher: (DeleteMutationResponse | null)
    updateRecommended: (Recommended | null)
    deleteRecommended: (DeleteMutationResponse | null)
    createWishlist: (WishlistEntityResponse | null)
    updateWishlist: (WishlistEntityResponse | null)
    deleteWishlist: (DeleteMutationResponse | null)
    updateUploadFile: UploadFile
    deleteUploadFile: (UploadFile | null)
    /** Create a new role */
    createUsersPermissionsRole: (UsersPermissionsCreateRolePayload | null)
    /** Update an existing role */
    updateUsersPermissionsRole: (UsersPermissionsUpdateRolePayload | null)
    /** Delete an existing role */
    deleteUsersPermissionsRole: (UsersPermissionsDeleteRolePayload | null)
    /** Create a new user */
    createUsersPermissionsUser: UsersPermissionsUserEntityResponse
    /** Update an existing user */
    updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
    /** Delete an existing user */
    deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
    login: UsersPermissionsLoginPayload
    /** Register a user */
    register: UsersPermissionsLoginPayload
    /** Request a reset password token */
    forgotPassword: (UsersPermissionsPasswordPayload | null)
    /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
    resetPassword: (UsersPermissionsLoginPayload | null)
    /** Change user password. Confirm with the current password. */
    changePassword: (UsersPermissionsLoginPayload | null)
    /** Confirm an email users email address */
    emailConfirmation: (UsersPermissionsLoginPayload | null)
    __typename: 'Mutation'
}

export interface PaginationGenqlSelection{
    total?: boolean | number
    page?: boolean | number
    pageSize?: boolean | number
    pageCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteMutationResponseGenqlSelection{
    documentId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IDFilterInput {and?: ((Scalars['ID'] | null)[] | null),or?: ((Scalars['ID'] | null)[] | null),not?: (IDFilterInput | null),eq?: (Scalars['ID'] | null),eqi?: (Scalars['ID'] | null),ne?: (Scalars['ID'] | null),nei?: (Scalars['ID'] | null),startsWith?: (Scalars['ID'] | null),endsWith?: (Scalars['ID'] | null),contains?: (Scalars['ID'] | null),notContains?: (Scalars['ID'] | null),containsi?: (Scalars['ID'] | null),notContainsi?: (Scalars['ID'] | null),gt?: (Scalars['ID'] | null),gte?: (Scalars['ID'] | null),lt?: (Scalars['ID'] | null),lte?: (Scalars['ID'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['ID'] | null)[] | null),notIn?: ((Scalars['ID'] | null)[] | null),between?: ((Scalars['ID'] | null)[] | null)}

export interface BooleanFilterInput {and?: ((Scalars['Boolean'] | null)[] | null),or?: ((Scalars['Boolean'] | null)[] | null),not?: (BooleanFilterInput | null),eq?: (Scalars['Boolean'] | null),eqi?: (Scalars['Boolean'] | null),ne?: (Scalars['Boolean'] | null),nei?: (Scalars['Boolean'] | null),startsWith?: (Scalars['Boolean'] | null),endsWith?: (Scalars['Boolean'] | null),contains?: (Scalars['Boolean'] | null),notContains?: (Scalars['Boolean'] | null),containsi?: (Scalars['Boolean'] | null),notContainsi?: (Scalars['Boolean'] | null),gt?: (Scalars['Boolean'] | null),gte?: (Scalars['Boolean'] | null),lt?: (Scalars['Boolean'] | null),lte?: (Scalars['Boolean'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['Boolean'] | null)[] | null),notIn?: ((Scalars['Boolean'] | null)[] | null),between?: ((Scalars['Boolean'] | null)[] | null)}

export interface StringFilterInput {and?: ((Scalars['String'] | null)[] | null),or?: ((Scalars['String'] | null)[] | null),not?: (StringFilterInput | null),eq?: (Scalars['String'] | null),eqi?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),nei?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),contains?: (Scalars['String'] | null),notContains?: (Scalars['String'] | null),containsi?: (Scalars['String'] | null),notContainsi?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['String'] | null)[] | null),notIn?: ((Scalars['String'] | null)[] | null),between?: ((Scalars['String'] | null)[] | null)}

export interface IntFilterInput {and?: ((Scalars['Int'] | null)[] | null),or?: ((Scalars['Int'] | null)[] | null),not?: (IntFilterInput | null),eq?: (Scalars['Int'] | null),eqi?: (Scalars['Int'] | null),ne?: (Scalars['Int'] | null),nei?: (Scalars['Int'] | null),startsWith?: (Scalars['Int'] | null),endsWith?: (Scalars['Int'] | null),contains?: (Scalars['Int'] | null),notContains?: (Scalars['Int'] | null),containsi?: (Scalars['Int'] | null),notContainsi?: (Scalars['Int'] | null),gt?: (Scalars['Int'] | null),gte?: (Scalars['Int'] | null),lt?: (Scalars['Int'] | null),lte?: (Scalars['Int'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['Int'] | null)[] | null),notIn?: ((Scalars['Int'] | null)[] | null),between?: ((Scalars['Int'] | null)[] | null)}

export interface LongFilterInput {and?: ((Scalars['Long'] | null)[] | null),or?: ((Scalars['Long'] | null)[] | null),not?: (LongFilterInput | null),eq?: (Scalars['Long'] | null),eqi?: (Scalars['Long'] | null),ne?: (Scalars['Long'] | null),nei?: (Scalars['Long'] | null),startsWith?: (Scalars['Long'] | null),endsWith?: (Scalars['Long'] | null),contains?: (Scalars['Long'] | null),notContains?: (Scalars['Long'] | null),containsi?: (Scalars['Long'] | null),notContainsi?: (Scalars['Long'] | null),gt?: (Scalars['Long'] | null),gte?: (Scalars['Long'] | null),lt?: (Scalars['Long'] | null),lte?: (Scalars['Long'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['Long'] | null)[] | null),notIn?: ((Scalars['Long'] | null)[] | null),between?: ((Scalars['Long'] | null)[] | null)}

export interface FloatFilterInput {and?: ((Scalars['Float'] | null)[] | null),or?: ((Scalars['Float'] | null)[] | null),not?: (FloatFilterInput | null),eq?: (Scalars['Float'] | null),eqi?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),nei?: (Scalars['Float'] | null),startsWith?: (Scalars['Float'] | null),endsWith?: (Scalars['Float'] | null),contains?: (Scalars['Float'] | null),notContains?: (Scalars['Float'] | null),containsi?: (Scalars['Float'] | null),notContainsi?: (Scalars['Float'] | null),gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['Float'] | null)[] | null),notIn?: ((Scalars['Float'] | null)[] | null),between?: ((Scalars['Float'] | null)[] | null)}

export interface DateFilterInput {and?: ((Scalars['Date'] | null)[] | null),or?: ((Scalars['Date'] | null)[] | null),not?: (DateFilterInput | null),eq?: (Scalars['Date'] | null),eqi?: (Scalars['Date'] | null),ne?: (Scalars['Date'] | null),nei?: (Scalars['Date'] | null),startsWith?: (Scalars['Date'] | null),endsWith?: (Scalars['Date'] | null),contains?: (Scalars['Date'] | null),notContains?: (Scalars['Date'] | null),containsi?: (Scalars['Date'] | null),notContainsi?: (Scalars['Date'] | null),gt?: (Scalars['Date'] | null),gte?: (Scalars['Date'] | null),lt?: (Scalars['Date'] | null),lte?: (Scalars['Date'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['Date'] | null)[] | null),notIn?: ((Scalars['Date'] | null)[] | null),between?: ((Scalars['Date'] | null)[] | null)}

export interface DateTimeFilterInput {and?: ((Scalars['DateTime'] | null)[] | null),or?: ((Scalars['DateTime'] | null)[] | null),not?: (DateTimeFilterInput | null),eq?: (Scalars['DateTime'] | null),eqi?: (Scalars['DateTime'] | null),ne?: (Scalars['DateTime'] | null),nei?: (Scalars['DateTime'] | null),startsWith?: (Scalars['DateTime'] | null),endsWith?: (Scalars['DateTime'] | null),contains?: (Scalars['DateTime'] | null),notContains?: (Scalars['DateTime'] | null),containsi?: (Scalars['DateTime'] | null),notContainsi?: (Scalars['DateTime'] | null),gt?: (Scalars['DateTime'] | null),gte?: (Scalars['DateTime'] | null),lt?: (Scalars['DateTime'] | null),lte?: (Scalars['DateTime'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['DateTime'] | null)[] | null),notIn?: ((Scalars['DateTime'] | null)[] | null),between?: ((Scalars['DateTime'] | null)[] | null)}

export interface JSONFilterInput {and?: ((Scalars['JSON'] | null)[] | null),or?: ((Scalars['JSON'] | null)[] | null),not?: (JSONFilterInput | null),eq?: (Scalars['JSON'] | null),eqi?: (Scalars['JSON'] | null),ne?: (Scalars['JSON'] | null),nei?: (Scalars['JSON'] | null),startsWith?: (Scalars['JSON'] | null),endsWith?: (Scalars['JSON'] | null),contains?: (Scalars['JSON'] | null),notContains?: (Scalars['JSON'] | null),containsi?: (Scalars['JSON'] | null),notContainsi?: (Scalars['JSON'] | null),gt?: (Scalars['JSON'] | null),gte?: (Scalars['JSON'] | null),lt?: (Scalars['JSON'] | null),lte?: (Scalars['JSON'] | null),null?: (Scalars['Boolean'] | null),notNull?: (Scalars['Boolean'] | null),in?: ((Scalars['JSON'] | null)[] | null),notIn?: ((Scalars['JSON'] | null)[] | null),between?: ((Scalars['JSON'] | null)[] | null)}

export interface ComponentPageSectionInput {id?: (Scalars['ID'] | null),title?: (Scalars['String'] | null),highlight?: (ComponentPageHighlightInput | null)}

export interface ComponentPageSectionGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    highlight?: ComponentPageHighlightGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComponentPageRibbonFiltersInput {text?: (StringFilterInput | null),color?: (StringFilterInput | null),size?: (StringFilterInput | null),and?: ((ComponentPageRibbonFiltersInput | null)[] | null),or?: ((ComponentPageRibbonFiltersInput | null)[] | null),not?: (ComponentPageRibbonFiltersInput | null)}

export interface ComponentPageRibbonInput {id?: (Scalars['ID'] | null),text?: (Scalars['String'] | null),color?: (ENUM_COMPONENTPAGERIBBON_COLOR | null),size?: (ENUM_COMPONENTPAGERIBBON_SIZE | null)}

export interface ComponentPageRibbonGenqlSelection{
    id?: boolean | number
    text?: boolean | number
    color?: boolean | number
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComponentPagePopularGamesInput {id?: (Scalars['ID'] | null),title?: (Scalars['String'] | null),highlight?: (ComponentPageHighlightInput | null),games?: ((Scalars['ID'] | null)[] | null)}

export interface ComponentPagePopularGamesGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    highlight?: ComponentPageHighlightGenqlSelection
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComponentPageHighlightInput {id?: (Scalars['ID'] | null),title?: (Scalars['String'] | null),subtitle?: (Scalars['String'] | null),background?: (Scalars['ID'] | null),floatImage?: (Scalars['ID'] | null),buttonLabel?: (Scalars['String'] | null),buttonLink?: (Scalars['String'] | null),alignment?: (ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null)}

export interface ComponentPageHighlightGenqlSelection{
    id?: boolean | number
    title?: boolean | number
    subtitle?: boolean | number
    background?: UploadFileGenqlSelection
    floatImage?: UploadFileGenqlSelection
    buttonLabel?: boolean | number
    buttonLink?: boolean | number
    alignment?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComponentPageButtonFiltersInput {label?: (StringFilterInput | null),link?: (StringFilterInput | null),and?: ((ComponentPageButtonFiltersInput | null)[] | null),or?: ((ComponentPageButtonFiltersInput | null)[] | null),not?: (ComponentPageButtonFiltersInput | null)}

export interface ComponentPageButtonInput {id?: (Scalars['ID'] | null),label?: (Scalars['String'] | null),link?: (Scalars['String'] | null)}

export interface ComponentPageButtonGenqlSelection{
    id?: boolean | number
    label?: boolean | number
    link?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UploadFileFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),alternativeText?: (StringFilterInput | null),caption?: (StringFilterInput | null),width?: (IntFilterInput | null),height?: (IntFilterInput | null),formats?: (JSONFilterInput | null),hash?: (StringFilterInput | null),ext?: (StringFilterInput | null),mime?: (StringFilterInput | null),size?: (FloatFilterInput | null),url?: (StringFilterInput | null),previewUrl?: (StringFilterInput | null),provider?: (StringFilterInput | null),provider_metadata?: (JSONFilterInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((UploadFileFiltersInput | null)[] | null),or?: ((UploadFileFiltersInput | null)[] | null),not?: (UploadFileFiltersInput | null)}

export interface UploadFileGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    alternativeText?: boolean | number
    caption?: boolean | number
    width?: boolean | number
    height?: boolean | number
    formats?: boolean | number
    hash?: boolean | number
    ext?: boolean | number
    mime?: boolean | number
    size?: boolean | number
    url?: boolean | number
    previewUrl?: boolean | number
    provider?: boolean | number
    provider_metadata?: boolean | number
    related?: GenericMorphGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UploadFileEntityResponseCollectionGenqlSelection{
    nodes?: UploadFileGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UploadFileRelationResponseCollectionGenqlSelection{
    nodes?: UploadFileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface I18NLocaleFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),code?: (StringFilterInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((I18NLocaleFiltersInput | null)[] | null),or?: ((I18NLocaleFiltersInput | null)[] | null),not?: (I18NLocaleFiltersInput | null)}

export interface I18NLocaleGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    code?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface I18NLocaleEntityResponseCollectionGenqlSelection{
    nodes?: I18NLocaleGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReviewWorkflowsWorkflowFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),stages?: (ReviewWorkflowsWorkflowStageFiltersInput | null),stageRequiredToPublish?: (ReviewWorkflowsWorkflowStageFiltersInput | null),contentTypes?: (JSONFilterInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((ReviewWorkflowsWorkflowFiltersInput | null)[] | null),or?: ((ReviewWorkflowsWorkflowFiltersInput | null)[] | null),not?: (ReviewWorkflowsWorkflowFiltersInput | null)}

export interface ReviewWorkflowsWorkflowInput {name?: (Scalars['String'] | null),stages?: ((Scalars['ID'] | null)[] | null),stageRequiredToPublish?: (Scalars['ID'] | null),contentTypes?: (Scalars['JSON'] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface ReviewWorkflowsWorkflowGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    stages_connection?: (ReviewWorkflowsWorkflowStageRelationResponseCollectionGenqlSelection & { __args?: {filters?: (ReviewWorkflowsWorkflowStageFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    stages?: (ReviewWorkflowsWorkflowStageGenqlSelection & { __args?: {filters?: (ReviewWorkflowsWorkflowStageFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    stageRequiredToPublish?: ReviewWorkflowsWorkflowStageGenqlSelection
    contentTypes?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReviewWorkflowsWorkflowEntityResponseCollectionGenqlSelection{
    nodes?: ReviewWorkflowsWorkflowGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReviewWorkflowsWorkflowStageFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),color?: (StringFilterInput | null),workflow?: (ReviewWorkflowsWorkflowFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((ReviewWorkflowsWorkflowStageFiltersInput | null)[] | null),or?: ((ReviewWorkflowsWorkflowStageFiltersInput | null)[] | null),not?: (ReviewWorkflowsWorkflowStageFiltersInput | null)}

export interface ReviewWorkflowsWorkflowStageInput {name?: (Scalars['String'] | null),color?: (Scalars['String'] | null),workflow?: (Scalars['ID'] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface ReviewWorkflowsWorkflowStageGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    color?: boolean | number
    workflow?: ReviewWorkflowsWorkflowGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReviewWorkflowsWorkflowStageEntityResponseCollectionGenqlSelection{
    nodes?: ReviewWorkflowsWorkflowStageGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReviewWorkflowsWorkflowStageRelationResponseCollectionGenqlSelection{
    nodes?: ReviewWorkflowsWorkflowStageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsPermissionFiltersInput {documentId?: (IDFilterInput | null),action?: (StringFilterInput | null),role?: (UsersPermissionsRoleFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((UsersPermissionsPermissionFiltersInput | null)[] | null),or?: ((UsersPermissionsPermissionFiltersInput | null)[] | null),not?: (UsersPermissionsPermissionFiltersInput | null)}

export interface UsersPermissionsPermissionGenqlSelection{
    documentId?: boolean | number
    action?: boolean | number
    role?: UsersPermissionsRoleGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsPermissionRelationResponseCollectionGenqlSelection{
    nodes?: UsersPermissionsPermissionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsRoleFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),description?: (StringFilterInput | null),type?: (StringFilterInput | null),permissions?: (UsersPermissionsPermissionFiltersInput | null),users?: (UsersPermissionsUserFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((UsersPermissionsRoleFiltersInput | null)[] | null),or?: ((UsersPermissionsRoleFiltersInput | null)[] | null),not?: (UsersPermissionsRoleFiltersInput | null)}

export interface UsersPermissionsRoleInput {name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),type?: (Scalars['String'] | null),permissions?: ((Scalars['ID'] | null)[] | null),users?: ((Scalars['ID'] | null)[] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface UsersPermissionsRoleGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    description?: boolean | number
    type?: boolean | number
    permissions_connection?: (UsersPermissionsPermissionRelationResponseCollectionGenqlSelection & { __args?: {filters?: (UsersPermissionsPermissionFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    permissions?: (UsersPermissionsPermissionGenqlSelection & { __args?: {filters?: (UsersPermissionsPermissionFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    users_connection?: (UsersPermissionsUserRelationResponseCollectionGenqlSelection & { __args?: {filters?: (UsersPermissionsUserFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    users?: (UsersPermissionsUserGenqlSelection & { __args?: {filters?: (UsersPermissionsUserFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsRoleEntityResponseCollectionGenqlSelection{
    nodes?: UsersPermissionsRoleGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsUserFiltersInput {documentId?: (IDFilterInput | null),username?: (StringFilterInput | null),email?: (StringFilterInput | null),provider?: (StringFilterInput | null),confirmed?: (BooleanFilterInput | null),blocked?: (BooleanFilterInput | null),role?: (UsersPermissionsRoleFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((UsersPermissionsUserFiltersInput | null)[] | null),or?: ((UsersPermissionsUserFiltersInput | null)[] | null),not?: (UsersPermissionsUserFiltersInput | null)}

export interface UsersPermissionsUserInput {username?: (Scalars['String'] | null),email?: (Scalars['String'] | null),provider?: (Scalars['String'] | null),confirmed?: (Scalars['Boolean'] | null),blocked?: (Scalars['Boolean'] | null),role?: (Scalars['ID'] | null),publishedAt?: (Scalars['DateTime'] | null),password?: (Scalars['String'] | null)}

export interface UsersPermissionsUserGenqlSelection{
    documentId?: boolean | number
    username?: boolean | number
    email?: boolean | number
    provider?: boolean | number
    confirmed?: boolean | number
    blocked?: boolean | number
    role?: UsersPermissionsRoleGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsUserEntityResponseGenqlSelection{
    data?: UsersPermissionsUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsUserEntityResponseCollectionGenqlSelection{
    nodes?: UsersPermissionsUserGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsUserRelationResponseCollectionGenqlSelection{
    nodes?: UsersPermissionsUserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BannerFiltersInput {documentId?: (IDFilterInput | null),title?: (StringFilterInput | null),subtitle?: (StringFilterInput | null),button?: (ComponentPageButtonFiltersInput | null),ribbon?: (ComponentPageRibbonFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((BannerFiltersInput | null)[] | null),or?: ((BannerFiltersInput | null)[] | null),not?: (BannerFiltersInput | null)}

export interface BannerInput {image?: (Scalars['ID'] | null),title?: (Scalars['String'] | null),subtitle?: (Scalars['String'] | null),button?: (ComponentPageButtonInput | null),ribbon?: (ComponentPageRibbonInput | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface BannerGenqlSelection{
    documentId?: boolean | number
    image?: UploadFileGenqlSelection
    title?: boolean | number
    subtitle?: boolean | number
    button?: ComponentPageButtonGenqlSelection
    ribbon?: ComponentPageRibbonGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BannerEntityResponseCollectionGenqlSelection{
    nodes?: BannerGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),slug?: (StringFilterInput | null),games?: (GameFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((CategoryFiltersInput | null)[] | null),or?: ((CategoryFiltersInput | null)[] | null),not?: (CategoryFiltersInput | null)}

export interface CategoryInput {name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),games?: ((Scalars['ID'] | null)[] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface CategoryGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryEntityResponseCollectionGenqlSelection{
    nodes?: CategoryGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryRelationResponseCollectionGenqlSelection{
    nodes?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeveloperFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),slug?: (StringFilterInput | null),games?: (GameFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((DeveloperFiltersInput | null)[] | null),or?: ((DeveloperFiltersInput | null)[] | null),not?: (DeveloperFiltersInput | null)}

export interface DeveloperInput {name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),games?: ((Scalars['ID'] | null)[] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface DeveloperGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeveloperEntityResponseCollectionGenqlSelection{
    nodes?: DeveloperGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeveloperRelationResponseCollectionGenqlSelection{
    nodes?: DeveloperGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GameFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),slug?: (StringFilterInput | null),short_description?: (StringFilterInput | null),description?: (StringFilterInput | null),price?: (FloatFilterInput | null),release_date?: (DateFilterInput | null),rating?: (StringFilterInput | null),categories?: (CategoryFiltersInput | null),developers?: (DeveloperFiltersInput | null),platforms?: (PlatformFiltersInput | null),publisher?: (PublisherFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),locale?: (StringFilterInput | null),localizations?: (GameFiltersInput | null),and?: ((GameFiltersInput | null)[] | null),or?: ((GameFiltersInput | null)[] | null),not?: (GameFiltersInput | null)}

export interface GameInput {name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),short_description?: (Scalars['String'] | null),description?: (Scalars['String'] | null),price?: (Scalars['Float'] | null),release_date?: (Scalars['Date'] | null),rating?: (ENUM_GAME_RATING | null),cover?: (Scalars['ID'] | null),gallery?: ((Scalars['ID'] | null)[] | null),categories?: ((Scalars['ID'] | null)[] | null),developers?: ((Scalars['ID'] | null)[] | null),platforms?: ((Scalars['ID'] | null)[] | null),publisher?: (Scalars['ID'] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface GameGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    short_description?: boolean | number
    description?: boolean | number
    price?: boolean | number
    release_date?: boolean | number
    rating?: boolean | number
    cover?: UploadFileGenqlSelection
    gallery_connection?: (UploadFileRelationResponseCollectionGenqlSelection & { __args?: {filters?: (UploadFileFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    gallery?: (UploadFileGenqlSelection & { __args?: {filters?: (UploadFileFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    categories_connection?: (CategoryRelationResponseCollectionGenqlSelection & { __args?: {filters?: (CategoryFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    categories?: (CategoryGenqlSelection & { __args?: {filters?: (CategoryFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    developers_connection?: (DeveloperRelationResponseCollectionGenqlSelection & { __args?: {filters?: (DeveloperFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    developers?: (DeveloperGenqlSelection & { __args?: {filters?: (DeveloperFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    platforms_connection?: (PlatformRelationResponseCollectionGenqlSelection & { __args?: {filters?: (PlatformFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    platforms?: (PlatformGenqlSelection & { __args?: {filters?: (PlatformFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    publisher?: PublisherGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    locale?: boolean | number
    localizations_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    localizations?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GameEntityResponseCollectionGenqlSelection{
    nodes?: GameGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GameRelationResponseCollectionGenqlSelection{
    nodes?: GameGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HomeInput {newGames?: (ComponentPageSectionInput | null),upcomingGames?: (ComponentPageSectionInput | null),freeGames?: (ComponentPageSectionInput | null),popularGames?: (ComponentPagePopularGamesInput | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface HomeGenqlSelection{
    documentId?: boolean | number
    newGames?: ComponentPageSectionGenqlSelection
    upcomingGames?: ComponentPageSectionGenqlSelection
    freeGames?: ComponentPageSectionGenqlSelection
    popularGames?: ComponentPagePopularGamesGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderFiltersInput {documentId?: (IDFilterInput | null),user?: (UsersPermissionsUserFiltersInput | null),games?: (GameFiltersInput | null),amount_in_cents?: (LongFilterInput | null),payment_intent_id?: (StringFilterInput | null),card_brand?: (StringFilterInput | null),card_last4?: (StringFilterInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((OrderFiltersInput | null)[] | null),or?: ((OrderFiltersInput | null)[] | null),not?: (OrderFiltersInput | null)}

export interface OrderInput {user?: (Scalars['ID'] | null),games?: ((Scalars['ID'] | null)[] | null),amount_in_cents?: (Scalars['Long'] | null),payment_intent_id?: (Scalars['String'] | null),card_brand?: (Scalars['String'] | null),card_last4?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface OrderGenqlSelection{
    documentId?: boolean | number
    user?: UsersPermissionsUserGenqlSelection
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    amount_in_cents?: boolean | number
    payment_intent_id?: boolean | number
    card_brand?: boolean | number
    card_last4?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderEntityResponseCollectionGenqlSelection{
    nodes?: OrderGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),slug?: (StringFilterInput | null),games?: (GameFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((PlatformFiltersInput | null)[] | null),or?: ((PlatformFiltersInput | null)[] | null),not?: (PlatformFiltersInput | null)}

export interface PlatformInput {name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),games?: ((Scalars['ID'] | null)[] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface PlatformGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformEntityResponseCollectionGenqlSelection{
    nodes?: PlatformGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformRelationResponseCollectionGenqlSelection{
    nodes?: PlatformGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublisherFiltersInput {documentId?: (IDFilterInput | null),name?: (StringFilterInput | null),slug?: (StringFilterInput | null),games?: (GameFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((PublisherFiltersInput | null)[] | null),or?: ((PublisherFiltersInput | null)[] | null),not?: (PublisherFiltersInput | null)}

export interface PublisherInput {name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),games?: ((Scalars['ID'] | null)[] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface PublisherGenqlSelection{
    documentId?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublisherEntityResponseCollectionGenqlSelection{
    nodes?: PublisherGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecommendedInput {section?: (ComponentPagePopularGamesInput | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface RecommendedGenqlSelection{
    documentId?: boolean | number
    section?: ComponentPagePopularGamesGenqlSelection
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WishlistFiltersInput {documentId?: (IDFilterInput | null),user?: (UsersPermissionsUserFiltersInput | null),games?: (GameFiltersInput | null),createdAt?: (DateTimeFilterInput | null),updatedAt?: (DateTimeFilterInput | null),publishedAt?: (DateTimeFilterInput | null),and?: ((WishlistFiltersInput | null)[] | null),or?: ((WishlistFiltersInput | null)[] | null),not?: (WishlistFiltersInput | null)}

export interface WishlistInput {user?: (Scalars['ID'] | null),games?: ((Scalars['ID'] | null)[] | null),publishedAt?: (Scalars['DateTime'] | null)}

export interface WishlistGenqlSelection{
    documentId?: boolean | number
    user?: UsersPermissionsUserGenqlSelection
    games_connection?: (GameRelationResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    createdAt?: boolean | number
    updatedAt?: boolean | number
    publishedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WishlistEntityResponseGenqlSelection{
    data?: WishlistGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WishlistEntityResponseCollectionGenqlSelection{
    nodes?: WishlistGenqlSelection
    pageInfo?: PaginationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GenericMorphGenqlSelection{
    on_ComponentPageSection?:ComponentPageSectionGenqlSelection,
    on_ComponentPageRibbon?:ComponentPageRibbonGenqlSelection,
    on_ComponentPagePopularGames?:ComponentPagePopularGamesGenqlSelection,
    on_ComponentPageHighlight?:ComponentPageHighlightGenqlSelection,
    on_ComponentPageButton?:ComponentPageButtonGenqlSelection,
    on_UploadFile?:UploadFileGenqlSelection,
    on_I18NLocale?:I18NLocaleGenqlSelection,
    on_ReviewWorkflowsWorkflow?:ReviewWorkflowsWorkflowGenqlSelection,
    on_ReviewWorkflowsWorkflowStage?:ReviewWorkflowsWorkflowStageGenqlSelection,
    on_UsersPermissionsPermission?:UsersPermissionsPermissionGenqlSelection,
    on_UsersPermissionsRole?:UsersPermissionsRoleGenqlSelection,
    on_UsersPermissionsUser?:UsersPermissionsUserGenqlSelection,
    on_Banner?:BannerGenqlSelection,
    on_Category?:CategoryGenqlSelection,
    on_Developer?:DeveloperGenqlSelection,
    on_Game?:GameGenqlSelection,
    on_Home?:HomeGenqlSelection,
    on_Order?:OrderGenqlSelection,
    on_Platform?:PlatformGenqlSelection,
    on_Publisher?:PublisherGenqlSelection,
    on_Recommended?:RecommendedGenqlSelection,
    on_Wishlist?:WishlistGenqlSelection,
    __typename?: boolean | number
}

export interface FileInfoInput {name?: (Scalars['String'] | null),alternativeText?: (Scalars['String'] | null),caption?: (Scalars['String'] | null)}

export interface UsersPermissionsMeGenqlSelection{
    id?: boolean | number
    documentId?: boolean | number
    username?: boolean | number
    email?: boolean | number
    confirmed?: boolean | number
    blocked?: boolean | number
    role?: UsersPermissionsMeRoleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsMeRoleGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsRegisterInput {username: Scalars['String'],email: Scalars['String'],password: Scalars['String']}

export interface UsersPermissionsLoginInput {identifier: Scalars['String'],password: Scalars['String'],provider?: Scalars['String']}

export interface UsersPermissionsPasswordPayloadGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsLoginPayloadGenqlSelection{
    jwt?: boolean | number
    user?: UsersPermissionsMeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsCreateRolePayloadGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsUpdateRolePayloadGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsersPermissionsDeleteRolePayloadGenqlSelection{
    ok?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationArg {page?: (Scalars['Int'] | null),pageSize?: (Scalars['Int'] | null),start?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null)}

export interface QueryGenqlSelection{
    uploadFile?: (UploadFileGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    uploadFiles_connection?: (UploadFileEntityResponseCollectionGenqlSelection & { __args?: {filters?: (UploadFileFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    uploadFiles?: (UploadFileGenqlSelection & { __args?: {filters?: (UploadFileFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    i18NLocale?: (I18NLocaleGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    i18NLocales_connection?: (I18NLocaleEntityResponseCollectionGenqlSelection & { __args?: {filters?: (I18NLocaleFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    i18NLocales?: (I18NLocaleGenqlSelection & { __args?: {filters?: (I18NLocaleFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    reviewWorkflowsWorkflow?: (ReviewWorkflowsWorkflowGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    reviewWorkflowsWorkflows_connection?: (ReviewWorkflowsWorkflowEntityResponseCollectionGenqlSelection & { __args?: {filters?: (ReviewWorkflowsWorkflowFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    reviewWorkflowsWorkflows?: (ReviewWorkflowsWorkflowGenqlSelection & { __args?: {filters?: (ReviewWorkflowsWorkflowFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    reviewWorkflowsWorkflowStage?: (ReviewWorkflowsWorkflowStageGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    reviewWorkflowsWorkflowStages_connection?: (ReviewWorkflowsWorkflowStageEntityResponseCollectionGenqlSelection & { __args?: {filters?: (ReviewWorkflowsWorkflowStageFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    reviewWorkflowsWorkflowStages?: (ReviewWorkflowsWorkflowStageGenqlSelection & { __args?: {filters?: (ReviewWorkflowsWorkflowStageFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    usersPermissionsRole?: (UsersPermissionsRoleGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    usersPermissionsRoles_connection?: (UsersPermissionsRoleEntityResponseCollectionGenqlSelection & { __args?: {filters?: (UsersPermissionsRoleFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    usersPermissionsRoles?: (UsersPermissionsRoleGenqlSelection & { __args?: {filters?: (UsersPermissionsRoleFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    usersPermissionsUser?: (UsersPermissionsUserGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    usersPermissionsUsers_connection?: (UsersPermissionsUserEntityResponseCollectionGenqlSelection & { __args?: {filters?: (UsersPermissionsUserFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    usersPermissionsUsers?: (UsersPermissionsUserGenqlSelection & { __args?: {filters?: (UsersPermissionsUserFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    banner?: (BannerGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    banners_connection?: (BannerEntityResponseCollectionGenqlSelection & { __args?: {filters?: (BannerFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    banners?: (BannerGenqlSelection & { __args?: {filters?: (BannerFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    category?: (CategoryGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    categories_connection?: (CategoryEntityResponseCollectionGenqlSelection & { __args?: {filters?: (CategoryFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    categories?: (CategoryGenqlSelection & { __args?: {filters?: (CategoryFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    developer?: (DeveloperGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    developers_connection?: (DeveloperEntityResponseCollectionGenqlSelection & { __args?: {filters?: (DeveloperFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    developers?: (DeveloperGenqlSelection & { __args?: {filters?: (DeveloperFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    game?: (GameGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), 
    /** The locale to use for the query */
    locale?: (Scalars['I18NLocaleCode'] | null)} })
    games_connection?: (GameEntityResponseCollectionGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null), 
    /** The locale to use for the query */
    locale?: (Scalars['I18NLocaleCode'] | null)} })
    games?: (GameGenqlSelection & { __args?: {filters?: (GameFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null), 
    /** The locale to use for the query */
    locale?: (Scalars['I18NLocaleCode'] | null)} })
    home?: (HomeGenqlSelection & { __args?: {status?: (PublicationStatus | null)} })
    order?: (OrderGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    orders_connection?: (OrderEntityResponseCollectionGenqlSelection & { __args?: {filters?: (OrderFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    orders?: (OrderGenqlSelection & { __args?: {filters?: (OrderFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    platform?: (PlatformGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    platforms_connection?: (PlatformEntityResponseCollectionGenqlSelection & { __args?: {filters?: (PlatformFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    platforms?: (PlatformGenqlSelection & { __args?: {filters?: (PlatformFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    publisher?: (PublisherGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    publishers_connection?: (PublisherEntityResponseCollectionGenqlSelection & { __args?: {filters?: (PublisherFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    publishers?: (PublisherGenqlSelection & { __args?: {filters?: (PublisherFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    recommended?: (RecommendedGenqlSelection & { __args?: {status?: (PublicationStatus | null)} })
    wishlist?: (WishlistGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null)} })
    wishlists_connection?: (WishlistEntityResponseCollectionGenqlSelection & { __args?: {filters?: (WishlistFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    wishlists?: (WishlistGenqlSelection & { __args?: {filters?: (WishlistFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null), status?: (PublicationStatus | null)} })
    me?: UsersPermissionsMeGenqlSelection
    myOrders?: (OrderEntityResponseCollectionGenqlSelection & { __args?: {filters?: (OrderFiltersInput | null), pagination?: (PaginationArg | null), sort?: ((Scalars['String'] | null)[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createReviewWorkflowsWorkflow?: (ReviewWorkflowsWorkflowGenqlSelection & { __args: {status?: (PublicationStatus | null), data: ReviewWorkflowsWorkflowInput} })
    updateReviewWorkflowsWorkflow?: (ReviewWorkflowsWorkflowGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: ReviewWorkflowsWorkflowInput} })
    deleteReviewWorkflowsWorkflow?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createReviewWorkflowsWorkflowStage?: (ReviewWorkflowsWorkflowStageGenqlSelection & { __args: {status?: (PublicationStatus | null), data: ReviewWorkflowsWorkflowStageInput} })
    updateReviewWorkflowsWorkflowStage?: (ReviewWorkflowsWorkflowStageGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: ReviewWorkflowsWorkflowStageInput} })
    deleteReviewWorkflowsWorkflowStage?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createBanner?: (BannerGenqlSelection & { __args: {status?: (PublicationStatus | null), data: BannerInput} })
    updateBanner?: (BannerGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: BannerInput} })
    deleteBanner?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createCategory?: (CategoryGenqlSelection & { __args: {status?: (PublicationStatus | null), data: CategoryInput} })
    updateCategory?: (CategoryGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: CategoryInput} })
    deleteCategory?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createDeveloper?: (DeveloperGenqlSelection & { __args: {status?: (PublicationStatus | null), data: DeveloperInput} })
    updateDeveloper?: (DeveloperGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: DeveloperInput} })
    deleteDeveloper?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createGame?: (GameGenqlSelection & { __args: {status?: (PublicationStatus | null), data: GameInput, 
    /** The locale to use for the query */
    locale?: (Scalars['I18NLocaleCode'] | null)} })
    updateGame?: (GameGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: GameInput, 
    /** The locale to use for the query */
    locale?: (Scalars['I18NLocaleCode'] | null)} })
    deleteGame?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID'], 
    /** The locale to use for the query */
    locale?: (Scalars['I18NLocaleCode'] | null)} })
    updateHome?: (HomeGenqlSelection & { __args: {status?: (PublicationStatus | null), data: HomeInput} })
    deleteHome?: DeleteMutationResponseGenqlSelection
    createOrder?: (OrderGenqlSelection & { __args: {status?: (PublicationStatus | null), data: OrderInput} })
    updateOrder?: (OrderGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: OrderInput} })
    deleteOrder?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createPlatform?: (PlatformGenqlSelection & { __args: {status?: (PublicationStatus | null), data: PlatformInput} })
    updatePlatform?: (PlatformGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: PlatformInput} })
    deletePlatform?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    createPublisher?: (PublisherGenqlSelection & { __args: {status?: (PublicationStatus | null), data: PublisherInput} })
    updatePublisher?: (PublisherGenqlSelection & { __args: {documentId: Scalars['ID'], status?: (PublicationStatus | null), data: PublisherInput} })
    deletePublisher?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    updateRecommended?: (RecommendedGenqlSelection & { __args: {status?: (PublicationStatus | null), data: RecommendedInput} })
    deleteRecommended?: DeleteMutationResponseGenqlSelection
    createWishlist?: (WishlistEntityResponseGenqlSelection & { __args?: {data?: (WishlistInput | null)} })
    updateWishlist?: (WishlistEntityResponseGenqlSelection & { __args?: {data?: (WishlistInput | null)} })
    deleteWishlist?: (DeleteMutationResponseGenqlSelection & { __args: {documentId: Scalars['ID']} })
    updateUploadFile?: (UploadFileGenqlSelection & { __args: {id: Scalars['ID'], info?: (FileInfoInput | null)} })
    deleteUploadFile?: (UploadFileGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Create a new role */
    createUsersPermissionsRole?: (UsersPermissionsCreateRolePayloadGenqlSelection & { __args: {data: UsersPermissionsRoleInput} })
    /** Update an existing role */
    updateUsersPermissionsRole?: (UsersPermissionsUpdateRolePayloadGenqlSelection & { __args: {id: Scalars['ID'], data: UsersPermissionsRoleInput} })
    /** Delete an existing role */
    deleteUsersPermissionsRole?: (UsersPermissionsDeleteRolePayloadGenqlSelection & { __args: {id: Scalars['ID']} })
    /** Create a new user */
    createUsersPermissionsUser?: (UsersPermissionsUserEntityResponseGenqlSelection & { __args: {data: UsersPermissionsUserInput} })
    /** Update an existing user */
    updateUsersPermissionsUser?: (UsersPermissionsUserEntityResponseGenqlSelection & { __args: {id: Scalars['ID'], data: UsersPermissionsUserInput} })
    /** Delete an existing user */
    deleteUsersPermissionsUser?: (UsersPermissionsUserEntityResponseGenqlSelection & { __args: {id: Scalars['ID']} })
    login?: (UsersPermissionsLoginPayloadGenqlSelection & { __args: {input: UsersPermissionsLoginInput} })
    /** Register a user */
    register?: (UsersPermissionsLoginPayloadGenqlSelection & { __args: {input: UsersPermissionsRegisterInput} })
    /** Request a reset password token */
    forgotPassword?: (UsersPermissionsPasswordPayloadGenqlSelection & { __args: {email: Scalars['String']} })
    /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
    resetPassword?: (UsersPermissionsLoginPayloadGenqlSelection & { __args: {password: Scalars['String'], passwordConfirmation: Scalars['String'], code: Scalars['String']} })
    /** Change user password. Confirm with the current password. */
    changePassword?: (UsersPermissionsLoginPayloadGenqlSelection & { __args: {currentPassword: Scalars['String'], password: Scalars['String'], passwordConfirmation: Scalars['String']} })
    /** Confirm an email users email address */
    emailConfirmation?: (UsersPermissionsLoginPayloadGenqlSelection & { __args: {confirmation: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Pagination_possibleTypes: string[] = ['Pagination']
    export const isPagination = (obj?: { __typename?: any } | null): obj is Pagination => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPagination"')
      return Pagination_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteMutationResponse_possibleTypes: string[] = ['DeleteMutationResponse']
    export const isDeleteMutationResponse = (obj?: { __typename?: any } | null): obj is DeleteMutationResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteMutationResponse"')
      return DeleteMutationResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentPageSection_possibleTypes: string[] = ['ComponentPageSection']
    export const isComponentPageSection = (obj?: { __typename?: any } | null): obj is ComponentPageSection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentPageSection"')
      return ComponentPageSection_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentPageRibbon_possibleTypes: string[] = ['ComponentPageRibbon']
    export const isComponentPageRibbon = (obj?: { __typename?: any } | null): obj is ComponentPageRibbon => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentPageRibbon"')
      return ComponentPageRibbon_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentPagePopularGames_possibleTypes: string[] = ['ComponentPagePopularGames']
    export const isComponentPagePopularGames = (obj?: { __typename?: any } | null): obj is ComponentPagePopularGames => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentPagePopularGames"')
      return ComponentPagePopularGames_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentPageHighlight_possibleTypes: string[] = ['ComponentPageHighlight']
    export const isComponentPageHighlight = (obj?: { __typename?: any } | null): obj is ComponentPageHighlight => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentPageHighlight"')
      return ComponentPageHighlight_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentPageButton_possibleTypes: string[] = ['ComponentPageButton']
    export const isComponentPageButton = (obj?: { __typename?: any } | null): obj is ComponentPageButton => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentPageButton"')
      return ComponentPageButton_possibleTypes.includes(obj.__typename)
    }
    


    const UploadFile_possibleTypes: string[] = ['UploadFile']
    export const isUploadFile = (obj?: { __typename?: any } | null): obj is UploadFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadFile"')
      return UploadFile_possibleTypes.includes(obj.__typename)
    }
    


    const UploadFileEntityResponseCollection_possibleTypes: string[] = ['UploadFileEntityResponseCollection']
    export const isUploadFileEntityResponseCollection = (obj?: { __typename?: any } | null): obj is UploadFileEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadFileEntityResponseCollection"')
      return UploadFileEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const UploadFileRelationResponseCollection_possibleTypes: string[] = ['UploadFileRelationResponseCollection']
    export const isUploadFileRelationResponseCollection = (obj?: { __typename?: any } | null): obj is UploadFileRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadFileRelationResponseCollection"')
      return UploadFileRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const I18NLocale_possibleTypes: string[] = ['I18NLocale']
    export const isI18NLocale = (obj?: { __typename?: any } | null): obj is I18NLocale => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isI18NLocale"')
      return I18NLocale_possibleTypes.includes(obj.__typename)
    }
    


    const I18NLocaleEntityResponseCollection_possibleTypes: string[] = ['I18NLocaleEntityResponseCollection']
    export const isI18NLocaleEntityResponseCollection = (obj?: { __typename?: any } | null): obj is I18NLocaleEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isI18NLocaleEntityResponseCollection"')
      return I18NLocaleEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewWorkflowsWorkflow_possibleTypes: string[] = ['ReviewWorkflowsWorkflow']
    export const isReviewWorkflowsWorkflow = (obj?: { __typename?: any } | null): obj is ReviewWorkflowsWorkflow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewWorkflowsWorkflow"')
      return ReviewWorkflowsWorkflow_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewWorkflowsWorkflowEntityResponseCollection_possibleTypes: string[] = ['ReviewWorkflowsWorkflowEntityResponseCollection']
    export const isReviewWorkflowsWorkflowEntityResponseCollection = (obj?: { __typename?: any } | null): obj is ReviewWorkflowsWorkflowEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewWorkflowsWorkflowEntityResponseCollection"')
      return ReviewWorkflowsWorkflowEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewWorkflowsWorkflowStage_possibleTypes: string[] = ['ReviewWorkflowsWorkflowStage']
    export const isReviewWorkflowsWorkflowStage = (obj?: { __typename?: any } | null): obj is ReviewWorkflowsWorkflowStage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewWorkflowsWorkflowStage"')
      return ReviewWorkflowsWorkflowStage_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewWorkflowsWorkflowStageEntityResponseCollection_possibleTypes: string[] = ['ReviewWorkflowsWorkflowStageEntityResponseCollection']
    export const isReviewWorkflowsWorkflowStageEntityResponseCollection = (obj?: { __typename?: any } | null): obj is ReviewWorkflowsWorkflowStageEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewWorkflowsWorkflowStageEntityResponseCollection"')
      return ReviewWorkflowsWorkflowStageEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const ReviewWorkflowsWorkflowStageRelationResponseCollection_possibleTypes: string[] = ['ReviewWorkflowsWorkflowStageRelationResponseCollection']
    export const isReviewWorkflowsWorkflowStageRelationResponseCollection = (obj?: { __typename?: any } | null): obj is ReviewWorkflowsWorkflowStageRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReviewWorkflowsWorkflowStageRelationResponseCollection"')
      return ReviewWorkflowsWorkflowStageRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsPermission_possibleTypes: string[] = ['UsersPermissionsPermission']
    export const isUsersPermissionsPermission = (obj?: { __typename?: any } | null): obj is UsersPermissionsPermission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsPermission"')
      return UsersPermissionsPermission_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsPermissionRelationResponseCollection_possibleTypes: string[] = ['UsersPermissionsPermissionRelationResponseCollection']
    export const isUsersPermissionsPermissionRelationResponseCollection = (obj?: { __typename?: any } | null): obj is UsersPermissionsPermissionRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsPermissionRelationResponseCollection"')
      return UsersPermissionsPermissionRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsRole_possibleTypes: string[] = ['UsersPermissionsRole']
    export const isUsersPermissionsRole = (obj?: { __typename?: any } | null): obj is UsersPermissionsRole => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsRole"')
      return UsersPermissionsRole_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsRoleEntityResponseCollection_possibleTypes: string[] = ['UsersPermissionsRoleEntityResponseCollection']
    export const isUsersPermissionsRoleEntityResponseCollection = (obj?: { __typename?: any } | null): obj is UsersPermissionsRoleEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsRoleEntityResponseCollection"')
      return UsersPermissionsRoleEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsUser_possibleTypes: string[] = ['UsersPermissionsUser']
    export const isUsersPermissionsUser = (obj?: { __typename?: any } | null): obj is UsersPermissionsUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsUser"')
      return UsersPermissionsUser_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsUserEntityResponse_possibleTypes: string[] = ['UsersPermissionsUserEntityResponse']
    export const isUsersPermissionsUserEntityResponse = (obj?: { __typename?: any } | null): obj is UsersPermissionsUserEntityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsUserEntityResponse"')
      return UsersPermissionsUserEntityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsUserEntityResponseCollection_possibleTypes: string[] = ['UsersPermissionsUserEntityResponseCollection']
    export const isUsersPermissionsUserEntityResponseCollection = (obj?: { __typename?: any } | null): obj is UsersPermissionsUserEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsUserEntityResponseCollection"')
      return UsersPermissionsUserEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsUserRelationResponseCollection_possibleTypes: string[] = ['UsersPermissionsUserRelationResponseCollection']
    export const isUsersPermissionsUserRelationResponseCollection = (obj?: { __typename?: any } | null): obj is UsersPermissionsUserRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsUserRelationResponseCollection"')
      return UsersPermissionsUserRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Banner_possibleTypes: string[] = ['Banner']
    export const isBanner = (obj?: { __typename?: any } | null): obj is Banner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBanner"')
      return Banner_possibleTypes.includes(obj.__typename)
    }
    


    const BannerEntityResponseCollection_possibleTypes: string[] = ['BannerEntityResponseCollection']
    export const isBannerEntityResponseCollection = (obj?: { __typename?: any } | null): obj is BannerEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBannerEntityResponseCollection"')
      return BannerEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryEntityResponseCollection_possibleTypes: string[] = ['CategoryEntityResponseCollection']
    export const isCategoryEntityResponseCollection = (obj?: { __typename?: any } | null): obj is CategoryEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryEntityResponseCollection"')
      return CategoryEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryRelationResponseCollection_possibleTypes: string[] = ['CategoryRelationResponseCollection']
    export const isCategoryRelationResponseCollection = (obj?: { __typename?: any } | null): obj is CategoryRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryRelationResponseCollection"')
      return CategoryRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Developer_possibleTypes: string[] = ['Developer']
    export const isDeveloper = (obj?: { __typename?: any } | null): obj is Developer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeveloper"')
      return Developer_possibleTypes.includes(obj.__typename)
    }
    


    const DeveloperEntityResponseCollection_possibleTypes: string[] = ['DeveloperEntityResponseCollection']
    export const isDeveloperEntityResponseCollection = (obj?: { __typename?: any } | null): obj is DeveloperEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeveloperEntityResponseCollection"')
      return DeveloperEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const DeveloperRelationResponseCollection_possibleTypes: string[] = ['DeveloperRelationResponseCollection']
    export const isDeveloperRelationResponseCollection = (obj?: { __typename?: any } | null): obj is DeveloperRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeveloperRelationResponseCollection"')
      return DeveloperRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Game_possibleTypes: string[] = ['Game']
    export const isGame = (obj?: { __typename?: any } | null): obj is Game => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGame"')
      return Game_possibleTypes.includes(obj.__typename)
    }
    


    const GameEntityResponseCollection_possibleTypes: string[] = ['GameEntityResponseCollection']
    export const isGameEntityResponseCollection = (obj?: { __typename?: any } | null): obj is GameEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameEntityResponseCollection"')
      return GameEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const GameRelationResponseCollection_possibleTypes: string[] = ['GameRelationResponseCollection']
    export const isGameRelationResponseCollection = (obj?: { __typename?: any } | null): obj is GameRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGameRelationResponseCollection"')
      return GameRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Home_possibleTypes: string[] = ['Home']
    export const isHome = (obj?: { __typename?: any } | null): obj is Home => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHome"')
      return Home_possibleTypes.includes(obj.__typename)
    }
    


    const Order_possibleTypes: string[] = ['Order']
    export const isOrder = (obj?: { __typename?: any } | null): obj is Order => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrder"')
      return Order_possibleTypes.includes(obj.__typename)
    }
    


    const OrderEntityResponseCollection_possibleTypes: string[] = ['OrderEntityResponseCollection']
    export const isOrderEntityResponseCollection = (obj?: { __typename?: any } | null): obj is OrderEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderEntityResponseCollection"')
      return OrderEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Platform_possibleTypes: string[] = ['Platform']
    export const isPlatform = (obj?: { __typename?: any } | null): obj is Platform => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatform"')
      return Platform_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformEntityResponseCollection_possibleTypes: string[] = ['PlatformEntityResponseCollection']
    export const isPlatformEntityResponseCollection = (obj?: { __typename?: any } | null): obj is PlatformEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformEntityResponseCollection"')
      return PlatformEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformRelationResponseCollection_possibleTypes: string[] = ['PlatformRelationResponseCollection']
    export const isPlatformRelationResponseCollection = (obj?: { __typename?: any } | null): obj is PlatformRelationResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformRelationResponseCollection"')
      return PlatformRelationResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Publisher_possibleTypes: string[] = ['Publisher']
    export const isPublisher = (obj?: { __typename?: any } | null): obj is Publisher => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublisher"')
      return Publisher_possibleTypes.includes(obj.__typename)
    }
    


    const PublisherEntityResponseCollection_possibleTypes: string[] = ['PublisherEntityResponseCollection']
    export const isPublisherEntityResponseCollection = (obj?: { __typename?: any } | null): obj is PublisherEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublisherEntityResponseCollection"')
      return PublisherEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const Recommended_possibleTypes: string[] = ['Recommended']
    export const isRecommended = (obj?: { __typename?: any } | null): obj is Recommended => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecommended"')
      return Recommended_possibleTypes.includes(obj.__typename)
    }
    


    const Wishlist_possibleTypes: string[] = ['Wishlist']
    export const isWishlist = (obj?: { __typename?: any } | null): obj is Wishlist => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWishlist"')
      return Wishlist_possibleTypes.includes(obj.__typename)
    }
    


    const WishlistEntityResponse_possibleTypes: string[] = ['WishlistEntityResponse']
    export const isWishlistEntityResponse = (obj?: { __typename?: any } | null): obj is WishlistEntityResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistEntityResponse"')
      return WishlistEntityResponse_possibleTypes.includes(obj.__typename)
    }
    


    const WishlistEntityResponseCollection_possibleTypes: string[] = ['WishlistEntityResponseCollection']
    export const isWishlistEntityResponseCollection = (obj?: { __typename?: any } | null): obj is WishlistEntityResponseCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWishlistEntityResponseCollection"')
      return WishlistEntityResponseCollection_possibleTypes.includes(obj.__typename)
    }
    


    const GenericMorph_possibleTypes: string[] = ['ComponentPageSection','ComponentPageRibbon','ComponentPagePopularGames','ComponentPageHighlight','ComponentPageButton','UploadFile','I18NLocale','ReviewWorkflowsWorkflow','ReviewWorkflowsWorkflowStage','UsersPermissionsPermission','UsersPermissionsRole','UsersPermissionsUser','Banner','Category','Developer','Game','Home','Order','Platform','Publisher','Recommended','Wishlist']
    export const isGenericMorph = (obj?: { __typename?: any } | null): obj is GenericMorph => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGenericMorph"')
      return GenericMorph_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsMe_possibleTypes: string[] = ['UsersPermissionsMe']
    export const isUsersPermissionsMe = (obj?: { __typename?: any } | null): obj is UsersPermissionsMe => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsMe"')
      return UsersPermissionsMe_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsMeRole_possibleTypes: string[] = ['UsersPermissionsMeRole']
    export const isUsersPermissionsMeRole = (obj?: { __typename?: any } | null): obj is UsersPermissionsMeRole => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsMeRole"')
      return UsersPermissionsMeRole_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsPasswordPayload_possibleTypes: string[] = ['UsersPermissionsPasswordPayload']
    export const isUsersPermissionsPasswordPayload = (obj?: { __typename?: any } | null): obj is UsersPermissionsPasswordPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsPasswordPayload"')
      return UsersPermissionsPasswordPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsLoginPayload_possibleTypes: string[] = ['UsersPermissionsLoginPayload']
    export const isUsersPermissionsLoginPayload = (obj?: { __typename?: any } | null): obj is UsersPermissionsLoginPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsLoginPayload"')
      return UsersPermissionsLoginPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsCreateRolePayload_possibleTypes: string[] = ['UsersPermissionsCreateRolePayload']
    export const isUsersPermissionsCreateRolePayload = (obj?: { __typename?: any } | null): obj is UsersPermissionsCreateRolePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsCreateRolePayload"')
      return UsersPermissionsCreateRolePayload_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsUpdateRolePayload_possibleTypes: string[] = ['UsersPermissionsUpdateRolePayload']
    export const isUsersPermissionsUpdateRolePayload = (obj?: { __typename?: any } | null): obj is UsersPermissionsUpdateRolePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsUpdateRolePayload"')
      return UsersPermissionsUpdateRolePayload_possibleTypes.includes(obj.__typename)
    }
    


    const UsersPermissionsDeleteRolePayload_possibleTypes: string[] = ['UsersPermissionsDeleteRolePayload']
    export const isUsersPermissionsDeleteRolePayload = (obj?: { __typename?: any } | null): obj is UsersPermissionsDeleteRolePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersPermissionsDeleteRolePayload"')
      return UsersPermissionsDeleteRolePayload_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    

export const enumPublicationStatus = {
   DRAFT: 'DRAFT' as const,
   PUBLISHED: 'PUBLISHED' as const
}

export const enumEnumComponentpageribbonColor = {
   primary: 'primary' as const,
   secondary: 'secondary' as const
}

export const enumEnumComponentpageribbonSize = {
   small: 'small' as const,
   normal: 'normal' as const
}

export const enumEnumComponentpagehighlightAlignment = {
   right: 'right' as const,
   left: 'left' as const
}

export const enumEnumGameRating = {
   BR0: 'BR0' as const,
   BR10: 'BR10' as const,
   BR12: 'BR12' as const,
   BR14: 'BR14' as const,
   BR16: 'BR16' as const,
   BR18: 'BR18' as const
}
