---
templateKey: blog-post
slug: GitKrakenを使ってみる
title: GitKrakenを使ってみる
date: 2020-03-21T13:20:46.378Z
featuredImage: /images/uploads/kraken0.png
featuredImageDescription: ''
tags:
  - 使ってみるシリーズ
  - 技術紹介
  - GitKraken
  - Git
---
## はじめに
皆さんはGit使ってますか？私は使っています。<br>
いつも自分の作ったソースコードをちまちまコミットしていますし、何ならこのブログもGitHubで管理しています(privateリポジトリにしてるけど)。<br>
Gitは通常CUIベースで、git addやらgit commitやらコマンドを実行して使いますが、今回紹介するGitKrakenはそんなGitをGUIベースで使えるようにするものです。<br>
このツールについてなんで紹介しようと思ったかといえば、TwitterのTLでこのツールに関する話題が流れており、どんなツールだろうと興味をもったからです。<br>
つまり私もそこまでよくわかっていません（笑）<br>
わからないなりに調べてみた成果をブログ記事という形で共有したいと思います。

## GitKrakenとは
GitKrakenとは先程ご説明したとおり、GitのGUIクライアントになります。<br>
GitのGUIクライアントは複数あるようですが、GitKrakenはその中でも比較的新しめなようです。<br>
Kraken(イカ)ということでGitHubのマスコットキャラクターのOctocatを意識しているのかもしれませんね。
<section style="display:flex;align-items: flex-start;">
<img src="/images/uploads/Octocat.png" style="width:auto;height:200px;"/>
<img src="/images/uploads/kraken.png" style="width:auto;height: 200px;" />
</section>
前置きはこの辺にして、早速導入してみましょう！

## 導入方法

GitKrakenの公式サイトにアクセスします。<br>
<a href="https://www.gitkraken.com/">https://www.gitkraken.com/</a>

<img src="/images/uploads/kraken1.png" style="width:100%;height:auto;"/>

「Free Download」を選んでインストーラーを入手してインストールします。<br>
起動すると以下のような画面が表示されます。
<img src="/images/uploads/kraken2.png" style="width:100%;height:auto;"/>

「Sign in with GitHub」をクリックするとGitHubの認証を求められます。
<img src="/images/uploads/kraken3.png" style="width:100%;height:auto;"/>
パスワードを入力して、認証を完了すると...
<img src="/images/uploads/kraken4.png" style="width:100%;height:auto;"/>
やりました！<br>

GitKraken側に戻ると、プロフィールの入力を求めるので適当に入力しておきます。<br>
<img src="/images/uploads/kraken5.png" style="width:100%;height:auto;"/>

その後規約への同意を行えば導入完了です。<br>
<img src="/images/uploads/kraken6.png" style="width:100%;height:auto;"/>

## 使ってみる

とりあえず、<a href="https://elated-blackwell-51e103.netlify.com/post/ionic-cli%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/">昨日の記事</a>で作ったプロジェクトをGitHubに登録することを目指して使ってみましょう。<br>

<img src="/images/uploads/kraken6.png" style="width:100%;height:auto;"/>

トップ画面から、「Start a local project」をクリックします。<br>

<img src="/images/uploads/kraken9.png" style="width:100%;height:auto;"/>

GitHub.comを選ぶと、リポジトリの新規作成画面が表示されます。<br>
ここでリポジトリ名やクローン先などを選びます。<br>
こんな感じにしました。<br>
<img src="/images/uploads/kraken10.png" style="width:100%;height:auto;"/>

そして「Create Repository and Clone」をクリックすると、リポジトリの新規作成を行った上でクローンします。<br>
こんな画面が表示されます。<br>

<img src="/images/uploads/kraken11.png" style="width:100%;height:auto;"/>

おお...なんというか、色々できそう（笑）<br>
とりあえず開発用のブランチを切ってみましょう。<br>
右上のbranchを入力すると、以下のようにブランチ名を入力することができるようになります。<br>

<img src="/images/uploads/kraken12.png" style="width:100%;height:auto;"/>

入力してEnterを押すと、ブランチを新規作成して切り替えることができます(CUIで言えば、「git branch」コマンド及び「git checkout」コマンドに相当します)。<br>
developmentブランチになってますね。<br>

<img src="/images/uploads/kraken13.png" style="width:100%;height:auto;"/>

今回クローンしたフォルダ内に<a href="https://elated-blackwell-51e103.netlify.com/post/ionic-cli%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B/">昨日の記事</a>で作ったプロジェクトの内容物を放り込むと、

<img src="/images/uploads/kraken14.png" style="width:100%;height:auto;"/>

追加した内容物がUnstaged Filesとして表示されます。<br>
この内容物たちをコミットするためには、これらを変更対象(Staged Files)に追加しないといけません。<br>
「Stage all changes」をクリックすることですべてStaged Filesに追加します。
CUIで言えば、「git add」コマンドに相当するところですね。

<img src="/images/uploads/kraken15.png" style="width:100%;height:auto;"/>

追加されましたね。<br>
コミットコメントを入力して、下の緑色のボタンを押す(CUIで言えば、「git commit」コマンドに相当します)とローカルリポジトリにコミットされ、以下のような画面が表示されます。<br>

<img src="/images/uploads/kraken16.png" style="width:100%;height:auto;"/>

今回コミットしたファイルが39 addedという形で右側に表示され、真ん中のツリー？部分にも今回のコミットが追加されていますね。<br>
こんな感じでコミットを視覚的に見ることができるのはいいですね。<br>

ではこのコミットをリモートリポジトリにも反映しましょう。<br>
右上のPushをクリックしてみます。<br>

<img src="/images/uploads/kraken17.png" style="width:100%;height:auto;"/>

Pullする対象ブランチの確認を行い、問題なければ「Submit」をクリックします(CUIで言えば、「git push」コマンドに相当します)。<br>
数秒後には...<br>
<img src="/images/uploads/kraken18.png" style="width:100%;height:auto;"/>

やりました！

もちろんちゃんとリモートに反映されていました。<br>

<img src="/images/uploads/kraken19.png" style="width:100%;height:auto;"/>

## おわりに
今回はGitKrakenというツールのご紹介と導入方法、実際にリポジトリ作成からリモートリポジトリへのPushまでを解説しました。<br>
個人的にはCUIのコマンドでどういったことをしているのか、非常にわかりやすいなと感じたので、これからも活用していきたいと思います。<br>

それでは今回はこの辺りで。<br>
ここまで読んでいただき、ありがとうございました！<br>
感想やご意見等ございましたら、<a href="https://twitter.com/RinGoku98">私のTwitter</a>までお気軽にどうぞ。
