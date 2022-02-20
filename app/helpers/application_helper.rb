# frozen_string_literal: true

module ApplicationHelper
  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  def default_meta_tags
    {
      title: 'マッチングアプリマスター【マッチングアプリ完全攻略サービス】',
      reverse: true,
      description: 'マッチングアプリ完全攻略サービス',
      keywords: 'マッチングアプリ, 出会いアプリ, 出会系アプリ, マッチングアプリ おすすめ, マッチングアプリメッセージコツ, マッチングアプリ 攻略, マッチングアプリプロフィール, マッチングアプリ付き合うまで, マッチングアプリ デート, セフレ アプリ, ペアーズ, with, タップル, ティンダー',
      icon: [
        { href: image_url('マッチングアプリマスター.jpg') }
      ],
      og: {
        title: 'マッチングアプリマスター【マッチングアプリ完全攻略サービス】',
        description: 'マッチングアプリ完全攻略サービス',
        type: 'website',
        image: image_url('マッチングアプリマスター.jpg'),
        locale: 'ja_JP'
      }
    }
  end
end
