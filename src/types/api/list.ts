// list api에서 주고 받는 요청값과 응답값 정의

export interface ListType {
    items: Array<ListResponse>
    // 페이징 처리 추후에
  }
  
 // request
  export interface ListRequest {
    owner?: string,
    repo?: string,
    headers?: string
  }
  
  //response
  export interface ListResponse {
    url: string
    repository_url:string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: string
    node_id: string
    number: number
    title: string
    user: userObject
    labes: []
    state: string
    locked: boolean
    assignee: string
    assignees: []
    milestone: string
    comments: number
    created_at: string
    updated_at: string
    closed_at: string
    author_association: string
    active_lock_reason: string
    body: string
    reactions: object
    timeline_url: string
    performed_via_github_app: string
    state_reason: string
  }


  export interface userObject {
    login: string
    id: string
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }