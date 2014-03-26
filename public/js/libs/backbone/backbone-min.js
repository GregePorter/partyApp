




<!DOCTYPE html>
<html class="  ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>backbone/backbone-min.js at master · amdjs/backbone</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="amdjs/backbone" name="twitter:title" /><meta content="AMD-enabled fork of documentcloud/backbone" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/794713?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/794713?s=400" property="og:image" /><meta content="amdjs/backbone" property="og:title" /><meta content="https://github.com/amdjs/backbone" property="og:url" /><meta content="AMD-enabled fork of documentcloud/backbone" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D869FA32:5ADF:1054B5D:53333535" name="octolytics-dimension-request_id" /><meta content="1661105" name="octolytics-actor-id" /><meta content="GregePorter" name="octolytics-actor-login" /><meta content="605e413eba59033561aa7a6640863eda816dbe7e0d92c97fc0ac9e90208c7d04" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="qF7Oa6mvU2ysa2F/dKCekfWEFC0Qki+0WeGdEbUBOL0=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-936df947d4d11d156f5b768aeb94946607c1d8b6.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-11b1607ffc2b820d8f390e56501ed74836813bb2.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-f701de3dc7560fa3d6dbe44075b45bb6c8525d19.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a651166e4a9969283e5ed3a2617d3e0c80bbac78.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="0a31c60b72e477818e84687f99d51e3c">

        <link data-pjax-transient rel='permalink' href='/amdjs/backbone/blob/47e136947fc97c2f21f24aa339271194c6143dc4/backbone-min.js'>

  <meta name="description" content="AMD-enabled fork of documentcloud/backbone" />

  <meta content="794713" name="octolytics-dimension-user_id" /><meta content="amdjs" name="octolytics-dimension-user_login" /><meta content="3167605" name="octolytics-dimension-repository_id" /><meta content="amdjs/backbone" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="952189" name="octolytics-dimension-repository_parent_id" /><meta content="jashkenas/backbone" name="octolytics-dimension-repository_parent_nwo" /><meta content="952189" name="octolytics-dimension-repository_network_root_id" /><meta content="jashkenas/backbone" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/amdjs/backbone/commits/master.atom" rel="alternate" title="Recent Commits to backbone:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public fork page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="GregePorter"
      data-repo="amdjs/backbone"
      data-branch="master"
      data-sha="6c83d58e12b08afcf15e2f3be1252f4f30cc9434"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="amdjs/backbone" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/GregePorter" class="name">
        <img alt="GregePorter" class=" js-avatar" data-user="1661105" height="20" src="https://avatars2.githubusercontent.com/u/1661105?s=140" width="20" /> GregePorter
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="amdjs/backbone">This repository</span>
    </li>
      <li>
        <a href="/amdjs/backbone/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="qF7Oa6mvU2ysa2F/dKCekfWEFC0Qki+0WeGdEbUBOL0=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3167605" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/amdjs/backbone/watchers">
        77
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/amdjs/backbone/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar amdjs/backbone" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/amdjs/backbone/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star amdjs/backbone" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/amdjs/backbone/stargazers">
        671
      </a>
  </div>

  </li>


        <li>
          <a href="/amdjs/backbone/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of amdjs/backbone to your account" aria-label="Fork your own copy of amdjs/backbone to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/amdjs/backbone/network" class="social-count">3,830</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author">
            <a href="/amdjs" class="url fn" itemprop="url" rel="author"><span itemprop="title">amdjs</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/amdjs/backbone" class="js-current-repository js-repo-home-link">backbone</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/jashkenas/backbone">jashkenas/backbone</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/amdjs/backbone" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /amdjs/backbone">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/amdjs/backbone/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /amdjs/backbone/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/amdjs/backbone/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /amdjs/backbone/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/amdjs/backbone/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /amdjs/backbone/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/amdjs/backbone/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /amdjs/backbone/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/amdjs/backbone/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /amdjs/backbone/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/amdjs/backbone/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /amdjs/backbone/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/amdjs/backbone.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/amdjs/backbone.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:amdjs/backbone.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:amdjs/backbone.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/amdjs/backbone" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/amdjs/backbone" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save amdjs/backbone to your computer and use it in GitHub Desktop." aria-label="Save amdjs/backbone to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/amdjs/backbone/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download amdjs/backbone as a zip file"
                   title="Download amdjs/backbone as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2bd5489ef06a422803c92a0e5f887cd3 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/amdjs/backbone/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/blob/gh-pages/backbone-min.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/blob/master/backbone-min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/1.1.0/backbone-min.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/1.0.0/backbone-min.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.10/backbone-min.js"
                 data-name="0.9.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.10">0.9.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.9/backbone-min.js"
                 data-name="0.9.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.9">0.9.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.2/backbone-min.js"
                 data-name="0.9.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.2">0.9.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.1/backbone-min.js"
                 data-name="0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.1">0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.9.0/backbone-min.js"
                 data-name="0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.9.0">0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.3/backbone-min.js"
                 data-name="0.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.3">0.5.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.2/backbone-min.js"
                 data-name="0.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.2">0.5.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.1/backbone-min.js"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.5.0/backbone-min.js"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.3/backbone-min.js"
                 data-name="0.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.3">0.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.2/backbone-min.js"
                 data-name="0.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.2">0.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.1/backbone-min.js"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.3.0/backbone-min.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.2.0/backbone-min.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.1.2/backbone-min.js"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.1.1/backbone-min.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/amdjs/backbone/tree/0.1.0/backbone-min.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amdjs/backbone" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backbone</span></a></span></span><span class="separator"> / </span><strong class="final-path">backbone-min.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backbone-min.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="James Burke" class="main-avatar js-avatar" data-user="73359" height="24" src="https://avatars3.githubusercontent.com/u/73359?s=140" width="24" />
    <span class="author"><a href="/jrburke" rel="author">jrburke</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-10-15T22:47:34-07:00" title="2013-10-16 13:47:34">October 15, 2013</time>
    <div class="commit-title">
        <a href="/amdjs/backbone/commit/47e136947fc97c2f21f24aa339271194c6143dc4" class="message" data-pjax="true" title="Merge tag &#39;1.1.0&#39; of git://github.com/documentcloud/backbone

Conflicts:
	backbone-min.js
	backbone-min.map">Merge tag '1.1.0' of git://github.com/documentcloud/backbone</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>6</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="jashkenas" href="/amdjs/backbone/commits/master/backbone-min.js?author=jashkenas"><img alt="Jeremy Ashkenas" class=" js-avatar" data-user="4732" height="20" src="https://avatars0.githubusercontent.com/u/4732?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jrburke" href="/amdjs/backbone/commits/master/backbone-min.js?author=jrburke"><img alt="James Burke" class=" js-avatar" data-user="73359" height="20" src="https://avatars3.githubusercontent.com/u/73359?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="iros" href="/amdjs/backbone/commits/master/backbone-min.js?author=iros"><img alt="Irene Ros" class=" js-avatar" data-user="18690" height="20" src="https://avatars0.githubusercontent.com/u/18690?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tgriesser" href="/amdjs/backbone/commits/master/backbone-min.js?author=tgriesser"><img alt="Tim Griesser" class=" js-avatar" data-user="154748" height="20" src="https://avatars1.githubusercontent.com/u/154748?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mostly-magic" href="/amdjs/backbone/commits/master/backbone-min.js?author=mostly-magic"><img alt="Mitchell Cowie" class=" js-avatar" data-user="735046" height="20" src="https://avatars0.githubusercontent.com/u/735046?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="diegotres" href="/amdjs/backbone/commits/master/backbone-min.js?author=diegotres"><img alt="Diego Tres" class=" js-avatar" data-user="39059" height="20" src="https://avatars1.githubusercontent.com/u/39059?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jeremy Ashkenas" class=" js-avatar" data-user="4732" height="24" src="https://avatars0.githubusercontent.com/u/4732?s=140" width="24" />
            <a href="/jashkenas">jashkenas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="James Burke" class=" js-avatar" data-user="73359" height="24" src="https://avatars3.githubusercontent.com/u/73359?s=140" width="24" />
            <a href="/jrburke">jrburke</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Irene Ros" class=" js-avatar" data-user="18690" height="24" src="https://avatars0.githubusercontent.com/u/18690?s=140" width="24" />
            <a href="/iros">iros</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tim Griesser" class=" js-avatar" data-user="154748" height="24" src="https://avatars1.githubusercontent.com/u/154748?s=140" width="24" />
            <a href="/tgriesser">tgriesser</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mitchell Cowie" class=" js-avatar" data-user="735046" height="24" src="https://avatars0.githubusercontent.com/u/735046?s=140" width="24" />
            <a href="/mostly-magic">mostly-magic</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Diego Tres" class=" js-avatar" data-user="39059" height="24" src="https://avatars1.githubusercontent.com/u/39059?s=140" width="24" />
            <a href="/diegotres">diegotres</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>2 lines (2 sloc)</span>
          <span class="meta-divider"></span>
        <span>19.651 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/amdjs/backbone/edit/master/backbone-min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/amdjs/backbone/raw/master/backbone-min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/amdjs/backbone/blame/master/backbone-min.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/amdjs/backbone/commits/master/backbone-min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/amdjs/backbone/delete/master/backbone-min.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'>(function(t,e){if(typeof exports!==&quot;undefined&quot;){e(t,exports,require(&quot;underscore&quot;))}else if(typeof define===&quot;function&quot;&amp;&amp;define.amd){define([&quot;underscore&quot;,&quot;jquery&quot;,&quot;exports&quot;],function(i,r,s){t.Backbone=e(t,s,i,r)})}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION=&quot;1.1.0&quot;;e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,&quot;on&quot;,t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,&quot;once&quot;,t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,&quot;off&quot;,t,[e,r]))return this;if(!t&amp;&amp;!e&amp;&amp;!r){this._events={};return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h&lt;u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l&lt;f;l++){n=a[l];if(e&amp;&amp;e!==n.callback&amp;&amp;e!==n.callback._callback||r&amp;&amp;r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,&quot;trigger&quot;,t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&amp;&amp;!r;if(!r&amp;&amp;typeof e===&quot;object&quot;)r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i===&quot;object&quot;){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a&lt;o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r&lt;s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r&lt;s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r&lt;s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r&lt;s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r&lt;s)(i=t[r]).callback.apply(i.ctx,e)}};var d={listenTo:&quot;on&quot;,listenToOnce:&quot;once&quot;};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId(&quot;l&quot;));n[a]=e;if(!s&amp;&amp;typeof r===&quot;object&quot;)s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(&quot;c&quot;);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,&quot;defaults&quot;));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:&quot;id&quot;,initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t===&quot;object&quot;){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=true;for(var f=0,d=o.length;f&lt;d;f++){this.trigger(&quot;change:&quot;+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){this._pending=false;this.trigger(&quot;change&quot;,this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger(&quot;sync&quot;,e,i,t)};q(this,t);return this.sync(&quot;read&quot;,this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t===&quot;object&quot;){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&amp;&amp;!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&amp;&amp;r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&amp;&amp;!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger(&quot;sync&quot;,h,t,r)};q(this,r);n=this.isNew()?&quot;create&quot;:r.patch?&quot;patch&quot;:&quot;update&quot;;if(n===&quot;patch&quot;)r.attrs=s;a=this.sync(n,this,r);if(s&amp;&amp;r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger(&quot;destroy&quot;,e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger(&quot;sync&quot;,e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync(&quot;delete&quot;,this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,&quot;urlRoot&quot;)||i.result(this.collection,&quot;url&quot;)||M();if(this.isNew())return t;return t+(t.charAt(t.length-1)===&quot;/&quot;?&quot;&quot;:&quot;/&quot;)+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger(&quot;invalid&quot;,this,r,i.extend(e,{validationError:r}));return false}});var v=[&quot;keys&quot;,&quot;values&quot;,&quot;pairs&quot;,&quot;invert&quot;,&quot;pick&quot;,&quot;omit&quot;];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s&lt;n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger(&quot;remove&quot;,o,this,e)}this._removeReference(o)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&amp;&amp;c==null&amp;&amp;e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&amp;&amp;b&amp;&amp;x?[]:false;for(s=0,n=t.length;s&lt;n;s++){h=t[s];if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&amp;&amp;!l&amp;&amp;u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);o.on(&quot;all&quot;,this._onModelEvent,this);this._byId[o.cid]=o;if(o.id!=null)this._byId[o.id]=o}if(E)E.push(u||o)}if(x){for(s=0,n=this.length;s&lt;n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&amp;&amp;E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s&lt;n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s&lt;n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s&lt;n;s++){(o=g[s]).trigger(&quot;add&quot;,o,this,e)}if(l||E&amp;&amp;E.length)this.trigger(&quot;sort&quot;,this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r&lt;s;r++){this._removeReference(this.models[r])}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger(&quot;reset&quot;,this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?&quot;find&quot;:&quot;filter&quot;](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error(&quot;Cannot sort a set without a comparator&quot;);t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger(&quot;sort&quot;,this,t);return this},pluck:function(t){return i.invoke(this.models,&quot;get&quot;,t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?&quot;reset&quot;:&quot;set&quot;;r[s](i,t);if(e)e(r,i,t);r.trigger(&quot;sync&quot;,r,i,t)};q(this,t);return this.sync(&quot;read&quot;,this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(i.wait)r.add(t,i);if(s)s(t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger(&quot;invalid&quot;,this,r.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off(&quot;all&quot;,this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t===&quot;add&quot;||t===&quot;remove&quot;)&amp;&amp;i!==this)return;if(t===&quot;destroy&quot;)this.remove(e,r);if(e&amp;&amp;t===&quot;change:&quot;+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=[&quot;forEach&quot;,&quot;each&quot;,&quot;map&quot;,&quot;collect&quot;,&quot;reduce&quot;,&quot;foldl&quot;,&quot;inject&quot;,&quot;reduceRight&quot;,&quot;foldr&quot;,&quot;find&quot;,&quot;detect&quot;,&quot;filter&quot;,&quot;select&quot;,&quot;reject&quot;,&quot;every&quot;,&quot;all&quot;,&quot;some&quot;,&quot;any&quot;,&quot;include&quot;,&quot;contains&quot;,&quot;invoke&quot;,&quot;max&quot;,&quot;min&quot;,&quot;toArray&quot;,&quot;size&quot;,&quot;first&quot;,&quot;head&quot;,&quot;take&quot;,&quot;initial&quot;,&quot;rest&quot;,&quot;tail&quot;,&quot;drop&quot;,&quot;last&quot;,&quot;without&quot;,&quot;difference&quot;,&quot;indexOf&quot;,&quot;shuffle&quot;,&quot;lastIndexOf&quot;,&quot;isEmpty&quot;,&quot;chain&quot;];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=[&quot;groupBy&quot;,&quot;countBy&quot;,&quot;sortBy&quot;];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId(&quot;view&quot;);t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=[&quot;model&quot;,&quot;collection&quot;,&quot;el&quot;,&quot;id&quot;,&quot;attributes&quot;,&quot;className&quot;,&quot;tagName&quot;,&quot;events&quot;];i.extend(w.prototype,u,{tagName:&quot;div&quot;,$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,&quot;events&quot;))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=&quot;.delegateEvents&quot;+this.cid;if(a===&quot;&quot;){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(&quot;.delegateEvents&quot;+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,&quot;attributes&quot;));if(this.id)t.id=i.result(this,&quot;id&quot;);if(this.className)t[&quot;class&quot;]=i.result(this,&quot;className&quot;);var r=e.$(&quot;&lt;&quot;+i.result(this,&quot;tagName&quot;)+&quot;&gt;&quot;).attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,&quot;el&quot;),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:&quot;json&quot;};if(!s.url){a.url=i.result(r,&quot;url&quot;)||M()}if(s.data==null&amp;&amp;r&amp;&amp;(t===&quot;create&quot;||t===&quot;update&quot;||t===&quot;patch&quot;)){a.contentType=&quot;application/json&quot;;a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType=&quot;application/x-www-form-urlencoded&quot;;a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&amp;&amp;(n===&quot;PUT&quot;||n===&quot;DELETE&quot;||n===&quot;PATCH&quot;)){a.type=&quot;POST&quot;;if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader(&quot;X-HTTP-Method-Override&quot;,n);if(o)return o.apply(this,arguments)}}if(a.type!==&quot;GET&quot;&amp;&amp;!s.emulateJSON){a.processData=false}if(a.type===&quot;PATCH&quot;&amp;&amp;k){a.xhr=function(){return new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger(&quot;request&quot;,r,h,s);return h};var k=typeof window!==&quot;undefined&quot;&amp;&amp;!!window.ActiveXObject&amp;&amp;!(window.XMLHttpRequest&amp;&amp;(new XMLHttpRequest).dispatchEvent);var T={create:&quot;POST&quot;,update:&quot;PUT&quot;,patch:&quot;PATCH&quot;,&quot;delete&quot;:&quot;DELETE&quot;,read:&quot;GET&quot;};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var S=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(S.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=&quot;&quot;}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);s&amp;&amp;s.apply(n,a);n.trigger.apply(n,[&quot;route:&quot;+r].concat(a));n.trigger(&quot;route&quot;,r,a);e.history.trigger(&quot;route&quot;,n,r,a)});return this},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,&quot;routes&quot;);var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,&quot;\\$&amp;&quot;).replace($,&quot;(?:$1)?&quot;).replace(H,function(t,e){return e?t:&quot;([^/]+)&quot;}).replace(A,&quot;(.*?)&quot;);return new RegExp(&quot;^&quot;+t+&quot;$&quot;)},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t){return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,&quot;checkUrl&quot;);if(typeof window!==&quot;undefined&quot;){this.location=window.location;this.history=window.history}};var O=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var C=/msie [\w.]+/;var j=/\/$/;var R=/[?#].*$/;N.started=false;i.extend(N.prototype,u,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:&quot;&quot;},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(j,&quot;&quot;);if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(O,&quot;&quot;)},start:function(t){if(N.started)throw new Error(&quot;Backbone.history has already been started&quot;);N.started=true;this.options=i.extend({root:&quot;/&quot;},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&amp;&amp;this.history&amp;&amp;this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=C.exec(navigator.userAgent.toLowerCase())&amp;&amp;(!s||s&lt;=7);this.root=(&quot;/&quot;+this.root+&quot;/&quot;).replace(P,&quot;/&quot;);if(n&amp;&amp;this._wantsHashChange){this.iframe=e.$(&#39;&lt;iframe src=&quot;javascript:0&quot; tabindex=&quot;-1&quot; /&gt;&#39;).hide().appendTo(&quot;body&quot;)[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on(&quot;popstate&quot;,this.checkUrl)}else if(this._wantsHashChange&amp;&amp;&quot;onhashchange&quot;in window&amp;&amp;!n){e.$(window).on(&quot;hashchange&quot;,this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var a=this.location;var o=a.pathname.replace(/[^\/]$/,&quot;$&amp;/&quot;)===this.root;if(this._wantsHashChange&amp;&amp;this._wantsPushState){if(!this._hasPushState&amp;&amp;!o){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+&quot;#&quot;+this.fragment);return true}else if(this._hasPushState&amp;&amp;o&amp;&amp;a.hash){this.fragment=this.getHash().replace(O,&quot;&quot;);this.history.replaceState({},document.title,this.root+this.fragment+a.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off(&quot;popstate&quot;,this.checkUrl).off(&quot;hashchange&quot;,this.checkUrl);clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&amp;&amp;this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||&quot;&quot;));t=t.replace(R,&quot;&quot;);if(this.fragment===t)return;this.fragment=t;if(t===&quot;&quot;&amp;&amp;i!==&quot;/&quot;)i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?&quot;replaceState&quot;:&quot;pushState&quot;]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&amp;&amp;t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,&quot;&quot;);t.replace(r+&quot;#&quot;+e)}else{t.hash=&quot;#&quot;+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&amp;&amp;i.has(t,&quot;constructor&quot;)){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=S.extend=w.extend=N.extend=U;var M=function(){throw new Error(&#39;A &quot;url&quot; property or function must be specified&#39;)};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger(&quot;error&quot;,t,r,e)}};return e});</div><div class='line' id='LC2'>//@ sourceMappingURL=backbone-min.map</div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04925s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

