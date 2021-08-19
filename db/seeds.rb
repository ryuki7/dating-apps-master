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
app_1 = App.create!(name: 'ペアーズ', strategy_description: 'ペアーズ攻略説明', icon_image: 'Pairs40R.png', diagnostic_allocation: 'a', diagnostic_description: 'ペアーズ診断説明')
app_2 = App.create!(name: 'ウィズ', strategy_description: 'ウィズ攻略説明', icon_image: 'with50R.png', diagnostic_allocation: 'b', diagnostic_description: 'ウィズ診断説明')
app_3 = App.create!(name: 'タップル', strategy_description: 'タップル攻略説明', icon_image: 'tapple70R.png', diagnostic_allocation: 'c', diagnostic_description: 'タップル診断説明')
app_4 = App.create!(name: 'ティンダー', strategy_description: 'ティンダー攻略説明', icon_image: 'Tinder60R.png', diagnostic_allocation: 'd', diagnostic_description: 'ティンダー診断説明')


# 保管用
# question1 = Question.create!(description: 'どんな目的でマッチングアプリを利用しますか？また、女性とどのような関係になりたいですか？※複数選択可')
# question2 = Question.create!(description: '『外見』どのような女性が好きですか？また、どんな女性と出会いたいですか？近いと思うものを選択してください。※複数選択可')
# question3 = Question.create!(description: '『内面』どのような女性が好きですか？また、どんな女性と出会いたいですか？※複数選択可')