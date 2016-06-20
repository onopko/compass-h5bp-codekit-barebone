# Compass H5BP CodeKit Barebone

Compass H5BP CodeKit Barebone は [CodeKit](https://incident57.com/codekit/) のために用意したHTML5フロントエンド テンプレートです。

[HTML5 Boilerplate](http://html5boilerplate.com/) をベースとし、 [Compass H5BP](https://github.com/sporkd/compass-h5bp) による Compass 対応 CSS への最適化の他、有用なライブラリや様々な Tips を含んでいます。
ダウンロードしてすぐに CodeKit による Compass + Sass コーディングを開始できることを目的としています。


## システム要件

* [CodeKit](https://incident57.com/codekit/)
* [Bower](http://bower.io)


## 特徴

* CodeKit の環境設定済み。
* Compass の環境設定済み。
* bower.json によるリソース管理。
* .css{user:agent;} と Underscore.js を組み込み済み。
* Facebook, Twitter, Google+ のソーシャル プラグイン コードを設定済み。
* Google Analytics による Facebook および Twitter のソーシャル トラッキングを設定済み。
* Facebook og タグを設置済み。
* Twitter Card タグを設置済み。
* “[Adobe Blank](http://sourceforge.net/adobe/adobe-blank/)” Webフォント の追加、 (S)CSS ([base.scss](https://github.com/onopko/compass-h5bp-codekit-barebone/blob/master/assets/scss/base.scss)) へ @font-family プロパティを設定済み。
* Webクリップ (apple-touch-icon.png, browserconfig.xml) の設定および関連ファイルを追加済み。
* rel="logo" 設定済み。


## 使用方法

0. CodeKit および Bower をインストールし、システム要件を満たしてください。
1. [ZIP をダウンロード](https://github.com/onopko/compass-h5bp-codekit-barebone/archive/master.zip) して解凍してください。
2. CodeKit へドロップしてください。
3. That’s it!


## 設定済みのCompass環境設定

```ruby
http_path        = "/"
css_dir          = "htdocs/assets/css"
sass_dir         = "htdocs/assets/scss"
images_dir       = "htdocs/assets/images"
javascripts_dir  = "htdocs/assets/js"
fonts_dir        = "htdocs/assets/fonts"
httpimagespath   = "assets/images"

output_style     = :compressed

relative_assets  = false

color_output     = false

preferred_syntax = :scss

sass_options     = { :debug_info => true }
```

## SCSSファイルの構成

* /assets/scss/core.scss

_common, _plugins, _component, _utility, _project を統合します。

---

* /assets/scss/_common.scss

Compass, An HTML5 Boilerplate Extension for Compass, Normalize.scss のインポート、およびレイアウト・タイポグラフィに関わる最低限の設定を追加しています。


## JavaScriptファイルの構成

* /assets/js/vendor/*.js

各種ライブラリを含んでいます。編集の必要はありません。
Bower 管理下にある jQuery および Modernizr の出力を行います。

---

* /assets/js/plugins.js

jQuery プラグインのインクルード・記述を想定したファイルです。
CodeKit による .css{user:agent;} および Underscore.js のインクルード設定を記入済みです。

---

* /assets/js/core.js

各種処理を記述するメインファイルを記述します。


## License

* [HTML5 Boilerplate](http://html5boilerplate.com/), created by HTML5 Boilerplate.
* [An HTML5 Boilerplate Extension for Compass](https://github.com/sporkd/compass-h5bp), created by Peter Gumeson.
* [.css{user:agent;}](https://github.com/mckamey/cssuseragent), created by Stephen M. McKamey.
* [normalize-scss](https://github.com/JohnAlbin/normalize-scss), created by Nicolas Gallagher and Jonathan Neal and John Albin Wilkins.
* [underscore.js](https://github.com/jashkenas/underscore), created by Jeremy Ashkenas.
* [Adobe Blank](http://sourceforge.net/adobe/adobe-blank/), created by Adobe Systems Incorporated.

Copyright (c) 2015 Takehiko Ono. See [LICENSE](https://github.com/onopko/compass-h5bp-codekit-barebone/blob/master/LICENSE.md) for full license.
