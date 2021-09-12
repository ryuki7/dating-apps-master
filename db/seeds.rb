# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## テスト用のユーザー(usersテーブル)
User.create!(name: 'テスト', line_id: 'test-line-id', role: 0)


## アプリ(appsテーブル)
app_1 = App.create!(name: 'Pairs（ペアーズ）', strategy_description: 'ペアーズは真面目に恋活・婚活をしている女性が多い為、彼女を作りたい・結婚したい男性に向いているアプリです。.遊びたい男性には向いていません。.また、タップルやティンダーに比べてイケメン・ハイスペックな男性が少なく、競争率はあまり高くない為、マッチング率・アポ確定率高め。', icon_image: 'Pairs60R.png', diagnostic_allocation: 'a', diagnostic_description: '真面目な女性が多い。彼女を作りたい人に向いている。')
app_2 = App.create!(name: 'with（ウィズ）', strategy_description: 'ウィズは真面目に恋活・婚活している女性が多い為、彼女を作りたい・いずれ結婚したい男性に向いているアプリです。.遊びたい男性には不向きですが、ペアーズほど真面目ではない為、遊ぶことも可能です。.また、ペアーズ、タップル、ティンダーに比べてイケメン・ハイスペックな男性が少なく、競争率はあまり高くない為、マッチング率・アポ確定率高め。清楚な女性が多いです。', icon_image: 'with60R.png', diagnostic_allocation: 'b', diagnostic_description: '清楚な女性が多い。彼女を作りたい人に向いている。')
app_3 = App.create!(name: 'tapple(タップル)', strategy_description: 'タップルは真面目に恋活・婚活している女性と遊びの女性が半々くらい存在する為、彼女が欲しいけど遊びたい気持ちもある男性に向いているアプリです。.また、ペアーズやウィズに比べてイケメン・ハイスペックな男性が多い傾向にあり、競争率がそこそこ高い為、マッチング率・アポ確定率はやや低め。.清楚な女性・ギャルな女性などの色々な種類の女性が登録しており、可愛い女性が多いです。', icon_image: 'tapple60R.png', diagnostic_allocation: 'c', diagnostic_description: '可愛い子が多い。色々なタイプの女性がいる。')
app_4 = App.create!(name: 'Tinder(ティンダー)', strategy_description: 'ティンダーは真面目に恋活している女性が少数いるが、遊び・遊び気質の女性が多い為、遊びたい男性に向いているアプリです。.彼女を作りたい人には向いていないです。.また、ペアーズ、ウィズ、タップルに比べ、断トツにイケメン・ハイスペックな男性が多く、競争率がかなり高い為、マッチング率・アポ確定率は低いです。.清楚な女性、ギャルな女性などの色々な種類の女性が登録しており、酒好きでフッ軽な可愛い女性が多いです。', icon_image: 'Tinder60R.png', diagnostic_allocation: 'd', diagnostic_description: '可愛い子が多い。彼女作りたい人には向いていない。')


## 目的(purposesテーブル)
purpose_1 = Purpose.create!(name: '彼女作り')
purpose_2 = Purpose.create!(name: '遊び')
purpose_3 = Purpose.create!(name: '超遊び')


## appsテーブルとpurposesテーブルの中間テーブル(app_purposesテーブル)
# ペアーズ
app_purpose_pairs = AppPurpose.create!(app_id: 1, purpose_id: 1)

# ウィズ
app_purpose_with_make_girlfriend = AppPurpose.create!(app_id: 2, purpose_id: 1)
app_purpose_with_play = AppPurpose.create!(app_id: 2, purpose_id: 2)

# タップル
app_purpose_tapple_make_girlfriend = AppPurpose.create!(app_id: 3, purpose_id: 1)
app_purpose_tapple_play = AppPurpose.create!(app_id: 3, purpose_id: 2)

# ティンダー
app_purpose_tinder = AppPurpose.create!(app_id: 4, purpose_id: 3)


## ステップ(stepsテーブル)
# 彼女作りステップボタン
step_1_make_girlfriend = Step.create!(name: '1.プロフィール設定', description: 'プロフィール設定で「全てが決まる」と言っても過言ではないです。.プロフィール設定が上手くできていないと、女の子と会う以前にマッチングしないのでメッセージすら出来ません。.大前提として、プロフィール写真の顔は盛り過ぎはNGです。.まず女性と会えないと(マッチングしないと)意味ないので、少しくらい盛るのは良いが、盛りすぎると会ってから結局上手くいかないので推奨しません。', description_point: '• プロフィール写真は、顔が分かる写真を必ず載せること。.※ 顔がはっきり分からないと不安になる女性もいる為。.• プロフィールの入力欄は全て入力すること。.• 自己紹介文には、「職業」「住み」「好きな食べ物・飲み物」「趣味・嗜好」「よく出かける場所」等を必ず記入すること。.※ 相手との話題・共通点を見出す為。', purpose_id: 1)
step_2_make_girlfriend = Step.create!(name: '2.女性にいいねする', description: '会員登録やログインボーナス等で運営から配布される「いいね数」には限りがあり、使い切ってしまったら別途課金して購入する必要があるので、慎重に選んで「いいね」を押しましょう。', description_point: '• 初めは自分が「良いなと思った女性」を片っ端から「いいね」する。.※ そこでどのくらいの女性から「いいね」が返ってくるかで、自分のレベルを知る。.• 自分のレベルを知ったら、「自分のレベルに合わせた女性」にのみ「いいね」するようにする。.※ 「いいね」が返ってこない女性に「いいね」するのは無駄になってしまう為、少しでも「いいね」が返ってくる女性に「いいね」した方がマッチング率が高まり、良い人と出会える。', purpose_id: 1)
step_3_make_girlfriend = Step.create!(name: '3.ファーストメッセージ', description: '女性はたくさんの男性からメッセージが来ている為、マッチングしてからの「ファーストコンタクト」の内容で、女性からの返信率が変わってきます。', description_point: '• 相手の女性の「顔」や「雰囲気」を褒めたり、「写真」や「自分との共通点」について触れたメッセージを送ること。.※ 「よろしくお願いします」等のありきたりな文だと「他の男性ユーザー」との「差別化」が図れず、つまらない為、相手の女性のプロフィールをしっかり読んで相手の「気を惹く」文を送る。', purpose_id: 1)
step_4_make_girlfriend = Step.create!(name: '4.メッセージのやりとり', description: '女性はたくさんの男性のメッセージを返すので忙しい為、返信が疎かになっている場合があります。自分が話の展開を作る気持ちでメッセージをしましょう。.また、アポを取るまではLINE交換等は行わないで、アプリ内で会話をするようにしましょう。', description_point: '• 基本、自分が「質問する形で終わる」のを意識しながらメッセージをすること。.※ 質問をしてあげないと、会話が終了してしまう可能性がある為、質問責めにならないくらいで自然に会話する。.• 相手の女性が興味のありそうな話題で会話をすると、相手の女性も会話をしてて退屈しない為、メッセージが続きやすい。.※ 独りよがりに自分のことばかりを話すことは絶対にNG。.• 一見LINEをすぐに交換した方が良いと考えがちなのですが、LINEは親しい人とのコミュニケーションを取る日常ツールであり、プロフィール写真に顔写真を載せている男性は少ないと思う為、あまりまだ仲良くなかったり、デートの予定などが決まっていないと、印象が薄くなってしまったり、返信するのがめんどくさくなってしまい、相手の女性から連絡が返って来なくなる確率が高い。', purpose_id: 1)
step_5_make_girlfriend = Step.create!(name: '5.アポの取り方・コツ', description: '女性はたくさんの男性から「デート」に誘われています。他の男性に先を越されないように、なるべく早く「アポ」を取ることがとても重要です。もはや早い者勝ちですね。', description_point: '• 相手の女性の「好きな食べ物・飲み物」や、自分との「共通点」の話題で会話を進めて、自然な流れで「食事」や「お出かけ」に誘う。.※ だらだらメッセージをしてるだけだと、惰性になって会話が退屈になり、返信が来なくなる可能性が高い。.• 相手の女性が興味のありそうな話題で会話をすると、相手の女性も会話をしてて退屈しない為、メッセージが続きやすい。.※ 独りよがりに自分のことばかりを話すことは絶対にNG。', purpose_id: 1)
step_6_make_girlfriend = Step.create!(name: '6.デートプラン・スポットを探す', description: '自分が楽しむことも大事ですが、相手の女性を楽しませることが一番大切なので、ヒアリングは必ずして下さい。しかし、男の人からデートプランを提案する方が男らしくてかっこいいので、ある程度ヒアリングをしたら自分で判断して決めましょう。.また女性は男性よりも準備に時間がかかってしまうので、デートの開始時間は朝からでは無く、昼からだと嬉しい女性も多いと思います。', description_point: '下記のボタンから、おすすめの「デートプラン一覧」ページへ遷移します。', purpose_id: 1)
step_7_make_girlfriend = Step.create!(name: '7.アポを取ってからデート当日まで', description: 'アポを取れたからと言って油断していると、急に連絡が来なくなる可能性は十分にありますので、油断は禁物です。デートの日程がすぐならば、さほど問題はないと思いますが、デートの日程が結構先の場合は、会話が無くならないよう「適度な頻度」を意識し、「適当な返信をしない」ようにしましょう。また、デートに向けて自分磨きは怠らないようにしましょう。', description_point: '• 「デートの日程がすぐ」の場合は、相手のペースに合わせつつ、なるべく「マメ」に連絡を取ることを意識することが大事です。.• 「デートの日程が結構先」の場合は、マメに連絡をしすぎてしまうと話すことが無くなってしまう可能性があるので、相手のペースに合わせつつ、遅すぎず、早すぎない「適度な頻度」で連絡を返すようにしましょう。.※ メッセージだけの会話で日付が経ってくると、段々とお互いの「会いたいという気持ち」が冷めてきちゃう為、電話などをしてお互いの仲を深めておくのが有効である。.• デート当日、最高のコンディションで迎えられるよう「スキンケア」を念入りにしたり、「美容院」に行き、髪型を整えておくと良い。', purpose_id: 1)
step_8_make_girlfriend = Step.create!(name: '8.デート当日(デート別)', description: '女性は男性が思ってる以上に、ニオイに敏感です。家を出る前に必ずニオイケアを行いましょう。.具体的には、.• シャワーを浴びる・制汗剤を使用するなどの体臭対策。.• 女子受けの良い香りの香水を使用する。(匂いがキツい香水だと逆効果な為、爽やかな匂いの香水を使用する。).上記の2点を必ず行うようにしましょう。', description_point: '下記のボタンから、「デートプラン毎」の「行動パターン攻略説明」ページへ遷移します。', purpose_id: 1)

# 遊びステップボタン
step_1_play = Step.create!(name: '1.プロフィール設定', description: 'プロフィール設定で「全てが決まる」と言っても過言ではないです。.プロフィール設定が上手くできていないと、女の子と会う以前にマッチングしないのでメッセージすら出来ません。.大前提として、プロフィール写真の顔は盛り過ぎはNGです。.まず女性と会えないと(マッチングしないと)意味ないので、少しくらい盛るのは良いが、盛りすぎると会ってから結局上手くいかないので推奨しません。', description_point: '• 「彼女作り」では「顔が分かる写真を載せた方が良い」と書きましたが、「遊び」では、顔にあまり自信ない方は顔をはっきり載せずに、雰囲気がイケてる写真(横顔や後ろ姿などの写真)を載せるようにしましょう。.※ 勿論、顔がはっきり載ってる方が良いので、顔に自信がある方は顔を載せましょう。.• 自己紹介文は長文を書く必要は無く、「職業」「住み」「好きな食べ物・飲み物」「趣味・嗜好」「よく出かける場所」等などの、最低限の情報や遊びに誘いやすい・繋げる為の内容を簡潔に書けば良いです。.※ 「ドライブ」や「お酒」が好きということを書くのがおすすめです。', purpose_id: 2)
step_2_play = Step.create!(name: '2.女性にいいねする', description: '会員登録やログインボーナス等で運営から配布される「いいね数」には限りがあり、使い切ってしまったら別途課金して購入する必要があるので、慎重に選んで「いいね」を押しましょう。.「遊び」では、女性のプロフィールを見て、明らかに「真面目そうな女性」にはなるべく「いいね」しないようにしましょう。', description_point: '• 自己紹介文が短めだったり、適当な感じの女性は、遊べる可能性が高いので積極的に「いいね」していきましょう。.• 「趣味・嗜好」が、「お酒」や「ドライブ」好きだったり、「フッ軽」や「暇つぶし」でアプリをやっている女性も「遊び」で遊べる確率が高いのでおすすめです。', purpose_id: 2)
step_3_play = Step.create!(name: '3.ファーストメッセージ', description: '「遊び」だからと言って、下心丸出しのメッセージをいきなり送るのは女性受けが悪いので、最初は下心を隠しましょう。', description_point: '• 相手の女性の「顔」や「雰囲気」を褒めたり、「写真」や「自分との共通点」について触れたメッセージを送ること。.※ 「よろしくお願いします」等のありきたりな文だと「他の男性ユーザー」との「差別化」が図れず、つまらない為、相手の女性のプロフィールをしっかり読んで相手の「気を惹く」文を送る。', purpose_id: 2)
step_4_play = Step.create!(name: '4.メッセージのやりとり', description: '「遊び」の場合、顔がフツメン以上の男性であれば、会う前のメッセージで「遊び」として誘ってもOKをもらえる可能性があります。なのでそのような男性は「数撃てば当たる戦略」で行けば、たくさんの女性と手っ取り早く「遊び」で遊べます。.しかし、顔がフツメン未満の男性の場合は、会う前のメッセージで「遊び」として誘うのは断られる可能性が高いので、アポを取ることに専念しましょう。.また、自分からすぐにLINE交換をしないようにしましょう。', description_point: '• 顔がフツメン以上の男性は、「〜(女性の名前)だからしたい」というような「誰でも良いわけじゃ無い」と「特別感」を出したメッセージをたくさんの女性に送っていれば、何人かはヒットする為、手っ取り早いです。.※ しかし、その誘いに簡単に乗る女性ほど見た目のレベルが低い傾向にあるので、見た目のレベルが高い女性と「遊び」として遊びたい場合は、下心を隠して、「呑み」や「夜のドライブ」等に誘うのが有効的です。.• 顔がフツメン未満の男性の場合は、下心を隠して、「呑み」や「夜のドライブ」等に誘うのが一番成功確率が高いです。.• 一見LINEをすぐに交換した方が良いと考えがちなのですが、自分とすぐにLINE交換をするような女性は、他の多くの男性ユーザーともLINE交換をしているので、混在してしまいフェードアウト率が高い。', purpose_id: 2)
step_5_play = Step.create!(name: '5.アポの取り方・コツ', description: '女性はたくさんの男性から毎日のように「デート」に誘われています。他の男性に先を越されないように、なるべく早く「アポ」を取ることがとても重要です。もはや早い者勝ちですね。', description_point: '• 相手の女性の「趣味・嗜好」や、自分との「共通点」の話題で会話を進めて、自然な流れで「呑み」や「夜のドライブ」に誘う。.※ だらだらメッセージをしてるだけだと、惰性になって会話が退屈になり、返信が来なくなる可能性が高い。.• 当日や前日にいきなり「遊び」として誘ったり、「呑み」や「夜のドライブ」に誘うこともかなり有効です。.※ その急な誘いにOKする女性は、軽い可能性が高い為。', purpose_id: 2)
step_6_play = Step.create!(name: '6.デートプラン・スポットを探す', description: '「雰囲気作り」が一番大事ですので、良い雰囲気を作れる場所・スポットを選ぶことが重要です。.また女性は男性よりも準備に時間がかかってしまうので、デートの開始時間は朝からでは無く、昼からだと嬉しい女性も多いと思います。', description_point: '下記のボタンから、おすすめの「デートプラン一覧」ページへ遷移します。', purpose_id: 2)
step_7_play = Step.create!(name: '7.アポを取ってからデート当日まで', description: '「遊び」の場合は、相手の女性がこちら(男性)側の狙いを把握してる場合があるので、相手の女性の気分などでドタキャンされる可能性があります。一人の女性に固執しず、色々な女性と同時進行していきましょう。また、デートに向けて自分磨きは怠らないようにしましょう。', description_point: '• 一人の女性だけに絞るのでは無くて、「今度の日は誰にしようか」など自分が選ぶスタンスになるくらい色々な女性にちょっかいをかけておきましょう。.※ 色々な女性と同時進行することで、ドタキャンされたり、上手く事を進められなかったとしても、すぐに他の女性で対応出来る為、メンタル的にも常に女性をキープしておくことが重要です。', purpose_id: 2)
step_8_play = Step.create!(name: '8.デート当日(デート別)', description: '女性は男性が思ってる以上に、ニオイに敏感です。家を出る前に必ずニオイケアを行いましょう。.具体的には、.• シャワーを浴びる・制汗剤を使用するなどの体臭対策。.• 女子受けの良い香りの香水を使用する。(匂いがキツい香水だと逆効果な為、爽やかな匂いの香水を使用する。).上記の2点を必ず行うようにしましょう。', description_point: '下記のボタンから、「デートプラン毎」の「行動パターン攻略説明」ページへ遷移します。', purpose_id: 2)

# 超遊びステップボタン
step_1_super_play = Step.create!(name: '1.プロフィール設定', description: 'プロフィール設定で「全てが決まる」と言っても過言ではないです。.プロフィール設定が上手くできていないと、女の子と会う以前にマッチングしないのでメッセージすら出来ません。.大前提として、プロフィール写真の顔は盛り過ぎはNGです。.まず女性と会えないと(マッチングしないと)意味ないので、少しくらい盛るのは良いが、盛りすぎると会ってから結局上手くいかないので推奨しません。', description_point: '• 「超遊び」では、「写真」が全てになります。ですので「顔」に自信がある人以外は、「雰囲気」がイケてる写真を載せるようにしましょう。.• ほんとに「写真」勝負ですので、自己紹介文はかなり短くて良く、「住み」「趣味・嗜好」を書くだけでいいです。.※ 「車持ち」・「一人暮らし」・「高身長」の方はそれを書くだけでかなり有利になるので、自己紹介文に書きましょう。', purpose_id: 3)
step_2_super_play = Step.create!(name: '2.女性にいいねする', description: '無課金だと「Like」できる数が制限されていて、「12時間に100Like」しか出来ない為、課金するのをおすすめします。課金をすると、「無制限にLike」出来るようになります。.また、他のアプリに比べて圧倒的に「競争率」が高く、「アクティブ」な女性ユーザーが少ない為、マッチング率がかなり低いです。ですので少しでも母数(Likeする数)を増やしてマッチング率を高めることが一番大事です。', description_point: '• 全ての女性に「Like」をするのでは無く、Like(70%)・Nope(30%)くらいを意識して、「サクラ」などは必ず「Nope」するようにしましょう。.※ 「サクラ」とは、業者などの「一般の素人女性ではないユーザー」のことです。「LINEのID」や「TwitterのID」を載せている女性は、ほとんど「サクラ」ですので気をつけましょう。.• おすすめの課金プランは、「Tinder Plus®」or「Tinder Platinum™」です。(お金に余裕があるのであれば、「Tinder Platinum™」を推奨。).※ 「Tinder Plus®」は、「無制限にLikeできる」「1日5回、無料でSuper Likeが使える」などの機能があります。「Super Like」とは、相手のスワイプ画面に出てきやすい特別なLikeです。.※ 「Tinder Platinum™」は、「無制限にLikeできる」「1日5回、無料でメッセージ付きSuper Like(スワイプノート)が使える」「自分がLikeした相手の画面に優先して表示される」などの機能があります。.Tinderは女性ユーザーに対して男性ユーザーが多すぎる為、まず「自分のプロフィールが相手の女性のスワイプ画面に出て来ない」というケースが多いです。ですので「自分がLikeした相手の画面に優先して表示される」の機能で驚くほどマッチング率が変わります。', purpose_id: 3)
step_3_super_play = Step.create!(name: '3.ファーストメッセージ', description: '「ティンダー」の場合、相手の女性が「遊び」の女性が多いので、いきなり「下心丸出しのメッセージ」を片っ端から送るのもありです。.しかし、同じような考えの男性ユーザーも多く、それだと「差別化が図れない」のと、相手の女性が「遊び」目的でも、「下心丸出しは嫌」な女性もいるので、「下心丸出し」を避けた方がメッセージは続きやすいです。', description_point: '• 「下心丸出しのメッセージ」を送らない場合は、「遊び」と同様に、相手の女性の「顔」や「雰囲気」を褒めたり、「写真」や「自分との共通点」について触れたメッセージを送ること。.※ 「よろしくお願いします」等のありきたりな文だと「他の男性ユーザー」との「差別化」が図れず、つまらない為、相手の女性のプロフィールをしっかり読んで相手の「気を惹く」文を送る。', purpose_id: 3)
step_4_super_play = Step.create!(name: '4.メッセージのやりとり', description: '「ティンダー」は本当に競争率が高い為、「マッチングはしてもメッセージは返って来ない」ことの方が圧倒的に多いです。ですので「タイミング」と「運」が大きく関係してきます。.また、自分からすぐにLINE交換をしないようにしましょう。', description_point: '• 「下心丸出しのメッセージ」を送らない場合は、「遊び」と同様に、相手の女性の「顔」や「雰囲気」を褒めたり、「写真」や「自分との共通点」について触れたメッセージを送ること。.※ 「よろしくお願いします」等のありきたりな文だと「他の男性ユーザー」との「差別化」が図れず、つまらない為、相手の女性のプロフィールをしっかり読んで相手の「気を惹く」文を送る。.• 一見LINEをすぐに交換した方が良いと考えがちなのですが、「ティンダー」の女性は、他の多くの男性ユーザーともLINE交換をしており、混在してしまいフェードアウト率が高い為、電話等をする場合を除いてはすぐにLINE交換等はしないこと。', purpose_id: 3)
step_5_super_play = Step.create!(name: '5.アポの取り方・コツ', description: 'まずメッセージがあまり返って来ない為、アポを取るがかなり難しいです。また、もしアポを取れても急に音信普通になることはざらにあるので、遊びに誘う日から7日以内の日付にアポを取ったり、急に前日や当日に遊びに誘うのが良いでしょう。', description_point: '• 相手の女性の「趣味・嗜好」や、自分との「共通点」の話題で会話を進めて、すぐに「呑み」や「夜のドライブ」などに誘う。.※ だらだらメッセージをしてるだけだと、途中からメッセージが返って来なくなる確率がかなり高い。.• 本当に「相手の気分」などの「タイミング」が大きく関係しているので、「今週の週末ドライブ行こー？」や「今から遊ぼ」などの急な誘いを片っ端から送るのをおすすめします。', purpose_id: 3)
step_6_super_play = Step.create!(name: '6.デートプラン・スポットを探す', description: '「雰囲気作り」が一番大事ですので、良い雰囲気を作れる場所・スポットを選ぶことが重要です。.また女性は男性よりも準備に時間がかかってしまうので、デートの開始時間は朝からでは無く、昼からだと嬉しい女性も多いと思います。', description_point: '下記のボタンから、おすすめの「デートプラン一覧」ページへ遷移します。', purpose_id: 3)
step_7_super_play = Step.create!(name: '7.アポを取ってからデート当日まで', description: '「ティンダー」の場合は、適当な女性が多い為、相手の女性の気分などでドタキャンされる可能性があります。一人の女性に固執しず、色々な女性と同時進行していきましょう。また、デートに向けて自分磨きは怠らないようにしましょう。', description_point: '• 一人の女性だけに絞るのでは無くて、「今度の日は誰にしようか」など自分が選ぶスタンスになるくらい色々な女性にちょっかいをかけておきましょう。.※ 色々な女性と同時進行することで、ドタキャンされたり、上手く事を進められなかったとしても、すぐに他の女性で対応出来る為、メンタル的にも常に女性をキープしておくことが重要です。', purpose_id: 3)
step_8_super_play = Step.create!(name: '8.デート当日(デート別)', description: '女性は男性が思ってる以上に、ニオイに敏感です。家を出る前に必ずニオイケアを行いましょう。.具体的には、.• シャワーを浴びる・制汗剤を使用するなどの体臭対策。.• 女子受けの良い香りの香水を使用する。(匂いがキツい香水だと逆効果な為、爽やかな匂いの香水を使用する。).上記の2点を必ず行うようにしましょう。', description_point: '下記のボタンから、「デートプラン毎」の「行動パターン攻略説明」ページへ遷移します。', purpose_id: 3)


## クエスチョン(questionsテーブル)
question_1 = Question.create!(description: 'どんな目的でマッチングアプリを利用しますか？.また、女性とどのような関係になりたいですか？.※複数選択可')
question_2 = Question.create!(description: '『外見』.どのような女性が好きですか？.また、どんな女性と出会いたいですか？.近いと思うものを選択してください。.※複数選択可')
question_3 = Question.create!(description: '『内面』.どのような女性が好きですか？.また、どんな女性と出会いたいですか？.※複数選択可')


## アンサー(answersテーブル)
# クエスチョン1
answer_1_1 = Answer.create!(description: '彼女が欲しい', question_id: 1, allocation: 'aaaabbbbcccd')
answer_1_2 = Answer.create!(description: '都合の良い女性が欲しい', question_id: 1, allocation: 'abcccddd')

# クエスチョン2
answer_2_1 = Answer.create!(description: '清楚で可愛い女性', question_id: 2, allocation: 'abbccd')
answer_2_2 = Answer.create!(description: 'ギャルで可愛い女性', question_id: 2, allocation: 'abccdd')
answer_2_3 = Answer.create!(description: '清楚で綺麗な女性', question_id: 2, allocation: 'abbccd')
answer_2_4 = Answer.create!(description: 'ギャルで綺麗な女性', question_id: 2, allocation: 'abccdd')

# クエスチョン3
answer_3_1 = Answer.create!(description: '真面目で貞操観念が強く、男性経験が少ない女性', question_id: 3, allocation: 'aaabbbcc')
answer_3_2 = Answer.create!(description: '真面目だが、貞操観念が弱い女性(押しに弱い女性)', question_id: 3, allocation: 'abccdd')
answer_3_3 = Answer.create!(description: 'ある程度男性経験はあるが、貞操観念が強い女性', question_id: 3, allocation: 'aaabbc')
answer_3_4 = Answer.create!(description: 'ある程度男性経験があり、程よく貞操観念がある', question_id: 3, allocation: 'abcc')
answer_3_5 = Answer.create!(description: '男絡みが多く、貞操観念が弱い女性', question_id: 3, allocation: 'ccdddd')


### デートプラン(date_plansテーブル)

# 彼女作り
date_plan_A_make_girlfriend = DatePlan.create!(name: 'デートプランA', period: '1日デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '1', purpose_id: 1)
date_plan_B_make_girlfriend = DatePlan.create!(name: 'デートプランB', period: '1日デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '2', purpose_id: 1)
date_plan_C_make_girlfriend = DatePlan.create!(name: 'デートプランC', period: '夕方　or　夜デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '3', purpose_id: 1)
date_plan_D_make_girlfriend = DatePlan.create!(name: 'デートプランD', period: '夜デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '4', purpose_id: 1)
date_plan_E_make_girlfriend = DatePlan.create!(name: 'デートプランE', period: '1日デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '5', purpose_id: 1)
date_plan_F_make_girlfriend = DatePlan.create!(name: 'デートプランF', period: '1日デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '6', purpose_id: 1)

# 遊び
date_plan_A_play = DatePlan.create!(name: 'デートプランA', period: '夜デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '5', purpose_id: 2)
date_plan_B_play = DatePlan.create!(name: 'デートプランB', period: '1日デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '6', purpose_id: 2)
date_plan_C_play = DatePlan.create!(name: 'デートプランC', period: '昼　or　夜　or　夜中デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '7', purpose_id: 2)
date_plan_D_play = DatePlan.create!(name: 'デートプランD', period: '夜デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '8', purpose_id: 2)
date_plan_E_play = DatePlan.create!(name: 'デートプランE', period: '夜　or　夜中デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '8', purpose_id: 2)
date_plan_F_play = DatePlan.create!(name: 'デートプランF', period: '夜　or　夜中デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '9', purpose_id: 2)
date_plan_G_play = DatePlan.create!(name: 'デートプランG', period: '宅飲み　or　お家デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '10', purpose_id: 2)

# 超遊び
date_plan_A_super_play = DatePlan.create!(name: 'デートプランA', period: '夜デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '5', purpose_id: 3)
date_plan_B_super_play = DatePlan.create!(name: 'デートプランB', period: '昼　or　夜　or　夜中デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '6', purpose_id: 3)
date_plan_C_super_play = DatePlan.create!(name: 'デートプランC', period: '夜デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '7', purpose_id: 3)
date_plan_D_super_play = DatePlan.create!(name: 'デートプランD', period: '夜　or　夜中デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '8', purpose_id: 3)
date_plan_E_super_play = DatePlan.create!(name: 'デートプランE', period: '夜　or　夜中デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '9', purpose_id: 3)
date_plan_F_super_play = DatePlan.create!(name: 'デートプランF', period: '宅飲み　or　お家デート', recommend_condition: 'おすすめの条件', description: '説明文', level: '10', purpose_id: 3)



## 場所・スポット(placesテーブル)
# 飲食系
place_1 = Place.create!(name: 'カフェ')
place_2 = Place.create!(name: 'ランチ') # かなり微妙。わざわざランチは行かなくて良い。(ランチよりカフェの方が良いかも？)  # 彼女作り向き。
place_3 = Place.create!(name: 'ディナー(レストラン・ファミレスなど)')
place_4 = Place.create!(name: 'ディナー(レストラン・居酒屋・バーなど)')

place_5 = Place.create!(name: '映画館')
place_6 = Place.create!(name: 'ショッピング') # 微妙。おすすめしない。(深くまで仲良くなっていないと、相手に気を遣ってしまい、自分の回りたいお店を自由に回れないかも？)買い物は一人か、彼女とが良いかも。
place_7 = Place.create!(name: 'ドライブ') # 目的地が決まっていない昼のドライブは微妙。昼のドライブは目的地(カフェなど)を決める。(初心者には尚更きつい。)(夜デートの場合は、ドライブしながら夜景や海辺に行けばいい。) ※ 目的地が決まっていて、そこまでの運転時間をドライブは良き。
place_8 = Place.create!(name: '動物園') # 「彼女作り」向き。
place_9 = Place.create!(name: '水族館') # 「彼女作り」向き。
place_10 = Place.create!(name: '公園') # 大きい有名な公園ならOKかも？
place_11 = Place.create!(name: '遊園地(テーマパーク)') # 難しい。(待つ時間がたくさんある為、深くまで仲良くなっていないと、会話が無くなってしまい、気まずくなる。) 3回目以降のデートなら良いかも？

# 映え(雰囲気が良い)
place_12 = Place.create!(name: '夜景')
place_13 = Place.create!(name: 'イルミネーション')
place_14 = Place.create!(name: '海辺(海)')
place_15 = Place.create!(name: '散歩')

# 個室系
place_16 = Place.create!(name: 'カラオケ') # 「遊び」・「超遊び」向き。
place_17 = Place.create!(name: '漫画喫茶') # 「遊び」・「超遊び」向き。
place_18 = Place.create!(name: '家') # 「遊び」・「超遊び」向き。
place_19 = Place.create!(name: 'ホテル') # 「遊び」・「超遊び」向き。

# セット
place_20 = Place.create!(name: 'カフェ　or　動物園　or　水族館　or　公園')
place_21 = Place.create!(name: '夜景　or　イルミネーション　or　海辺(海)')
place_22 = Place.create!(name: '家　or　ホテル')
place_23 = Place.create!(name: 'カフェ　or　映画館')
place_24 = Place.create!(name: 'カラオケ　or　漫画喫茶')
place_25 = Place.create!(name: 'ドライブ　or　夜景　or　イルミネーション　or　海辺(海)')
place_26 = Place.create!(name: '散歩　or　公園')


### date_plansテーブルとplacesテーブルの中間テーブル(date_plan_placesテーブル)

## 彼女作り
# デートプランA
date_plan_place_make_girlfriend_A_1 = DatePlanPlace.create!(date_plan_id: 1, place_id: 1)
date_plan_place_make_girlfriend_A_2 = DatePlanPlace.create!(date_plan_id: 1, place_id: 5)
date_plan_place_make_girlfriend_A_3 = DatePlanPlace.create!(date_plan_id: 1, place_id: 4)

# デートプランB
date_plan_place_make_girlfriend_B_1 = DatePlanPlace.create!(date_plan_id: 2, place_id: 7)
date_plan_place_make_girlfriend_B_2 = DatePlanPlace.create!(date_plan_id: 2, place_id: 20)
date_plan_place_make_girlfriend_B_3 = DatePlanPlace.create!(date_plan_id: 2, place_id: 3)

# デートプランC
date_plan_place_make_girlfriend_C_1 = DatePlanPlace.create!(date_plan_id: 3, place_id: 5)
date_plan_place_make_girlfriend_C_2 = DatePlanPlace.create!(date_plan_id: 3, place_id: 4)

# デートプランD
date_plan_place_make_girlfriend_D_1 = DatePlanPlace.create!(date_plan_id: 4, place_id: 4)
date_plan_place_make_girlfriend_D_2 = DatePlanPlace.create!(date_plan_id: 4, place_id: 21)

# デートプランE
date_plan_place_make_girlfriend_E_1 = DatePlanPlace.create!(date_plan_id: 5, place_id: 7)
date_plan_place_make_girlfriend_E_2 = DatePlanPlace.create!(date_plan_id: 5, place_id: 20)
date_plan_place_make_girlfriend_E_3 = DatePlanPlace.create!(date_plan_id: 5, place_id: 3)
date_plan_place_make_girlfriend_E_4 = DatePlanPlace.create!(date_plan_id: 5, place_id: 21)

# デートプランF
date_plan_place_make_girlfriend_F_1 = DatePlanPlace.create!(date_plan_id: 6, place_id: 11)
date_plan_place_make_girlfriend_F_2 = DatePlanPlace.create!(date_plan_id: 6, place_id: 4)
date_plan_place_make_girlfriend_F_3 = DatePlanPlace.create!(date_plan_id: 6, place_id: 21)


## 遊び
# デートプランA
date_plan_place_play_A_1 = DatePlanPlace.create!(date_plan_id: 7, place_id: 4)
date_plan_place_play_A_2 = DatePlanPlace.create!(date_plan_id: 7, place_id: 21)
date_plan_place_play_A_3 = DatePlanPlace.create!(date_plan_id: 7, place_id: 22)

# デートプランB
date_plan_place_play_B_1 = DatePlanPlace.create!(date_plan_id: 8, place_id: 23)
date_plan_place_play_B_2 = DatePlanPlace.create!(date_plan_id: 8, place_id: 4)
date_plan_place_play_B_3 = DatePlanPlace.create!(date_plan_id: 8, place_id: 22)

# デートプランC
date_plan_place_play_C_1 = DatePlanPlace.create!(date_plan_id: 9, place_id: 24)
date_plan_place_play_C_2 = DatePlanPlace.create!(date_plan_id: 9, place_id: 22)

# デートプランD
date_plan_place_play_D_1 = DatePlanPlace.create!(date_plan_id: 10, place_id: 4)
date_plan_place_play_D_2 = DatePlanPlace.create!(date_plan_id: 10, place_id: 22)

# デートプランE
date_plan_place_play_E_1 = DatePlanPlace.create!(date_plan_id: 11, place_id: 25)
date_plan_place_play_E_2 = DatePlanPlace.create!(date_plan_id: 11, place_id: 22)

# デートプランF
date_plan_place_play_F_1 = DatePlanPlace.create!(date_plan_id: 12, place_id: 26)
date_plan_place_play_F_2 = DatePlanPlace.create!(date_plan_id: 12, place_id: 22)

# デートプランG
date_plan_place_play_G_1 = DatePlanPlace.create!(date_plan_id: 13, place_id: 26)
date_plan_place_play_G_2 = DatePlanPlace.create!(date_plan_id: 13, place_id: 22)


## 超遊び
# デートプランA
date_plan_place_super_play_A_1 = DatePlanPlace.create!(date_plan_id: 14, place_id: 4)
date_plan_place_super_play_A_2 = DatePlanPlace.create!(date_plan_id: 14, place_id: 21)
date_plan_place_super_play_A_3 = DatePlanPlace.create!(date_plan_id: 14, place_id: 22)

# デートプランB
date_plan_place_super_play_B_1 = DatePlanPlace.create!(date_plan_id: 15, place_id: 24)
date_plan_place_super_play_B_2 = DatePlanPlace.create!(date_plan_id: 15, place_id: 22)

# デートプランC
date_plan_place_super_play_C_1 = DatePlanPlace.create!(date_plan_id: 16, place_id: 4)
date_plan_place_super_play_C_2 = DatePlanPlace.create!(date_plan_id: 16, place_id: 22)

# デートプランD
date_plan_place_super_play_D_1 = DatePlanPlace.create!(date_plan_id: 17, place_id: 25)
date_plan_place_super_play_D_2 = DatePlanPlace.create!(date_plan_id: 17, place_id: 22)

# デートプランE
date_plan_place_super_play_E_1 = DatePlanPlace.create!(date_plan_id: 18, place_id: 26)
date_plan_place_super_play_E_2 = DatePlanPlace.create!(date_plan_id: 18, place_id: 22)

# デートプランF
date_plan_place_super_play_F_1 = DatePlanPlace.create!(date_plan_id: 19, place_id: 26)
date_plan_place_super_play_F_2 = DatePlanPlace.create!(date_plan_id: 19, place_id: 22)

