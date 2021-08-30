# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# テスト用のユーザー
User.create!(name: 'テスト', line_id: 'test-line-id', role: 0)

# テスト用のアプリ
app_1 = App.create!(name: 'Pairs（ペアーズ）', strategy_description: 'ペアーズは真面目に恋活・婚活をしている女性が多い為、彼女を作りたい、結婚したい男性に向いているアプリです。遊びたい男性には向いていません。また、他のアプリに比べてイケメン・ハイスペックな男性が少なく、競争率はあまり高くない為、マッチング率高め。', icon_image: 'Pairs60R.png', diagnostic_allocation: 'a', diagnostic_description: '真面目な女性が多い。彼女を作りたい人に向いている。')
app_2 = App.create!(name: 'with（ウィズ）', strategy_description: 'ウィズ攻略説明', icon_image: 'with60R.png', diagnostic_allocation: 'b', diagnostic_description: '清楚な女性が多い。彼女を作りたい人に向いている。')
app_3 = App.create!(name: 'tapple(タップル)', strategy_description: 'タップル攻略説明', icon_image: 'tapple60R.png', diagnostic_allocation: 'c', diagnostic_description: '可愛い子が多い。色々なタイプの女性がいる。')
app_4 = App.create!(name: 'Tinder(ティンダー)', strategy_description: 'ティンダー攻略説明', icon_image: 'Tinder60R.png', diagnostic_allocation: 'd', diagnostic_description: '可愛い子が多い。彼女作りたい人には向いていない。')


# 保管用
# question1 = Question.create!(description: 'どんな目的でマッチングアプリを利用しますか？また、女性とどのような関係になりたいですか？※複数選択可')
# question2 = Question.create!(description: '『外見』どのような女性が好きですか？また、どんな女性と出会いたいですか？近いと思うものを選択してください。※複数選択可')
# question3 = Question.create!(description: '『内面』どのような女性が好きですか？また、どんな女性と出会いたいですか？※複数選択可')