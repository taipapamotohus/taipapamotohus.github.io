var data = [
{
url: "/post/beamer_movie/",
title: "beamerでスライド原稿用pdfを作成する（その2）動画が走るスライド原稿を作る",
content: "[実は，同じような内容について2010年に，TeX QA に投稿しているが，その後現在に至るまで使い続けることができており，一応，こちらでもまとめておくことにした． beamerで動画が走るスライド原稿を作る 前述した ，TeX QA に経緯は投稿してあるので，詳細はそちらを読んでいただきたい． 参考にしたのは，Adobeのpdfのマニュアル（DVI specials for PDF generation） https://www.tug.org/TUGboat/tb30-1/tb94cho.pdf の以下の部分 3 Annotations An annotation is considered as an object with a location on a page. The type of the object is given by the value of the key `/Subtype&#39;, for instance, `/Text&#39;, `/Link&#39;, `/Sound&#39;, `/Movie&#39;, etc. (See [1, p. 615] for the list of all annotation types.) The location is given by an array object associated to the key `/Rect&#39;. DVIPDFM(x) provides the following special command for annotations............ The following example shows a movie annotation that enables us to run the movie file ‘mymovie.avi’ inside a PDF viewer program. \special{pdf:ann bbox 0 0 360 180 &amp;lt;&amp;lt; /Subtype /Movie /Border [1 0 0] /T (My Movie) /Movie &amp;lt;&amp;lt; /F (mymovie.avi) /Aspect [720 360] /Poster true &amp;gt;&amp;gt; /A &amp;lt;&amp;lt; /ShowControls false &amp;gt;&amp;gt; &amp;gt;&amp;gt;} アスペクト比やコントロールバーの有無，リピートするかどうかなども指示できる（下記参照） mymovie.aviのところに動かしたい動画を記入（パスも効く） 私の作成したものは読んでいただければおわかりのように，非常にダサいベタ書きである． 最近の書き方は以下の通りで，もっぱら，mov形式の画像を使用している．コンテナがaviやwmvだと動かないが，Mac以外でどうなるのかは不明．そういえば，Windowsで試したことはなかった&amp;hellip;.. { \usebackgroundtemplate{\put(20, -265){\includegraphics[scale=0.45]{/Data/.../..../Figures/hogefuga.pdf}}} \begin{frame} \frametitle{hogefugaの対策} \special{pdf:ann bbox -10 -130 320 90 &amp;lt;&amp;lt; /Subtype /Movie /Border [0 0 1] /T (My Movie) /Movie &amp;lt;&amp;lt; /F (/Data/.../hogefuga.mov) %/Aspect [720 480] /Aspect [640 480] /Poster false &amp;gt;&amp;gt; /A &amp;lt;&amp;lt; /ShowControls true /Mode /Repeat &amp;gt;&amp;gt; &amp;gt;&amp;gt;} \end{frame} } \usebackgroundtemplateの部分には動画のキャプチャー画像を貼り付けておく．なにもないと，動画が動き出す前の画面が空白になってしまう（もっと良い方法があれば，どなたかご教示ください）． 動画の大きさはbboxで，かぶせる静止画の大きさはscaleで調整する． プレゼンテーションにskimを使うと動画が動かないので注意． Adobe Acrobat Readerでプレゼンすれば，動画は動くし，音もでる．コントロールバーにより早送りなども可能． 最初にpdfで動画をクリックすると「セキュリティ上の問題．．．」というメッセージが表示される．この横にあるオプションボタンをクリックして，信頼するを選択すれば，動画が動くようになる．]"
}
,{
url: "/post/beamer/",
title: "beamerでスライド原稿用pdfを作成する（その１）",
content: "[beamerによるスライド原稿の作成 基本的には，通常のLaTeX文書と同じである．実際のスライド原稿を見てもらうほうが早いであろう．以下のtexファイルを作成し，beamer_test.texと名付け，保存する．Editorは何でも良いが，やはり，Emacsのauctexを使うと補完などあり，便利である． 下記のファイルには多少コメントを付けた．フォントの指定は自明．themeは山のようにあるので，ググって好きなものを使う． なお， \usefonttheme{professionalfonts} を入れているのは，これを入れないと，beamer は数式フォントとして sans に指定されたフォントを使うように内部で変更するからで，これを入れるとこの変更を無効にできる．数式がヒラギノになると間抜けである．昔，TeX QAで教えていただいた．参考：beamerでの数式フォントの変更 また，いろいろ余分なパッケージも読み込んでいるが，必要なときに書き込めば良く，不要なら削除する． % -*-coding:utf-8-*- \documentclass[svgnames, table, 14pt]{beamer} \usepackage{zxjatype} \usepackage[hiragino-dx]{zxjafont} % ヒラギノ角ゴ Proを使う \setjamainfont[Scale=0.95,BoldFont=ヒラギノ角ゴ Pro W6]{ヒラギノ角ゴ Pro W3} \setjasansfont[Scale=0.95,BoldFont=ヒラギノ角ゴ Pro W6]{ヒラギノ角ゴ Pro W3} % themeを指定する \usetheme{Darmstadt} \usefonttheme[onlylarge]{structurebold} \setbeamerfont*{frametitle}{size=\large,series=\bfseries} \setbeamertemplate{navigation symbols}{} \usepackage[english]{babel} \usepackage[latin1]{inputenc} \usepackage{times} \usepackage[T1]{fontenc} \usepackage{hyperref} % Setup TikZ \usepackage{tikz} \usetikzlibrary{arrows} \tikzstyle{block}=[draw opacity=0.7,line width=1.4cm] % Figure position \usepackage[absolute,overlay]{textpos} % math \usepackage{mathabx} \usefonttheme{professionalfonts} % Author, Title, etc. \title[hoge/fugaによる相補的な治療における高難度症例の治療と成績] {hoge/fugaによる相補的な治療における高難度症例の治療と成績} \author[taipapa] {taipapa, 織田信長, 豊臣秀吉, 徳川家康} \institute[hogefuga University] {hogefuga大学大学院 hogefuga研究科 hogefuga分野} \date[日本hogefuga外科学会 第??回学術総会 \hspace{2.4cm} 201X年X月XX日] {\scriptsize{Symposium-02「とっーても難しいhogeとfuga」 \\ \vspace{0.15cm} 筆頭演者はhogefuga外科学会へ過去3年間のCOI自己申告を 完了しています．\\本演題の発表に関して開示すべきCOIはありません }} % 学会名，日付，スライド番号を挿入 \setbeamertemplate{footline} {\color{gray} % \hspace{.075cm} \insertshortdate% \hspace{4cm} \insertframenumber{} / \inserttotalframenumber% } \begin{document} \begin{frame} \titlepage \end{frame} \section{Introduction} \begin{frame}{背景と目的} \begin{block}{} \begin{itemize} \item hogeとfugaを比較してみると，一方で難易度の高い症例で も他方では容易に行える場合も多い. \item 当施設では，一方に片寄ることなく，hogeとfugaを相補的に 用いることにより合併症の減少を目指す方針をとっている． \item そこで，自験例から高難度のhogefuga症例についての 方針と成績を主にhogefuga surgeonの立場から検討した. \end{itemize} \end{block} \end{frame} \section{Results} \begin{frame} \frametitle{hogefuga症例の画像} \centering \includegraphics[width=3.5in]{hoge_fuga.pdf} \end{frame} \end{document} ターミナルで，cdして上記のbeamer_test.texのあるdirectoryに移動し，shellで以下のように打ち込む．前回のポスト（LaTeXをインストールし，texファイルが変更されると，自動的にcompileしてskimでのpdfも自動で更新されるようにするを参考 latexmk -pvc -pdf -view=none beamer_test.tex これで下記のようなpdfが出来上がるはず． 画像の貼り付けが必要なら，上の文書にもあるように必要な箇所で， \includegraphics[width=2in]{/Data/hoge/fuga/......./hoge_fuga.pdf} などと打てばよい．以下のようなスライドが得られる． なにもしなければ，画像は左寄せになる．中央に寄せたければ，上記の文書内にあるように，\centering を使用する． 次回は，beamerで動画を走らせる件について書く予定．]"
}
,{
url: "/post/latexmk/",
title: "LaTeXをインストールし，texファイルが変更されると，自動的にcompileしてskimでのpdfも自動で更新されるようにする",
content: "[TeX Live 2018のインストール 参考サイト１：TeX Wiki TeX Live 参考サイト２：TeX Wiki TeX LiveMac 参考サイト３：The MacTeX-2018 Distribution 上記サイトを参考にTeX Live 2018もしくはMacTeX-2018をインストールする． これでスライド作成ソフトであるbeamerも一緒にインストールされる． beamerに固有の設定は特に必要なし． auctexのインストールと設定 latex文書を扱うなら，Emacsのパッケージであるauctexが最強（according to 独断と偏見） preludeをインストールした時点で，auctexもインストールされる． auctexの設定などについては以下を参照（手抜き&amp;hellip;.. (^^;;; ） AUCTEX – Sophisticated document creation TeX Wiki AUCTeX Emacs/AUCTeX AUCTeX の設定と便利な機能 しかし，org-modeを使うようになってからは直接latex文書を打つことはめっきり少なくなってしまった．それでも，学会発表用のスライドなどはlatexを直接打って，beamer文書を作成し，pdf原稿に変換している． latexmk Emacsでbeamerを使って，スライド原稿などを作成していると，C-c C-cするたびにtex文書がcompileされてpdf原稿が出来上がるのを待たなければならず，この待ち時間が結構辛い．そこで，tex ファイルの変更が保存されるたびに自動で裏でlatexmkがcompileしてくれるようにする．latexmkを使う． 参考サイト：TeX Wiki Latexmk texlive2018, MacTeXに入っているので，これらを入れていれば別途インストールする必要なし． ~/.latexmkrcの中に以下のように記述する（ちなみに私はxelatexを使用している） $pdflatex = &#39;xelatex -interaction=nonstopmode -synctex=1 %O %S&#39;; $pdf_mode = 1; $postscript_mode = $dvi_mode = 0; $pdf_previewer = &#39;open -a Skim&#39;; $preview_continuous_mode = 1; # equivalent to -pvc 実際の作業 上記のようにセットアップしていることとする． ターミナルで，texファイルが有るdirectoryに移動し， latexmk -pvc -pdf -view=none document.tex これで，texファイルへの変更を保存すると自動でコンパイルされて，設定にもよるが，skimで開いているpdfファイルも更新される． XeLaTeXについて 以下を参照されたい．特に最初にあげたZRさんの文書は必読！ XeLaTeX で日本語する件について TeXWiki XeTeX XeLaTeXだとかな混植が簡単にできて最高だという話]"
}
,{
url: "/post/japanese_setup/",
title: "Emacsの設定（その3）ようやくinit.orgの記述: 日本語の設定，inline-patchの設定など",
content: "[ようやく，ここからinit.orgの具体的な記述になる． Coding systemの設定 まずは，coding systemの設定，つまり，日本語の設定，日本語フォントの設定から init.orgに以下のように書き込む ​* Coding System Environment ** 言語を日本語にする #&#43;BEGIN_SRC lisp (set-language-environment &#39;Japanese) #&#43;END_SRC ** 極力UTF-8とする #&#43;BEGIN_SRC lisp (prefer-coding-system &#39;utf-8) #&#43;END_SRC ** 日本語フォントをヒラギノにする ​ - 日本語のサイズを指定しないと動的にサイズを変えられるようになる ​ - 奥村先生のサイト参照 https://oku.edu.mie-u.ac.jp/~okumura/macosx/ #&#43;BEGIN_SRC lisp (when (or (eq window-system &#39;mac) (eq window-system &#39;ns)) (set-face-attribute &#39;default nil :family &amp;quot;Menlo&amp;quot; :height 180) ;; 18pt (set-fontset-font nil &#39;japanese-jisx0208 (font-spec :family &amp;quot;Hiragino Kaku Gothic ProN&amp;quot;)) (setq face-font-rescale-alist &#39;((&amp;quot;.*Hiragino Kaku Gothic ProN.*&amp;quot; . 1.1)))) #&#43;END_SRC これがEmacs起動時にorg-babel-load-fileにより変換されて下記のようなinit.elとなる． (set-language-environment &#39;Japanese) (prefer-coding-system &#39;utf-8) (when (or (eq window-system &#39;mac) (eq window-system &#39;ns)) (set-face-attribute &#39;default nil :family &amp;quot;Menlo&amp;quot; :height 180) ;; 18pt (set-fontset-font nil &#39;japanese-jisx0208 (font-spec :family &amp;quot;Hiragino Kaku Gothic ProN&amp;quot;)) (setq face-font-rescale-alist &#39;((&amp;quot;.*Hiragino Kaku Gothic ProN.*&amp;quot; . 1.1)))) つまり，org-modeで書いたinit.orgでの解説はすべて除かれて，lispのみのcodeになってinit.elが生成される． この利点は，init.elの説明が実に書きやすい点にある（実際にはinit.orgに書くわけだが．．．）．org-modeはアウトライナーなので，階層構造も自由自在である．整理もしやすいし，後で順番を変えるのもCommand &#43; arrow keyを使えば実に簡単である． Inline-patchの設定 ついで，最も重要なinline-patchの設定 参考：Macに最新バージョンのEmacsをインストール 参考：El Capitan での日本語入力時に Emacs 内のカーソル色を変更する init.orgに以下のように書き込む． ​* inline-patch on macosx ** ミニバッファ入力時に自動的に英語入力モードにする ​ - 参考：http://keisanbutsuriya.hateblo.jp/entry/2016/04/10/115945 #&#43;BEGIN_SRC lisp (when (functionp &#39;mac-auto-ascii-mode) ;; ミニバッファに入力時、自動的に英語モード (mac-auto-ascii-mode 1)) #&#43;END_SRC ** 日本語か英語かで，カーソルの色を変える． ​ - 参考１：http://keisanbutsuriya.hateblo.jp/entry/2016/04/10/115945 ​ - 参考２：http://suzuki.tdiary.net/20160103.html #&#43;BEGIN_SRC lisp (when (fboundp &#39;mac-input-source) (defun my-mac-selected-keyboard-input-source-chage-function () (let ((mac-input-source (mac-input-source))) (set-cursor-color ; (if (string-match &amp;quot;com.apple.inputmethod.Kotoeri.Roman&amp;quot; mac-input-source) (if (string-match &amp;quot;com.google.inputmethod.Japanese.Roman&amp;quot; mac-input-source) &amp;quot;#91C3FF&amp;quot; &amp;quot;#FF9300&amp;quot;)))) (add-hook &#39;mac-selected-keyboard-input-source-change-hook &#39;my-mac-selected-keyboard-input-source-chage-function)) #&#43;END_SRC これがEmacsの起動時に，org-babel-load-fileによって，下記のようにcodeだけ抜き出されて，init.elに書き込まれる． (when (functionp &#39;mac-auto-ascii-mode) ;; ミニバッファに入力時、自動的に英語モード (mac-auto-ascii-mode 1)) (when (fboundp &#39;mac-input-source) (defun my-mac-selected-keyboard-input-source-chage-function () (let ((mac-input-source (mac-input-source))) (set-cursor-color ; (if (string-match &amp;quot;com.apple.inputmethod.Kotoeri.Roman&amp;quot; mac-input-source) (if (string-match &amp;quot;com.google.inputmethod.Japanese.Roman&amp;quot; mac-input-source) &amp;quot;#91C3FF&amp;quot; &amp;quot;#FF9300&amp;quot;)))) (add-hook &#39;mac-selected-keyboard-input-source-change-hook &#39;my-mac-selected-keyboard-input-source-chage-function)) これで日本語入力中であっても，M-xなどでミニバッファ入力時に自動的に英語入力モードになってくれる． ついでに行った日本語か英語かでカーソルの色が変わる設定はわりに有用だが，ときに色が変わらないことがあるが，気にしないことにしている．]"
}
,{
url: "/post/init_org/",
title: "Emacsの設定（その2）設定ファイル（init.el）をorg-modeで管理する",
content: "[自分のinit.elを見てると嫌になってくる．なんとかしようと弄り回すが，結局，訳わからんコードが山のように残ったまま．これをなんとかしようと，以前から気になっていたorg-modeでinit.elを管理するという方法を試してみた．まず，参考にしたサイトを最初にまとめておくので，そちらを見たほうが良いかもしれない． 参考サイト 俺、ちゃんと全部管理してます（org-modeでinit.elを管理する） babel-loader:org-mode で init.el を管理する方法 平衡点(2011-12-13) ORG-Babel &#43; init.el = ?? | くらいまーず はい Prelude init.el &amp;amp; org-babel Preludeを使いながら，init.orgから個人用のinit.elを自動作成させてEmacsを設定する方法 基本方針 個人用の設定内容は，~/.emacs.d/personal/init.orgに書き込む． 起動時にEmacsはinit.orgを解釈できないので，init.elにはそれを解釈するように書き込む． 具体的には，init.elで，(require &amp;lsquo;org)した後にorg-babel-load-fileでinit.orgを読み込む． しかし，Preludeを導入しているので，そのまま~/.emacs.dにinit.elを書き込むわけにはいかず，少し工夫する． Preludeの導入 前回のポスト（Emacsの設定（その1）Preludeの導入）を参考 emac-init.elの作成 ~/.emacs.d/personal/emacs-init.elというファイルを作成し，下記のように書き込む (require &#39;org) (defvar my-config-dir (concat user-emacs-directory &amp;quot;personal/&amp;quot;)) (org-babel-load-file (expand-file-name &amp;quot;init.org&amp;quot; my-config-dir)) 工夫と言っても， init.elの名前のままではinit.orgからinit.elが生成されるときに衝突してしまう ので，違う名前（emacs-init.el）にしていることと，init.orgを~/.emacs.d/personal/に置くようにしているだけ． これでEmacsを起動すると，init.org内のcode blockだけを抜き出したinit.elが同じdirectory (personal)に作成される． init.orgの作成 これでいよいよ肝心のinit.orgの作成を行う org-modeについては，今更説明不要であろう．とにかくすごいやつ．超高機能アウトラインメジャーモード．文書作成，このブログ作成など殆どのことをこれでやっている． 具体的な内容は次回以降に記述予定だが，code blockの挿入は特筆すべき者であり，先に書いておく．． Code blockの挿入 俺、ちゃんと全部管理してます（org-modeでinit.elを管理する）で指摘されているとおり，とにかく便利．以下はほとんどそのままコピペしたような記述である． org-modeで以下のようにする．（後述する設定が必要） &amp;lt;l （ここで&amp;lt;TAB&amp;gt;すると．．．） 以下のように展開される #&#43;begin_src emacs-lisp #&#43;end_src Codeの記述 上記の#&#43;begin_src emacs-lispと#&#43;end_srcの間にemacs-lispで設定内容を書く．ここからが便利にできているところ． code-blockの中にいるときに C-c &amp;lsquo;とする 当該のcode blockだけのバッファが表示される（下図の下のバッファ） この中はemacs-lisp modeでsyntaxも普通に効くので，普通にコードを書く．もちろん，括弧の対応もハイライトで表示される． C-c nとする すると，インデントも綺麗に整えてくれる． 満足したら，C-c &amp;lsquo;で元のバッファに戻る．整形は綺麗なまま反映される．素晴らしい！ 具体的なinit.orgの内容は次回のポスト以降に記述予定]"
}
,{
url: "/post/prelude_install/",
title: "Emacsの設定（その1）Preludeの導入",
content: "[昔はいろいろイチからinit.elを設定したものだけど，今は最初からほぼ全部やってくれる設定集がある． Preludeとは Emacs初期設定集の一種．他にもいろいろあるようだが，これしか使ったことがないので．．． Prelude Githubはこちら Preludeのインストール 上記のGithubのFast Forwardに書いてあるように，macOSで既にgitとcurlとEmacsをインストールしていれば，下記のコマンドを打てば，Preludeがインストールされる．念のために，古い.emacs.dはどこかに退避させておく（名前を変えて保存されるようになって入るが心配性なもんで）． $ curl -L https://git.io/epre | sh インストール終了後にEmacsを再起動すると，勝手にもの凄い勢いでどんどん各種パッケージをダウンロードしてインストールしてくれる．auctexなどもインストールされるので，LaTeXも使えるようになる．素晴らしい！ prelude-modules.elを見て必要なmodulesがロードされるようにコメントアウトを外す． (require &#39;prelude-helm) ;; Interface for narrowing and search (require &#39;prelude-helm-everywhere) ;; Enable Helm everywhere helmにすっかり慣らされてしまったのでこのあたりは外している． preludeのdefaultの設定は，ほぼ満足すべきものだが，ひとつだけ，prelude-auto-saveが邪魔である．これは，他のbufferに移動したり，他のアプリを使用したりするたびに自動で保存される機能であるが，非常に鬱陶しい．M-x customize からprelude-auto-saveを検索し，offにする．custom.elに書き込まれる． 個人の設定は，~/.emacs.d/personal/init.elに書き込む．これは，org-modeを使って設定するのが良い．まずorg-modeについての記事を書いたあとにinit.orgについて書く予定．]"
}
,{
url: "/post/emacs_install/",
title: "Emacsのインストール",
content: "[なにはともあれ，まずはEmacsのインストールから．様々な方法があるが，Mac userなので，ここではHomebrewを使ってサクッとインストール．Homebrew自体のインストールはそちらのサイトを参照． Emacsで日本語を書いてると，M-xしたときに面倒なことになるので，Imput Method Editor (IME)用のパッチを当てる．既にパッチの当たっているYAMAMOTO Mitsuharu版のMac Port用のemacs-macがよい．railwaycatさんがHomebrewでインストールできるようにしてくれているので，これを使わせていただく（Emacs Mac Port）．ありがたい． $ brew tap railwaycat/emacsmacport $ brew install emacs-mac --with-modern-icon --with-imagemagick $ ln -s /usr/local/opt/emacs-mac/Emacs.app /Applications &amp;ndash;with-modern-iconを指定すると、新しいアイコンになる。 なお，他のoptionは以下のように打てば分かる． $ brew tap railwaycat/emacsmacport $ brew info emacs-mac]"
}
,{
url: "/post/",
title: "Posts",
content: "[]"
}
,{
url: "/index.js",
title: "",
content: "[]"
}]