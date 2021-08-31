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
app_1 = App.create!(name: 'Pairs（ペアーズ）', strategy_description: 'ペアーズは真面目に恋活・婚活をしている女性が多い為、彼女を作りたい・結婚したい男性に向いているアプリです。遊びたい男性には向いていません。また、他のアプリに比べてイケメン・ハイスペックな男性が少なく、競争率はあまり高くない為、マッチング率・アポ確定率高め。', icon_image: 'Pairs60R.png', diagnostic_allocation: 'a', diagnostic_description: '真面目な女性が多い。彼女を作りたい人に向いている。')
app_2 = App.create!(name: 'with（ウィズ）', strategy_description: 'ウィズは真面目に恋活・婚活している女性が多い為、彼女を作りたい・いずれ結婚したい男性に向いているアプリです。遊びたい男性には不向きですが、ペアーズほど真面目ではない為、遊ぶことも可能です。また、他のアプリに比べてイケメン・ハイスペックな男性が少なく、競争率はあまり高くない為、マッチング率・アポ確定率高め。清楚な女性が多いです。', icon_image: 'with60R.png', diagnostic_allocation: 'b', diagnostic_description: '清楚な女性が多い。彼女を作りたい人に向いている。')
app_3 = App.create!(name: 'tapple(タップル)', strategy_description: 'タップルは真面目に恋活・婚活している女性と遊びの女性が半々くらい存在する為、彼女が欲しいけど遊びたい気持ちもある男性に向いているアプリです。また、ペアーズやウィズに比べてイケメン・ハイスペックな男性が多い傾向にあり、競争率がそこそこ高い為、マッチング率・アポ確定率はやや低め。清楚な女性・ギャルな女性などの色々な種類の女性が登録しており、可愛い女性が多いです。', icon_image: 'tapple60R.png', diagnostic_allocation: 'c', diagnostic_description: '可愛い子が多い。色々なタイプの女性がいる。')
app_4 = App.create!(name: 'Tinder(ティンダー)', strategy_description: 'ティンダーは真面目に恋活している女性が少数いるが、遊び・遊び気質の女性が多い為、遊びたい男性に向いているアプリです。彼女を作りたい人には向いていないです。また、ペアーズ、ウィズ、タップルに比べ、断トツにイケメン・ハイスペックな男性が多く、競争率がかなり高い為、マッチング率・アポ確定率は低いです。清楚な女性、ギャルな女性などの色々な種類の女性が登録しており、酒好きでフッ軽な可愛い女性が多いです。', icon_image: 'Tinder60R.png', diagnostic_allocation: 'd', diagnostic_description: '可愛い子が多い。彼女作りたい人には向いていない。')


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
step_1_make_girlfriend = Step.create!(name: '1.プロフィール設定', description: '', purpose_id: 1)
step_2_make_girlfriend = Step.create!(name: '2.女性にいいねする', description: '', purpose_id: 1)
step_3_make_girlfriend = Step.create!(name: '3.ファーストメッセージ', description: '', purpose_id: 1)
step_4_make_girlfriend = Step.create!(name: '4.メッセージのやりとり', description: '', purpose_id: 1)
step_5_make_girlfriend = Step.create!(name: '5.アポの取り方・コツ', description: '', purpose_id: 1)
step_6_make_girlfriend = Step.create!(name: '6.デートプラン・スポットを探す', description: '', purpose_id: 1)
step_7_make_girlfriend = Step.create!(name: '7.アポを取ってからデート当日まで', description: '', purpose_id: 1)
step_8_make_girlfriend = Step.create!(name: '8.デート当日(デート別)', description: '', purpose_id: 1)

# 遊びステップボタン
step_1_play = Step.create!(name: '1.プロフィール設定', description: '', purpose_id: 2)
step_2_play = Step.create!(name: '2.女性にいいねする', description: '', purpose_id: 2)
step_3_play = Step.create!(name: '3.ファーストメッセージ', description: '', purpose_id: 2)
step_4_play = Step.create!(name: '4.メッセージのやりとり', description: '', purpose_id: 2)
step_5_play = Step.create!(name: '5.アポの取り方・コツ', description: '', purpose_id: 2)
step_6_play = Step.create!(name: '6.デートプラン・スポットを探す', description: '', purpose_id: 2)
step_7_play = Step.create!(name: '7.アポを取ってからデート当日まで', description: '', purpose_id: 2)
step_8_play = Step.create!(name: '8.デート当日(デート別)', description: '', purpose_id: 2)

# 超遊びステップボタン
step_1_super_play = Step.create!(name: '1.プロフィール設定', description: '', purpose_id: 3)
step_2_super_play = Step.create!(name: '2.女性にいいねする', description: '', purpose_id: 3)
step_3_super_play = Step.create!(name: '3.ファーストメッセージ', description: '', purpose_id: 3)
step_4_super_play = Step.create!(name: '4.メッセージのやりとり', description: '', purpose_id: 3)
step_5_super_play = Step.create!(name: '5.アポの取り方・コツ', description: '', purpose_id: 3)
step_6_super_play = Step.create!(name: '6.デートプラン・スポットを探す', description: '', purpose_id: 3)
step_7_super_play = Step.create!(name: '7.アポを取ってからデート当日まで', description: '', purpose_id: 3)
step_8_super_play = Step.create!(name: '8.デート当日(デート別)', description: '', purpose_id: 3)


## クエスチョン(questionsテーブル)
question1 = Question.create!(description: 'どんな目的でマッチングアプリを利用しますか？また、女性とどのような関係になりたいですか？※複数選択可')
question2 = Question.create!(description: '『外見』どのような女性が好きですか？また、どんな女性と出会いたいですか？近いと思うものを選択してください。※複数選択可')
question3 = Question.create!(description: '『内面』どのような女性が好きですか？また、どんな女性と出会いたいですか？※複数選択可')


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