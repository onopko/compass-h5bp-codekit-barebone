# Compass H5bp Codekit Barebone

Compass H5bp Codekit Barebone は [Codekit](https://incident57.com/codekit/) のために用意したHTML5フロントエンド テンプレートです。

[HTML5 Boilerplate](http://html5boilerplate.com/) をベースとし、 [Compass H5bp](https://github.com/sporkd/compass-h5bp) による Compass への最適化の他、有用なライブラリや様々な Tips を含んでいます。
ダウンロードしてすぐに Codekit による Compass + Sass (Scss) コーディングを開始できることを目的としています。


## フレームワークとライブラリ

* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [Compass H5bp](https://github.com/sporkd/compass-h5bp)
* [CssUserAgent (cssua.js)](http://cssuseragent.org)
* [Google Analytics Social Tracking](https://code.google.com/p/analytics-api-samples/source/browse/trunk/src/tracking/javascript/v5/social/ga_social_tracking.js)


## 特徴

* Compass の環境設定済み。
* Codekit の環境設定済み。
* CssUserAgent による User Agent の判別処理を追加済み。
* Facebook, Twitter, Google+ のソーシャル プラグイン コードを設定済み。
* Google Analytics による Facebook および Twitter のソーシャル トラッキングを設定済み。
* Facebook og タグを設置済み。
* Twitter Card タグを設置済み。
* “[Adobe Blank](http://sourceforge.net/adobe/adobe-blank/)” webfonts の追加、 (S)CSS ([_base.scss](https://github.com/onopko/compass-h5bp-codekit-barebone/blob/master/assets/scss/base.scss)) へ @font-family プロパティを設定済み。
* browserconfig.xml および関連ファイルを追加済み。
* rel="logo" 設定済み。


## 使用方法

1. [ZIP をダウンロード](https://github.com/onopko/compass-h5bp-codekit-barebone/archive/master.zip)して解凍してください。
2. 解凍したフォルダを任意の場所に設置し、必要であればフォルダ名も変更してください。
3. Codekit へドロップしてください。
4. That’s it!


## 設定済みのCompass環境設定

```ruby
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/scss"
images_dir = "assets/images"
javascripts_dir = "assets/js"
fonts_dir = "assets/fonts"

output_style = :compressed

color_output = false

preferred_syntax = :scss
```

## SCSSファイルの構成

* /assets/scss/h5bp/
* /assets/scss/_h5bp.scss

Compass-h5bp の構成ディレクトリ & ファイルです。編集の必要はありません。

---

* /assets/scss/base.scss

Compass-h5bp の構成ファイル群の読み込み、およびレイアウト・タイポグラフィに関わる最低限の設定を追加しています。
Compass によるコンパイルにより、 CSS フォルダへ base.css が出力されます。

---

* /assets/scss/core.scss

デフォルト設定では _common.scss を読み込み、コンパイルにより CSS フォルダ内に core.css を出力します。自作したその他の _XXXXXX.scss ファイルを @import 指定することで core.css へ統合・圧縮することが可能です。


## JavaScriptファイルの構成

* /assets/js/vendor/

各種ライブラリを含んでいます。編集の必要はありません。

---

* /assets/js/_plugins.js

jQuery プラグインをまとめて記述することを想定したファイルです。

---

* /assets/js/base.js

/assets/js/vendor/ga_social_tracking.js, /assets/js/vendor/cssua.min.js, /assets/js/_plugins.js を統合・圧縮し、コンパイルにより base.min.js を出力します。

---

* /assets/js/core.js

各種処理を記述するメインファイルの想定です。


## License

* [HTML5 Boilerplate](http://html5boilerplate.com/), created by Paul Irish and Divya Manian.
* [Compass H5bp](https://github.com/sporkd/compass-h5bp), created by Peter Gumeson.
* [CssUserAgent (cssua.js)](http://cssuseragent.org), created by Peter Gumeson.
* [Adobe Blank](http://sourceforge.net/adobe/adobe-blank/), created by Adobe Systems Incorporated.

Copyright (c) 2014 Takehiko Ono. See [LICENSE](https://github.com/onopko/compass-h5bp-codekit-barebone/blob/master/LICENSE.md) for full license.
