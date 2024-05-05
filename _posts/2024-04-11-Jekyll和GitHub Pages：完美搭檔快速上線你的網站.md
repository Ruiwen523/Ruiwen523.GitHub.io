---
title: Jekyll 和 GitHub Pages：完美搭檔快速上線你的網站
author: ruiwen
date: 2024-04-29 11:45:00 +0800
last_modified_at: 2024-05-05 21:47:00 +0800
categories: [Blogging, Tutorial]
tags: [Markdown, Jekyll, 靜態網站生成器]
render_with_liquid: false
---

## 引言
在當今時代，擁有一個個人網站已成為展示作品、分享思維及風格的重要工具。而傳統的網站開發和部署過程常常既複雜又耗時，這就是為什麼 **Jekyll** 和 **Github Pages**成為了許多開發者和內容創作者的首選。

## 介紹
Jekyll：
: 是一種基於 **Ruby** 的語言開發的靜態網站生成器，讓你可以使用標記語言如 **Markdown** 撰寫文章，搭配 **Liquid**[^1] 語法製作的 **HTML _Layout** 樣板，再透過簡單的命令將其轉化成靜態網頁。

GitHub Pages：
: 提供了一個免費、無需維護的平台，讓你可以直接從 **GitHub** 倉庫中托管網站，無需擔心伺服器設置或複雜的部署流程。

> 簡而言之結合上述兩項工具，並付出少量的初期建置環境成本，即可創建並且佈署你的個人部落格至網路上。
{: .prompt-tip }

## 設定前的準備
在進入到主題之前，首先確保你的環境，已經安裝好了`Ruby`與`Bundler`[^4]，這在後續維護個人網站及發布文章時很重要。

> 通過安裝 **Ruby** 的版本管理器`rbenv`[^2]或`RVM`[^3]，來安裝Ruby有其使用上的好處。
{: .prompt-tip }

### 步驟1: 於個人 Github 上創建 Repository

本部落格使用的主題是 [jekyll-theme-chirpy](https://github.com/new?template_name=chirpy-starter&template_owner=cotes2020)，透過該主題的貢獻者們提供的快速創建模板倉庫，可以快速創建一個樣板儲存庫在你的Github帳號內。

1. 創建樣板儲存庫
  - Repository name: Github帳號.github.io
  - 設定為公開 Public 儲存庫

2. 克隆你的儲存庫
  請將`<Github帳號>` 替換為讀者的個人帳號名稱
  ``` bash
  git clone https://github.com/Github帳號/Github帳號.github.io
  ```
  或是直接克隆部落格[作者](https://github.com/cotes2020/jekyll-theme-chirpy/releases/tag/v6.5.5)的Github
  ``` bash
  git clone https://github.com/cotes2020/jekyll-theme-chirpy.git
  ```
3. 安裝相依性元件
  ``` bash
  bundle install    #請先確保已安裝Ruby與Bundle，若是尚未安裝請先查看其他步驟來完成前置安裝條件。
  ```

### 步驟2: 設定Visual Studio Code
1. 安裝 VSCode：  
如果你還沒有安裝 `VSCode`，你可以從 [VSCode官方網站](https://code.visualstudio.com/download) 下載並安裝。

2. 安裝擴充元件：
在 VSCode 中，打開**延伸模組（Extensions）**，搜尋並安裝「Jekyll Snippets」元件。雖然它不直接提供 `Ruby` 語言支援，但對於 Jekyll 項目的開發依然非常有用。其他如「Markdown All in One、VSCode Snippets」還不錯用，亦可安裝。
最後打開`Ctrl + P`輸入`> Settings.json`，選擇`Preferences: Open Workspace Settings (JSON)`，並加入以下片段：
``` bash  
"[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one",
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    }
},
```

### 步驟2: 安裝Ruby
可以選擇置[Ruby官網](https://rubyinstaller.org/downloads/)安裝最新版本的Ruby並選擇帶有`Devkit`的安裝執行檔，因為`Devkit` 包含了編譯和安裝一些 `gems` 需要的工具和庫。

安裝成功後使用`ruby -v`命令檢查是否成功安裝：
``` bash
ruby -v   #ruby 3.2.3 (2024-01-18 revision 52bb2ac0a6) [x64-mingw-ucrt]
```
> 安裝過程中確保勾選**「Add Ruby executables to your PATH」**，這樣在任何命令視窗中都能呼叫到`Ruby`環境變數。
{: .prompt-tip }


### 步驟3: 安裝 Bundler 與 Jekyll
在命令行中，使用 **RubyGems** 安裝 **Bundler**。
**RubyGems** 是 **Ruby** 的套件管理器，已隨 Ruby 安裝。

``` bash
gem -v                     #3.4.19
gem install bundler jekyll #同時安裝 Bundler 與 Jekyll
bundler -v                 #Bundler version 2.4.19
jekyll -v                  #jekyll 4.3.3
```
> [附錄 B: 使用 Bundler 的好處](#附錄-b-使用-bundler-的好處)，這也是本部落格使用的方式
{: .prompt-tip }

#### 當執行發時生錯誤的解決方法
- 當在本地安裝並執行 `Jekyll -v`時，若發生找不到特定的依賴項目時，請嘗試以下幾種解決方式：

``` bash
gem install jekyll  
jekyll -v 
#成功 jekyll 4.3.3
#失敗 materialize: Could not find html-proofer-4.4.3 ...
```

- 解決方法1: 個別安裝缺失的套件
    ``` bash
    ruby -v                 #確認Ruby版本需 > 2.5.0
    gem install [gem-name]  #安裝指定套件&所需版本
    gem install html-proofer -v 4.4.3     
    jekyll -v               #完成後再次運行
    ```

- 解決方法2: 使用 **Bundler** 管理依賴  
  1. 首先在根目錄建立一個`Gemfile`沒有副檔名，接著在裡面輸入以下指令給`Bundler`用來追蹤和安裝指定版本的`gems`元件。
  ```ruby
  source "https://rubygems.org"
  gem "jekyll", "~> 4.3"
  gem 'jekyll-theme-chirpy', github: 'cotes2020/jekyll-theme-chirpy'    
  # gemspec
  group :test do
  gem "html-proofer", "~> 4.4"
  end
  # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
  # and associated library.
  platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  end
  # Performance-booster for watching directories on Windows
  gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
  # Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
  # do not have a Java counterpart.
  gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
  ```

  2. 接下來到命令視窗執行：
  ``` bash
  bundle install #自動化安裝Gemfile中列出的所有依賴，並幫助你管理這些依賴庫。
  bundler -v     #Bundler version 2.5.7
  ```
  這個命令會查看 `Gemfile`檔案，然後安裝所有列出的依賴，包括必要的版本。如果你已經有了 `Gemfile.lock` 檔案，`Bundler` 會嘗試匹配那些已鎖定的版本，保持依賴的一致性。

- 解決方法3: 重新安裝
  少數情況下重新安裝 **Jekyll** 也可以解決依賴問題。
  ``` bash
  gem uninstall jekyll
  gem install jekyll
  ```


### 步驟4: 創建一個新的 Jekyll 網站的步驟。
首先透過**終端機**切換到你的工作目錄後，開始執行下列指令：
1. 先從以下網站來挑選一個喜歡的主題Theme
- [github#jekyll-theme](https://github.com/topics/jekyll-theme)
- [jekyllthemes.io](https://jekyllthemes.io/)


2. 創建 **Jekyll** 基本環境
``` bash
jekyll new .              #創建 Jekyll 的基本設置
bundle exec jekyll serve  #透過bundle執行Jekyll網站
```

3. 修改 **Gemfile** 檔案加入主題指令
``` ruby
source "https://rubygems.org"
gem "jekyll-theme-chirpy", github: "cotes2020/jekyll-theme-chirpy"
```

4. 執行 **bundle** 指令安裝主題的依賴套件
``` ruby
bundle install
```

5. 修改 **_config.yml** 檔案
- 可參考官方 [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/_config.yml) 主題配置
``` yml
title: My Blog
subtitle: "A Jekyll blog with Chirpy theme"
description: "分享我的技术和生活"
author:
  name: "Your Name"
  avatar: "/assets/img/avatar.jpg"
  bio: "Your bio goes here"
　
social:
  email: "youremail@example.com"
  twitter: "your_twitter_handle"
  github: "your_github_handle"
　 
timezone: "Asia/Taipei"
lang: "zh-TW"
　
theme: jekyll-theme-chirpy
...
```

6. 創建文章
   1. 在 `_posts` 目錄中建立第一篇文章:
   ``` bash
   mkdir -p _posts
   touch _posts/2024-05-01-welcome-to-your-blog.md
   ```
   
   2. 在文章文件中添加以下内容：
   ``` plaintext
   ---
   title: 你的文章標題
   author: 作者
   date: 2024-05-01 11:45:00 +0800
   last_modified_at: 2024-05-01 22:00:00 +0800
   categories: [分類, 項目]
   tags: [標籤1, 標籤2]
   render_with_liquid: false
   ---
   　
   歡迎來到我的部落格！這是我的第一篇文章
   ```

7. 啟動伺服器來查看你的部落格
``` bash
bundle exec jekyll serve --livereload --open
```

> 建議從類似[步驟1](#步驟1-於個人-github-上創建-repository) 的方式來安裝 **Jekyll Theme**，否則靠 `Jekyll` 預設安裝的總是會缺少東西。
{: .prompt-warning}


## 使用 GitHub Pages 部署
- 設置 GitHub Pages 來托管你的網站：  
  1. 請開啟瀏覽器並進入到個人 Github 頁面，打開並進入[步驟1](#步驟1-於個人-github-上創建-repository)所創建的 **Github Pages** 儲存庫
  2. 點選右上角的 `Settings` 左邊選單找到並點選 `Pages` ，調整 **Source:** 為 `Github Actrions` 並點選 **Jekyll** 的 `Configure`
  3. 上述動作會在你的儲存庫的 `main` 分支中創建一個 Repository.Github.io/.github/workflows/`jekyll.yml` 並點選 `Commit changes...` 提交
  4. 切換至 Actions 頁籤 靜待 builds & depoly 完成 即可在 Github 上看見你的部落格網站執行起來
  5. 將 **.github/workflows** 目錄中其他冗餘的 `.yml檔` 移除，使部署更為輕量和高效。

> 通常你的 GitHub Pages 網站超連結會是 https://yourusername.github.io/。
{: .prompt-tip }

- 每次 `git push` 都會觸發 GitHub Actions
通過以上步驟配置好 Github Actions 工作流程後，後續你的每一次 `git push` 都會自動觸發 **.github/workflows/jekyll.yml**文件，從而自動部署 Jekyll 網站。使讀者能夠更加專心在創建並維護您的文章上，而不需要擔心部屬問題。

## 結論
透過本文介紹的步驟和方法，你可以輕鬆使用Jekyll 和GitHub Pages 建立和部署個人部落格或專案網站。在文中，我們涵蓋了從選擇主題、設定Jekyll 專案環境、推送到GitHub、配置GitHub Pages 以及優化部署的全流程內容。

- 快速部署：  
  借助 GitHub Pages 和 GitHub Actions 的強大功能，你可以實現自動化建置和部署，讓你無需關心複雜的伺服器設定和管理問題，從而能夠專注於內容創作和專案維護。
- 優化工作流程：  
  透過合理使用 .github/workflows 中的工作流程文件，你的每次git push都會觸發自動部署，使得你的部落格保持更新，並讓你能夠更加專注於創建和維護你的文章。
- 自訂網域支援：  
  你可以輕鬆地將自訂網域綁定到你的 GitHub Pages 網站上，為你的個人網站增添專業感。

---

## 附錄 A: 如何移除現有環境
為了重頭來過進行本篇文章介紹，所以移除現有環境，再來一次。
``` bash
gem uninstall jekyll bundler    #移除 Jekyll 和 Bundler
gem list                        #查看現有gem 所安裝的所有項目
gem uninstall [gem-name]        #搭配第2行提供的指令 一次移除一種
gem uninstall --all             #將gems一次全部清理
gem cleanup                     #清理gem在安裝過程中遺留的暫存檔
rvm remove [ruby-version]       #移除Ruby環境方式1 (如果使用rvm來管理ruby的話)
rbenv uninstall [ruby-version]  #移除Ruby環境方式2 (如果使用rbenv來管理ruby的話)
rm -rf ~/.rbenv                 #從home目錄中刪除 rbenv 和任何插件
source ~/.bashrc                #或者 source ~/.zshrc
rvm implode                     #移除RVM Ruby版本管理器 (可直接跳過5、6行，直接執行)
```

## [附錄 B: 使用 Bundler 的好處](#步驟3-安裝-bundler-與-jekyll)
- 依賴解析：Bundler 可以自動解析和安裝項目所需的所有依賴，並處理任何版本衝突。這避免了手動安裝和更新依賴時可能出現的錯誤。
- 一致的環境：Bundler 確保所有開發和部署環境中使用的依賴保持一致。這通過 Gemfile.lock 文件實現，該文件記錄了解析後的依賴樹及其確切版本。
- 自動化與易於配置：使用 Gemfile 使得管理依賴變得容易，支持豐富的選項來定義依賴的來源和版本。Bundler 的命令也支持各種自動化場景，如持續集成 (CI) 環境。
- 隔離依賴：Bundler 允許你在不同項目之間隔離 gems，避免版本衝突。每個項目可以有其專屬的依賴集，不受其他項目影響。
總之，使用 Bundler 管理 Ruby 項目的依賴可以大幅度提升開發和部署的效率和可靠性。它是處理複雜依賴情況的首選工具，尤其是在多人協作和大型項目中。

### 腳註
[^1]: Liquid 是一種開源的模板語言，由Shopify 開發。它被廣泛用於載入動態內容，主要透過插值和標籤來實現，這使得使用者能夠在模板中插入變數、循環和邏輯控制結構。 Liquid 語法簡單直觀，易於學習，適合用來產生客製化的顯示輸出。
[^2]: 如果你需要一個輕量級且不干擾系統的工具，或者你是 Ruby 新手希望簡化環境管理，rbenv 是一個很好的選擇。
[^3]: 如果你是一個需要管理多個複雜專案，或者需要高度定制你的 Ruby 環境的資深 Ruby 開發者，則 RVM 可能更適合你，特別是其 gemsets 功能可以幫助你更好地隔離和管理不同項目的依賴。
[^4]: Bundler 提供了多個關鍵好處，特別是在管理 Ruby 應用的依賴時：

